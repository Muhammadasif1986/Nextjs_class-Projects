import React from 'react'
import Todos from '../components/Todos'
import { ButtonDestructive } from '../components/Button'
export default function TodosList() {
      const Home:string = "Go To Home Page"
      const HomePath:string = '/'
  return (
    <div className='pt-10'>
       <ButtonDestructive 
            name ={Home} 
            address={HomePath}
            />
<Todos />
    </div>
  )
}
