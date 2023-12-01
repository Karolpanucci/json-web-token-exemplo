'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { LogOut, UserCircle } from 'lucide-react';
import '../../global.css'
import { useState } from "react";
import { postUser } from "../../functions/handlerAcessAPI";
import { useRouter } from 'next/navigation';

export default function Register(){
  const [user, setUser] =useState({
    nome:'',
    senha: '',
    confirme: ''
  });

  const {push} = useRouter();

  const handlerFormSubmit = async (event) => {
    event.preventDefault();

    try{
      await postUser(user);
      return push("/pages/dashboard");
    } catch{
      return toast.error("Erro");
    }
  }


    return (
          
  < div className=' bg-gradient-to-tl  from-gray-900 to-gray-800 w-screen h-screen '>

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
            <p className="mt-3 sm:mt-0 ml-4 sm:ml-20 flex hover:text-[#C850C0]"> <a href="/">Home</a> </p>
          </div>
      
          <div className="flex text-white">
            <p className="mt-3 sm:mt-0 ml-4 sm:ml-20 flex hover:text-[#C850C0]"> <a href="/pages/registrar">Registar</a>
    </p>
          </div>
          <div className="flex text-white">
            <p className="mt-3 sm:mt-0 ml-4 sm:ml-20 flex hover:text-[#C850C0]"> Categorias </p>
          </div>
        </div>
      
      
        </div>

        </header>


      < div className=' bg-gradient-to-tl  from-gray-900 to-gray-800 w-screen h-screen flex justify-center items-center '>
    <main className='w-1/2 h-[500px]  bg-zinc-950 rounded-3xl ml-7 flex pb-10 w-[600px]'> 
      <main className=' basis-5/12 flex flex-col  text-white pl-10'>
          <h1 className=' font-sans font-bold  text-3xl text-white my-10 ml-7'>
          Registrar novo usuario
           <span className=' inline-block w-3 h-3 bg-white rounded-full ml-2 bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] '></span>
          </h1>
          <form onSubmit={handlerFormSubmit} className='flex flex-col gap-0 ml-7'>
            <label className=' flex flex-col'>
              Email
              </label>
            <div className=' focus-within:opacity-100 h-10 w-full bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-lg blur-md '></div>

            <div className='relative -top-10 bg-nome focus-within:bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] p-[1px] rounded-lg'>
                  <input
                    className='h-10 w-full bg-zinc-800 rounded-lg p-2  outline-none appearance-none '
                    placeholder='Nome'
                    name="nome"
                    type="name"
                    onChange={(e) => { setUser({ ...user, nome: e.target.value }) }}>
                  </input>

                  </div>
                  <label className=' flex flex-col gap-2' >
              Senha
            </label>
            <div className=' focus-within:opacity-100 h-10 w-full bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-lg blur-md '></div>           
            <div className='relative -top-10 bg-nome focus-within:bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] p-[1px] rounded-lg'> 
            <input
              className='h-10 w-full bg-zinc-800 rounded-lg p-2  outline-none appearance-none '
             
          placeholder='Senha'
          name="senha"
          type='password'
          onChange={(e) => { setUser({ ...user, senha: e.target.value }) }}>
        </input>
        </div>
        
        <label className=' flex flex-col gap-2' >
              Senha
            </label>
            <div className=' focus-within:opacity-100 h-10 w-full bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-lg blur-md '></div>           
            <div className='relative -top-10 bg-nome focus-within:bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] p-[1px] rounded-lg'> 
            <input
              className='h-10 w-full bg-zinc-800 rounded-lg p-2  outline-none appearance-none '
          placeholder='Confirma'
          name="confirme"
          type='text'
          onChange={(e) => { setUser({ ...user, confirme: e.target.value }) }}>
        </input>
        </div>
        <button className='bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] text-white w-[350px] font-bold h-8 rounded-lg mt-4'>Registar</button>

<ToastContainer/>
</form>

</main>


</main>
</div>
</ div>
    )
  }

