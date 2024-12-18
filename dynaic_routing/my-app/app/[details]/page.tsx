import React from 'react'

export default async function DetailsPage(props:any) {
      console.log(props)
      const url = await fetch(`https://jsonplaceholder.typicode.com/todos/${props.params.details}`)
      const res = await url.json();
      console.log('single object ',res)
      
  return (
    <div className='flex flex-col justify-center items-center text-4xl'>
      <h1 className='py-10'>Details page</h1>
      <p className='font-semibold text-2xl mb-8'>Tittle: {res.title}</p>
      <div className='bg-[#ff9f0d] h-48 w-40 border-2 border-black rounded-lg shadow-xl mb-5 flex justify-center items-center'>Book</div>
      <div className='text-lg space-y-3 w-2/12 flex flex-col items-center'>
      <p>User Id: {res.userId}</p>
      <p>Id: {res.id}</p>
      <p>Comleted: {res.completed ? "yes" : "No"} </p>
    </div>
    </div>
  )
}
