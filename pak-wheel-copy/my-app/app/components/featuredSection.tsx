import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Corolla from "../../public/Corolla-X.jpg";
import Alto from "../../public/Suzuki_Alto_-_PNG.png";
import HondaCity from "../../public/Honda_City_Front.jpg";
import Civic from "../../public/Honda civic.jpg";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function FeaturedSection() {
  return (
    <section className= {inter.className}>
      <div className="flex justify-center items-center bg-gray-200 w-full h-auto mt-10">
        <div className="w-8/12">

        <div className="flex justify-between py-14">
          <h1 className="text-2xl">Featured New Cars</h1>
          <p className="text-blue-700 text-sm">View All New Cars</p>
        </div>

        <div>
          <ul className="flex w-2/6 justify-between">
            <Link href="#"><li className="active:font-semibold border-b-4 active:border-blue-700 pb-2">Popular</li></Link>
            <Link href="#"><li className="active:font-semibold border-b-4 active:border-blue-700 pb-2">Upcoming</li></Link>
            <Link href="#"><li className="active:font-semibold border-b-4 active:border-blue-700 pb-2">Newly Lunched</li></Link>
          </ul>
          <hr className="border-2 border-gray-300" />
        </div>

        <section className="flex justify-between pb-20 w-full h-auto mt-5 ">
          <Link href="/corolla"><div className="bg-white mr-4">
            <div className="w-full h-auto"><Image src={Corolla} alt="corolla"/></div>
            <div className="flex flex-col justify-center items-center py-5">
              <h1 className="text-blue-900 text-base font-semibold">Toyota Corolla</h1>
              <p className="text-green-500 text-base">PKR 59.7-75.5 lacs</p>
              <div className="flex items-center py-4">
                <span className="flex items-center text-base text-orange-500">
                  <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStarOutline /><MdOutlineStarOutline />
                  </span><p className="text-blue-700 text-sm">621 Reviews</p></div>
            </div>
          </div>
        </Link>

        <Link href="/alto"><div className="bg-white mr-4">
            <div className="w-full h-auto"><Image src={Alto} alt="alto"/></div>
            <div className="flex flex-col justify-center items-center py-5">
              <h1 className="text-blue-900 text-base font-semibold">Suzuki Alto</h1>
              <p className="text-green-500 text-base">PKR 23.3-30.5 lacs</p>
              <div className="flex items-center py-4">
                <span className="flex items-center text-base text-orange-500">
                  <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStarOutline /><MdOutlineStarOutline />
                  </span><p className="text-blue-700 text-sm">199 Reviews</p></div>
            </div>
          </div>
        </Link>

        <Link href="./hondacity"><div className="bg-white mr-4">
            <div className="w-full h-auto"><Image src={HondaCity} alt="city"/></div>
            <div className="flex flex-col justify-center items-center py-5">
              <h1 className="text-blue-900 text-base font-semibold">Honda City</h1>
              <p className="text-green-500 text-base">PKR 46.5-58.5 lacs</p>
              <div className="flex items-center py-4">
                <span className="flex items-center text-base text-orange-500">
                  <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStarOutline /><MdOutlineStarOutline />
                  </span><p className="text-blue-700 text-sm">458 Reviews</p></div>
            </div>
          </div>
        </Link>

        <Link href="/civic"><div className="bg-white mr-4">
            <div className="w-full h-auto"><Image src={Civic} alt="civic"/></div>
            <div className="flex flex-col justify-center items-center py-5">
              <h1 className="text-blue-900 text-base font-semibold">Honda Civic</h1>
              <p className="text-green-500 text-base">PKR 86.6-99.00 lacs</p>
              <div className="flex items-center py-4">
                <span className="flex items-center text-base text-orange-500">
                  <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStarOutline /><MdOutlineStarOutline />
                  </span><p className="text-blue-700 text-sm">6.7 Reviews</p></div>
            </div>
          </div>
        </Link>
          
        </section>


      </div>
      </div>
    </section>
  )
}
