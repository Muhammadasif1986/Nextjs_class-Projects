import Image from "next/image";
import Todos from "./components/Todos";
import { Button } from "@/components/ui/button";
import { ButtonDestructive } from "./components/Button";

export default function Home() {
  const todos:string = "Todos List";
  const todoPath: string = '/todos';
  const album:string = "Album List";
  const albumPath: string = '/album';
  const photos:string = "Photos List";
  const photosPath: string = '/photos';
  return (
    <div>
    <main className='flex flex-col justify-center items-center gap-10 py-16'>
<h1 className='text-5xl font-semibold mt-8'>Wel come to 'JSON' Placeholder</h1>
<div className='grid grid-cols-1 md:grid-cols-3 space-x-11 p-6 space-y-8 lg:space-y-0'>

    <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-3xl">Todos List</h1>
         <ButtonDestructive
          name ={todos}
         address ={todoPath} />
    </div>
    <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-3xl">Album List</h1>
         <ButtonDestructive 
         name = {album}
         address = {albumPath}
         
         />
    </div>
    <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-3xl">Photos List</h1>
         <ButtonDestructive 
         name = {photos}
         address = {photosPath}
         
         />
    </div>

</div>


    </main>
  </div>
  );
}
