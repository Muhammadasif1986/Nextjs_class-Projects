
import React from 'react'
import { ButtonDestructive } from '../../components/Button';
export default async function DetailsPage(props:any) {
  console.log(props)
      const Name = "Go Back"
      const Path = '/photos'
      
      const url2 = await fetch(`https://jsonplaceholder.typicode.com/photos/${props.params.id}`)
      const res2 = await url2.json();
      console.log('single object ',res2)

      
  return (
    <div className='flex flex-col justify-center items-center text-4xl py-10'>
      <ButtonDestructive  
      name={Name}    
      address={Path}
      />
      
    <h1 className='py-10'>Photos Details page</h1>

<div className=
'bg-[#ff9f0d] h-auto w-min border-2 border-black rounded-lg shadow-xl mb-5 overflow-visible p-4 text-center'>
 <p className='mb-6 underline font-[poppins] font-semibold text-blue-900'>Photos</p>
 <p className='text-lg'>{res2.title}</p> </div>
<div className='text-lg space-y-3 w-2/12 flex flex-col items-center'>
<p>User Id: {res2.albumId}</p>
<p>Id: {res2.id}</p>
<p>thumbnail Url: {res2.thumbnailUrl}</p>
<p>url: {res2.url} </p>
</div>

    </div>
  )
}
