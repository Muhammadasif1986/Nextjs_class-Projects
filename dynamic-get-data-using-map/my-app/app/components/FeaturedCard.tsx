import Link from "next/link";
import Image from "next/image";
import { MdOutlineStar, MdOutlineStarOutline } from "react-icons/md";

interface CarProps {
  carImage: string;
  carName: string;
  carPrice: string;
  carReviews: number;
}

export default function FeaturedSection(props: CarProps) {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
      <section
        className="flex flex-col gap-7 justify-center items-center mt-5 mb-10
        md:grid-flow-row md:col-span-2 lg:col-span-4 lg:gap-7"
      >
        <Link href={`/ProductDetails/${encodeURIComponent(props.carName)}`}>
          <div className="bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-md">
            <div className="w-auto h-auto">
              <Image
                src={props.carImage}
                alt={props.carName}
                width={300}
                height={300}
                className="rounded-t-md"
              />
            </div>
            <div className="flex flex-col justify-center items-center py-5">
              <h1 className="text-blue-900 text-base font-semibold">
                {props.carName}
              </h1>
              <p className="text-green-500 text-base">PKR {props.carPrice}</p>
              <div className="flex items-center py-4">
                <span className="flex items-center text-base text-orange-500">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStarOutline />
                  <MdOutlineStarOutline />
                </span>
                <p className="text-blue-700 text-sm ml-2">
                  {props.carReviews} Reviews
                </p>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
