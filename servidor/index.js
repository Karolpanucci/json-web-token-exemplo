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

var cookieParser = require('cookie-parser')

const express = require('express');
const { usuario } = require('./models');



const app = express();

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
    }).unless({ path: ["/autenticar", "/logar", "/deslogar",  ] })
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
      res.render('listar', {usuarios}); 
    
    }catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Ocorreu um erro ao buscar os usuário. ☹️' });
    }
    });
  
    app.post('/logar', async (req, res) => {
      const eu = await usuario.findOne({ where: { nome: req.body.nome, senha:crypto.encrypt( req.body.senha) } });
    
      if(eu){
       const id = 1;
       const token = jwt.sign({id}, process.env.SECRET, {
        expiresIn:300 
       });
       res.cookie('token', token, {httpOnly: true}); 
       return res.json({
        usuario: req.body.usuario,
        token: token 
       });
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



  app.listen(3000, function() {
    console.log('App de Exemplo escutando na porta 3000!')
  });

