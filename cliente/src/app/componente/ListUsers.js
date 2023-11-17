export default async function ListUsers({users}){
    await new Promise((resolve) => setTimeout(resolve, 500));
    return(
        <>
         {users?.map ((user)=>
               <p>{user.nome}</p>
          )}
        </>
    )
}