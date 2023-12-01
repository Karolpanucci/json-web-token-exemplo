'use server'

import { cookies } from "next/dist/client/components/headers";


const url = "http://localhost:4000"


const getUserAuthenticated = async (user) => {
    console.log(user)
    const responseOfApi = await fetch(url +"/user/authenticated",
    {
        cache: "no-cache",
        method: "POST",

        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(user)
    }
    );
   const userAuth =await responseOfApi.json();
   console.log(userAuth)
   return userAuth;
}

const getUsers = async () =>{

    const token = cookies().get("token")?.value
    try{
        const responseOfApi = await fetch(url + "/usuario/listar",{
            next:{revalidate: 1},
            headers: {
                "Content-type": "Application/json",
                Cookie: `token=${token}`
            }

        });
        const listUsers = await responseOfApi.json();

        return listUsers
    }catch{
        return null;
    }

    }

            const postUser = async (user) =>{
                console.log(user)
            const token = cookies().get("token")?.value;
            try {
                const responseOfApi = await fetch(url + "/usuarios/cadastrar", {
                    method: "POST",
                    headers: { 'Content-Type': 'Application/json',
                    Cookie: `token=${token}`
                },
                    
                    body: JSON.stringify(user)
                });
                const userSave = await responseOfApi.json();
                return userSave;
            } catch {
                return null;
            }
        }
    
    

export { getUsers, getUserAuthenticated, postUser };

