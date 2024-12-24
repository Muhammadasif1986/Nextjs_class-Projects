import React from 'react'
import Link from 'next/link'
export default async function Photos() {
      const url = await fetch("https://jsonplaceholder.typicode.com/photos")
      const respond  = await url.json()
  return (
      <main className='flex flex-col justify-center items-center py-6'>
      <h1 className='text-center mb-12 text-4xl font-bold underline'>Photos List</h1>
<div className='w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row-dense font-[poppins]'>
{respond.map((todo:any) => {
      return(
<div key={todo}>
<Link href={`/photos/${todo.id}`}>
<div className='border-[2px] border-blue-900 m-2 text-center p-2 rounded-lg bg-[#0d0d0d] text-white'>
    <p>{todo.id}</p>
    <p>{todo.title}</p>
</div>
  </Link>
 </div> 
)
})}
</div>
</main>
  )
}
