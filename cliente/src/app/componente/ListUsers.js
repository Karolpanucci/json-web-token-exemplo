import { User } from "lucide-react";


export default async function ListUsers({users}) {
    await new Promise((resolve) => setTimeout(resolve,5000));
   
    return(
      <>
     <div>
  {users?.map((user, index) => (
    <div key={index} className="relative">
      <div className='absolute inset-0 bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-lg blur-md'></div>
      <div className="bg-gray-800 text-white shadow-md p-8 mb-8 rounded-md flex items-center outline-none appearance-none relative">
        <div className="mr-4">
          <User size={40} />
        </div>
        <div>
          <p className="text-2xl font-bold mb-2">{user.nome}</p>
        </div>
      </div>
    </div>
  ))}
</div>

        
</>
    );
}