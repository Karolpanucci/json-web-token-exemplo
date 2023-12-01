const crypto = require('./crypto');

const encrypted_key = crypto.encrypt("HelloWorld");
console.log(encrypted_key);
const decrypted_key = crypto.decrypt(encrypted_key);
console.log(decrypted_key);

// JWT
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
var { expressjwt: expressJWT } = require("express-jwt");
const cors = require('cors'); 
const corsOptions = {
  //CLIENTE  QUE VAI POSSUIR O ACESSO
    origin:"http://localhost:3000",
    // O QUE O CLIENTE VAI PODER ACESSAR
    methods: "GET, PUT, POST, DELETE",
    allowedHeaders: "Content-Type ,  Authorization",
    credentials: true

}
// com o cors vc abre uma porta no servidor para dar acesso para o cliente, e so pode acessar o que o cors permite

var cookieParser = require('cookie-parser') 

const express = require('express');
const { usuario } = require('./models');



const app = express();

app.use(cors(corsOptions))
app.set('view engine', 'ejs');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

  app.use(cookieParser());
  app.use(
    expressJWT({
      secret: process.env.SECRET,
      algorithms: ["HS256"],
      getToken: req => req.cookies.token
    }).unless({ path: ["/autenticar",  "/deslogar", "/user/authenticated"] })
  );


  app.get('/usuarios/cadastrar', async function(req, res){
    res.render('cadastrar');
  })

  app.post('/usuarios/cadastrar', async function(req, res){
    if(req.body.senha == req.body.confirme){
      try { 
        const crypt = {
          nome: req.body.nome,
          senha: crypto.encrypt(req.body.senha)
        }
        if(req.body.senha == req.body.confirme){
          const servidor = await usuario.create(crypt);
          res.redirect('/usuario/listar')
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'ihhh rapaz essa senha esta certa mesmo? 🤨' });
    }}})
  
 
    app.get('/usuario/listar', async function(req,res){
      try{
      var usuarios = await usuario.findAll(); 
      res.json(usuarios); 
    
    }catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Ocorreu um erro ao buscar os usuário. ☹️' });
    }
    });
  
    app.post('/user/authenticated', async (req, res) => {
      const eu = await usuario.findOne({ where: { nome: req.body.nome, senha:crypto.encrypt( req.body.senha) } });
    
      if(eu){
       const id = 1;
       const token = jwt.sign({id}, process.env.SECRET, {
        expiresIn:4000 
       });
      return res.cookie('token', token, {httpOnly: true}).json({
        nome: eu.nome ,
        token: token
       }) 
       //return res.json(eu);


      }
      res.status(500).json({mensagem: "ihhh rapaz não ta indo ☹️"}); 
    })


    app.post('/deslogar', function(req, res) {
      res.cookie('token', null, {httpOnly: true}); 
      res.json({deslogado:true})
    })

    

    app.get('/autenticar', async function(req, res){
      res.render('autenticar');
    })

      app.get('/', async function(req, res){
        res.render("home")
      })



  app.listen(4000, function() {
    console.log('App de Exemplo escutando na porta 4000!')
  });

