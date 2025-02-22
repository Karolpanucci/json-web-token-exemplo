'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './global.css'
import Image from 'next/image';

export default function Login() {
  const [user, setUser] = useState({
    nome: '',
    senha: '',
  });
  const { push,refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if (userAuth.token === undefined) {
        toast.error("Verifique se senha ou E-mail são válidos!");
      } else {
        push('/pages/dashboard');
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      refresh();
    }
  };
  return (
    < div className=' bg-gradient-to-tl  from-gray-900 to-gray-800 w-screen h-screen flex justify-center items-center '>
    <main className='w-1/2 h-[500px] bg-zinc-950 rounded-3xl flex pb-10 w-[900px]'> 
      <main className=' basis-5/12 flex flex-col  text-white pl-10'>
          <h1 className=' font-sans font-bold  text-3xl text-white my-12'>
            Faça seu Login
           <span className=' inline-block w-3 h-3 bg-white rounded-full ml-2 bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] '></span>
          </h1>
          <form onSubmit={handlerLogin} className='flex flex-col gap-0'>
            <label className=' flex flex-col'>
              Email
            </label>
            <div className=' focus-within:opacity-100 h-10 w-full bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-lg blur-md '></div>

            <div className='relative -top-10 bg-nome focus-within:bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] p-[1px] rounded-lg'>
                  <input
                    className='h-10 w-full bg-zinc-800 rounded-lg p-2  outline-none appearance-none '
                    placeholder='E-mail'
                    name='nome'
                    type="text"
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
              name='senha'
              type='password'
              onChange={(e) => { setUser({ ...user, senha: e.target.value }) }}>
            </input>
            </div>

             <a className=' text-right text-sam'> Esqueci minha senha?</a>
             <button className='bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] text-white font-bold h-8 rounded-lg mt-4'>Entrar</button>
              <a className='text-center text-sm underline cursor-pointer mt-4' >Ainda na possuo cadastro</a>
            <ToastContainer/>
          </form>

      </main>
      <main className='w-7/12 '> 

<Image 
          className=' ml-16 w-[500px] h-[300] rounded-tr-3xl  rounded-br-3xl' 
          src="/imag.jpg"

          width={9000}
          height={400}


          alt="Picture of the author"
      />
</main>

    </main>
    </ div>
  )
}