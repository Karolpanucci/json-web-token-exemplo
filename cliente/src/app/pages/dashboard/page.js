import { getUsers } from "../../functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUsers from "../../componente/ListUsers";
import Sair from "../../componente/exit";

import { LogOut, UserCircle } from 'lucide-react';
import '../../global.css';

export default async function Dashboard() {
    const users = await getUsers();

    return (
     <div className="bg-slate-800 min-h-screen items-center justify-between">
        
        <Suspense fallback={<div className="flex items-center justify-center h-screen  bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70]"><p className="text-4xl text-white">Carregando...</p></div>}>
    <header className="w-full bg-purple-900">
      <div className="flex w-full h-28 items-center">
        <img
          className='mt-0 ml-4 sm:ml-10'
          src="/logo.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <div className="flex items-center ml-4 sm:ml-16">
          <div className="flex text-white">
            <p className="mt-3 sm:mt-0 ml-4 sm:ml-20 flex">  <a href="/pages/alterar">categorias</a> </p>
          </div>
          <div className="flex text-white">
            <p className="mt-3 sm:mt-0 ml-4 sm:ml-20 flex"><a href="/pages/registrar">Registrar</a></p>
          </div>
          
        </div>
        <div className="flex font-bold p-5  bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] text-white  mt-3 ml-auto mr-4 rounded-3xl">
          <LogOut />  <Sair/>
        </div>
       
            
         
      </div>
    </header>



    <main className="grid grid-cols-1 md:grid-cols-4 ml-7 mr-7 gap-4 mt-8 text-white ">
   

             <ListUsers users={users} />
    </main>
            </Suspense>

</div>
);
}




















            
