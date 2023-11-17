'use client'
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import '@/app/global.css';
import { LogOut } from 'lucide-react';

export default function Sair() {
    const {refresh} = useRouter();

    // Função para realizar o logout e redirecionamento
    function exit() {
        Cookies.remove('token');
       refresh(); // Redirecionar o usuário para a página inicial (ou qualquer outra página desejada)
    }

    
    return (
        <>
            <button onClick={exit} className="flex font-bold text-[#FFCC70] p-5 mt-3 ml-auto mr-4">
                <LogOut/>  <span className='ml-3'>Sair</span>
            </button>
        </>
    )
}
