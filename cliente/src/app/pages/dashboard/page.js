import { getUsers } from "../../functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUsers from "../../componente/ListUsers";

import Sair from "../../componente/exit";


export default async function Dashboard() {
    const users = await getUsers();

    return (
        <div>
            <Suspense fallback={<p>carregando...</p>}>
                <ListUsers users={users} />
                <a href="/pages/alterar">Alterar</a>
                <a href="/pages/registrar">Registrar</a>
                <Sair/>


            </Suspense>
            
        </div>
    );
}
