import React from 'react'
import Album from '../components/Album'
import Link from 'next/link'
import { ButtonDestructive } from '../components/Button'

export default function AlbumList() {
      const Home:string = "Go To Home Page"
      const HomePath:string = '/'
  return (
    <div className='pt-10'>
      <ButtonDestructive 
      name ={Home} 
      address={HomePath}
      />
      <Album />
    </div>
  )
}
