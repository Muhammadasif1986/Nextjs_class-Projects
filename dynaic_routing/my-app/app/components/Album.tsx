import React from 'react'
import Link from 'next/link';

export default async function Album() {
      const url2 = await fetch('https://jsonplaceholder.typicode.com/albums')
      const res2 = await url2.json();
  return (
      <main className='flex flex-col justify-center items-center py-6'>
            <h1 className='text-center mb-12 text-4xl font-bold underline'>Albums List</h1>
    <div className='w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row-dense font-[poppins]'>
      {res2.map((album:any) => {
            return(
<div key={album}>
      <Link href={`/album/${album.id}`}>
      <div className='border-[2px] border-blue-900 m-2 text-center p-2 rounded-lg bg-[#0d0d0d] text-white'>
          <p>{album.id}</p>
          <p>{album.title}</p>
      </div>
        </Link>
       </div> 
      )
      })}
    </div>
    </main>
    
  )
}
