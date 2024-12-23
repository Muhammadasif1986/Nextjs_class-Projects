import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function FeaturedSection() {
  interface Cars{
    id:string,
    carImage:string,
    carName:string,
    carPrice:string,
    carReviews:number
  }
  
  let carDetails:Cars[] =[
    {id:"1", carImage:"/Corolla-X.jpg", carName:"Corolla",carPrice:"59.7-75.5",carReviews:621  },
    {id:"2", carImage:"/Suzuki_Alto_-_PNG.png", carName:"Suzuki Alto",carPrice:"23.7-30.5",carReviews:199},
    {id:"3", carImage:"/Honda_City_Front.jpg", carName:"Honda City",carPrice:"32.7-55.5",carReviews:491  },
    {id:"4", carImage:"/Honda civic.jpg", carName:"Honda Civic",carPrice:"34.7-80.5",carReviews:321  },
  ]
  return (
    <section className= {inter.className}>
      <div className="flex justify-center items-center bg-gray-200 w-full h-auto mt-10">
        <div className="w-11/12 md:w-10/12 lg:w-8/12">

        <div className="flex justify-between py-14">
          <h1 className="text-2xl">Featured New Cars</h1>
          <p className="text-blue-700 text-sm">View All New Cars</p>
        </div>

        <div>
          <ul className="flex w-full justify-between md:w-3/6">
            <Link href="#"><li className="active:font-semibold border-b-4 active:border-blue-700 pb-2">Popular</li></Link>
            <Link href="#"><li className="active:font-semibold border-b-4 active:border-blue-700 pb-2">Upcoming</li></Link>
            <Link href="#"><li className="active:font-semibold border-b-4 active:border-blue-700 pb-2">Newly Lunched</li></Link>
          </ul>
          <hr className="border-2 border-gray-300" />
        </div>

        <section 
        className="flex flex-col gap-7 justify-between items-center mt-5 mb-10
        md:grid lg:grid-cols-4 lg:gap-7 md:grid-cols-2">
          {
carDetails.map((Cars,index)=>{
  return(
    <div key={index}>
    <Link href={`/carsDetails/${Cars.id}`}><div className="bg-white mr-4">
            <div className="w-full h-auto"><Image src={Cars.carImage} alt="corolla" width={300} height={300}/></div>
            <div className="flex flex-col justify-center items-center py-5">
              <h1 className="text-blue-900 text-base font-semibold">{Cars.carName}</h1>
              <p className="text-green-500 text-base">PKR {Cars.carPrice}</p>
              <div className="flex items-center py-4">
                <span className="flex items-center text-base text-orange-500">
                  <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStarOutline /><MdOutlineStarOutline />
                  </span><p className="text-blue-700 text-sm">{Cars.carReviews} Reviews</p></div>
            </div>
          </div>          
        </Link>
        </div>
  )
})
}     
 </section>
      </div>
      </div>
      
    </section>
    
  )}
