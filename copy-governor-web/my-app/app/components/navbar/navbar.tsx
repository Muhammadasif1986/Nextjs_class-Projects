import Image from "next/image";
import logo from "../../public/logo.png"
import Link from "next/link";
const Navbar=()=>{
      return(
            <div>
      <header>
            <nav>
                  <div className="flex bg-blue-800 w-full h-16 justify-between justify-center px-6 items-center text-black text-xl">
                        <div className=" h-64 w-32 flex justify-center items-end" ><Image src={logo} alt="Logo" className="h-1/2 w-2/3"  /></div>
                        <div className="text-white text-2xl h-14 w-1/2 flex justify-center items-center font-semibold">Tuition Free Education Program on Latest Technologies</div>
                        
                        <div className="flex justify-center justify-between h-14 w-1/4">
                        <ul className="flex justify-center items-center font-light text-white text-sm">
                              <li className="mr-7"><Link href="/home">Home</Link></li>
                              <li className="mr-7"><Link href="/apply">Apply</Link></li>
                              <li className="mr-7"><Link href="/job">Job</Link></li>
                              <li className="mr-7"><Link href="/result">Result</Link></li>
                              <li className=""><Link href="/course">Course</Link></li>
                              <select className="bg-transparent">
                                    <option value="en"></option>
                                    <option value="hi"></option>
                                    <option value="none"></option>
                              </select>
                        </ul>
                        </div>
                  </div> 
            </nav>
            
      </header>
            </div>
      )
      }
      
      export default Navbar;
      
