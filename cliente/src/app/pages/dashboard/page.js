import { getFilme, getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import Link from 'next/link';
import { Eye, Gem, LogOut } from 'lucide-react';
import '@/app/global.css';

import { useRouter } from "next/navigation";
import Sair from "@/app/componente/exit";

export default async function Dashboard() {
  const lista = await getUsers()
 
  return (
   
    <div className=' bg-slate-800 min-h-screen items-center justify-between'>
      <Suspense fallback={<p>carregando...</p>}>
      <header className="w-full bg-zinc-950">
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
            <p className="mt-3 sm:mt-0 ml-4 sm:ml-20 flex hover:text-[#C850C0]"> <a href="/pages/alterar">Alterar Usuario</a> </p>
          </div>
          <div className="flex text-white">
            <p className="mt-3 sm:mt-0 ml-4 sm:ml-20 flex hover:text-[#C850C0]"> <a href="/pages/registrar">Registar Novo Usuario</a>
</p>
          </div>
          <div className="flex text-white">
            <p className="mt-3 sm:mt-0 ml-4 sm:ml-20 flex hover:text-[#C850C0]"> Categorias </p>
          </div>
        </div>
        <Sair/>
       
        </div>

        </header>

      
        <h1 className="font-bold text-5xl ml-[35%] mt-8 text-white justify-center items-center">Seja Bem Vindo!!</h1>
        <h2 className="font-bold text-xl ml-[35%] mt-8 text-white justify-center items-center">Aqui temos Alguns dos nossos Usuarios</h2>
      
        <ListUsers users={lista} />

        
      </Suspense>

    </div>
  );
}
