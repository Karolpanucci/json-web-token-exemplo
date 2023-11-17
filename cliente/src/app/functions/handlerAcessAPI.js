'use server'

import ListUsers from "../componente/ListUsers"



/*let filmes = [
    
    {
        codigo: 1 ,
        nome: "De volta pro futuro",
        estilo:"Ficção Cientifica",
        resumo:"O filme conta a história de Marty McFly, um adolescente que sonha em viver de música, mas é inseguro em relação aos seus talentos como guitarrista ",
        image:"/devolta.jpg",
        visu:"8.377",
        link:"https://revistamonet.globo.com/Filmes/noticia/2021/10/de-volta-para-o-futuro-confira-historias-e-curiosidades-sobre-o-filme.html"
    },

    {
        codigo:  2,
        nome: "Edward Mãos de Tesoura",
        estilo:"Comédia,drama",
        resumo:"Outro clássico da Sessão da Tarde, Edward Mãos de Tesoura é uma história cativante de fantasia, com pitadas de drama e romance. ",
        image:"/eaw.jpg",
        visu:"10.000",
        link:"https://www.youtube.com/watch?v=4XKjYC-_GJM"
    },
   
    {
        codigo: 3 ,
        nome: "Titanic",
        estilo:"Drama, romance",
        resumo:"A bordo do navio RMS Titanic, Jack e Rose enfrentam os obstáculos sociais para viver uma incrível história de amor. tendo faturado 11 estatuetas do Oscar",
        image:"/tita.jpg",
        visu:"12.000",
        link:"https://www.youtube.com/watch?v=0uWkF-gz7jI&t=1s"
    },

    {
        codigo: 4 ,
        nome: "Matrix",
        estilo:"Ficção, ação",
        resumo:"Matrix marcou época. Primeiro, por seus efeitos visuais revolucionários. Depois, pela trama super original e com altíssima voltagem filosófica. ",
        image:"/matrix.jpg",
        visu:"15.00",
        link:"https://www.youtube.com/watch?v=2KnZac176Hs&t=40s"
    },

    
    {
        codigo: 5 ,
        nome: "Clube da Luta",
        estilo:"ação, drama",
        resumo:" Clube da Luta tornou-se famoso pela sua trama intrincada, suas cenas de violência e sua crítica feroz ao sistema capitalista.",
        image:"/club.jpg",
        visu:"45.377",
        link:"https://www.youtube.com/watch?v=Fs0-4NLSO2Y"
    },

    {
        codigo: 6,
        nome: "Edward Mãos de Tesoura",
        estilo:"Comédia,drama",
        resumo:"Outro clássico da Sessão da Tarde, Edward Mãos de Tesoura é uma história cativante de fantasia, com pitadas de drama e romance. ",
        image:"/eaw2.jpg",
        visu:"10.000",
        link:"https://www.youtube.com/watch?v=4XKjYC-_GJM"
    },
   
    {
        codigo: 7 ,
        nome: "Titanic",
        estilo:"Drama, romance",
        resumo:"A bordo do navio RMS Titanic, Jack e Rose enfrentam os obstáculos sociais para viver uma incrível história de amor. tendo faturado 11 estatuetas do Oscar",
        image:"/tita2.jpg",
        visu:"12.000",
        link:"https://www.youtube.com/watch?v=0uWkF-gz7jI&t=1s"
    },

    {
        codigo: 8,
        nome: "Matrix",
        estilo:"Ficção, ação",
        resumo:"Matrix marcou época. Primeiro, por seus efeitos visuais revolucionários. Depois, pela trama super original e com altíssima voltagem filosófica. ",
        image:"/matrix2.jpg",
        visu:"15.00",
        link:"https://www.youtube.com/watch?v=Fs0-4NLSO2Y"
    },*/

  


const url ="https://service-work-p.vercel.app"

const getUserAuthenticated = async (user) => {
 const resposeOfApi = await fetch (url+ '/user/authenticated',
            {

              method: "POST",
              headers:{ "Content-type" : "Application/json"} ,
              body: JSON.stringify(user)


            }
            )
             const userAuth = await resposeOfApi.json()
              console.log(userAuth);
             return userAuth;

}
 
const getUsers = async () =>{
    try{
        const resposeOfApi = await fetch(url + "/user",{
            next: {revalidate: 10}
        })
        const listUsers =resposeOfApi.json()
        return listUsers

    } catch{
        return null;
    }
};


const postUser = async (user) =>{
    try{
        const responseOfApi = await fetch(url + "/user", {
            method: "POST",
            headers: { 'Content-Type': 'Aplication/json'},
            body: JSON.stringify(user)
        });
        const userSave = await responseOfApi.json();
        return userSave;
    }catch{
       return null;
    }
}
       

export {  getUserAuthenticated, getUsers, postUser };