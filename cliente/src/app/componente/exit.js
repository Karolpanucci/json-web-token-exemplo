'use client'
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";



export default function Sair() {
    const {refresh} = useRouter();

    // Função para realizar o logout e redirecionamento
    function exit() {
        Cookies.remove('token');
       refresh(); // Redirecionar o usuário para a página inicial (ou qualquer outra página desejada)
    }


    return (
        <>
            <button onClick={exit} className="">
            <span className='ml-3'>Sair</span>
            </button>
        </>
    )
}