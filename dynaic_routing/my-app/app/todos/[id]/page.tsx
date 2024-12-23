
import React from 'react'
import { ButtonDestructive } from '../../components/Button';
export default async function DetailsPage(props:any) {
      const Name = "Back to Home"
      const Path = '/'
      console.log(props)
      
      const url = await fetch(`https://jsonplaceholder.typicode.com/todos/${props.params.id}`)
      const res = await url.json();
      console.log('single object ',res)
      
  return (
    <div className='flex flex-col justify-center items-center text-4xl py-10'>
      <ButtonDestructive  
      name={Name}    
      address={Path}
      />
      <h1 className='py-10'>Todos Details page</h1>

      <div className=
      'bg-[#ff9f0d] h-auto w-min border-2 border-black rounded-lg shadow-xl mb-5 overflow-visible p-4 text-center'>
       <p className='mb-6 underline font-[poppins] font-semibold text-blue-900'>Todos</p>
       <p className='text-lg'>{res.title}</p> </div>
      <div className='text-lg space-y-3 w-2/12 flex flex-col items-center'>
      <p>User Id: {res.userId}</p>
      <p>Id: {res.id}</p>
      <p>Completed: {(res).completed ? "yes" : "No"} </p>
    </div>
    </div>
  )
}
