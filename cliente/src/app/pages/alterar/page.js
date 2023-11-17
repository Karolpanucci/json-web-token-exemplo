'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import '@/app/global.css';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, Gem, LogOut } from 'lucide-react';

const FormTudo = () => {


  const handlerLogin = async (e) => {
    e.preventDefault();
  toast.error("Usuario Alterado Com Sucesso !!😊")
  }
  return (
    <>
    
    < div className=' bg-gradient-to-tl  from-gray-900 to-gray-800 w-screen h-screen '>

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
            <p className="mt-3 sm:mt-0 ml-4 sm:ml-20 flex hover:text-[#C850C0]"> <a href="/">Home</a> </p>
          </div>
          <div className="flex text-white">
            <p className="mt-3 sm:mt-0 ml-4 sm:ml-20 flex hover:text-[#C850C0]"> <a href="/pages/alterar">Alterar Filmes</a> </p>
          </div>
          <div className="flex text-white">
            <p className="mt-3 sm:mt-0 ml-4 sm:ml-20 flex hover:text-[#C850C0]"> <a href="/pages/registrar">Registar Novo Filme</a>
</p>
          </div>
          <div className="flex text-white">
            <p className="mt-3 sm:mt-0 ml-4 sm:ml-20 flex hover:text-[#C850C0]"> Categorias </p>
          </div>
        </div>
        <button className="flex font-bold text-[#FFCC70] p-5 mt-3 ml-auto mr-4">
          <LogOut/>  <spam className='ml-3'>Sair</spam>
        </button>
        </div>

        </header>







    <div className=" flex justify-center items-center">
    <main className='w-1/2 h-[500px] bg-zinc-950 rounded-3xl  pb-10 mt-24'> 
      <main className='  text-white pl-10 ml-28 mt-16'>
          <h1 className=' font-sans font-bold  text-3xl text-white justify-center mt-10'>
            Alterar Login
           <span className=' inline-block w-3 h-3 bg-white rounded-full ml-2 bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] '></span>
          </h1>
          <form onSubmit={handlerLogin} className='flex flex-col gap-0 mt-11'>
            <label className=' flex flex-col'>
              Email
            </label>
               <div className=' focus-within:opacity-100 h-10 w-[350px] bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-lg blur-md '></div>
               
                  <div className='relative -top-10 bg-nome focus-within:bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] p-[1px] rounded-lg'>
                        <input
                          className='h-10 w-[350px] bg-zinc-800 rounded-lg p-2  outline-none appearance-none '
                          placeholder='E-mail'
                          type="email"
                         >
                        </input>
          
               </div>
            <label className=' flex flex-col gap-2' >
              Senha
            </label>
            <div className=' focus-within:opacity-100 h-10 w-[350px] bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-lg blur-md '></div>           
            <div className='relative -top-10 bg-nome focus-within:bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] p-[1px] rounded-lg'> 
            <input
              className='h-10 w-[350px] bg-zinc-800 rounded-lg p-2  outline-none appearance-none '
              placeholder='Senha'
              type='password'
           >
            </input>
            </div>
            
          
            
      
            <ToastContainer/>
          </form>
        
      </main>
      
      
    </main>
    </div>
    </ div>
    </>
  )
}

export default FormTudo;
