'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
      <div>
        <h1>Cadastrar</h1>
        <form onSubmit={handlerFormSubmit}>
        <input
          placeholder='Nome'
          name="nome"
          type="name"
          onChange={(e) => { setUser({ ...user, nome: e.target.value }) }}>
        </input>

        <input
          placeholder='Senha'
          name="senha"
          type='password'
          onChange={(e) => { setUser({ ...user, senha: e.target.value }) }}>
        </input>
        <input
          placeholder='Confirma'
          name="confirme"
          type='text'
          onChange={(e) => { setUser({ ...user, confirme: e.target.value }) }}>
        </input>
          <button>Cadastrar</button>
          <ToastContainer/>
        </form>
      </div>
    )
  }

