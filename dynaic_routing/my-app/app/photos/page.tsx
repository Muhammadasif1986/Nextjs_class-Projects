import React from 'react'
import Photos from '../components/Photos'
import { ButtonDestructive } from '../components/Button'
export default function PhotosList() {
      const Home:string = "Go To Home Page"
      const HomePath:string = '/'
  return (
    <div className='pt-10'>
       <ButtonDestructive 
            name ={Home} 
            address={HomePath}
            />
<Photos />
    </div>
  )
}
