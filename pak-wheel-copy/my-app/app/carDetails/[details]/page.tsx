import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import getCars from "@/getCars";

interface Car {
  name: string;
  slug: string;
  model: string;
  price: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  doors: number;
  engine: string;
  condition: string;
  driven: string;
  transmission: string;
  suspension: string;
  fuel: string;
  milage: string;
}


export default async function CarDetails(props:any) {
  // Await params if needed (optional, depending on your setup)
  const carSlug =props.params.details;

  const cars = await getCars();
  const car = cars.find((car: Car) => car.slug === carSlug);

  if (!car) {
    notFound();
  }

  return (
    <main>
      <section className="flex justify-center items-center bg-slate-300">
        <div className="flex flex-col justify-center items-center w-full lg:w-8/12 lg:p-20">
          <h1 className="text-3xl font-semibold underline underline-offset-2 pb-10">
            {car.name} 2024 Price in Pakistan, Images, Reviews & Specs
          </h1>
          <div className="w-auto px-6">
            <Image
              src={urlFor(car.image).width(600).height(400).url()}
              alt={`Image of ${car.name}`}
              width={600}
              height={400}
            />
          </div>
          <div className="flex flex-col justify-between text-xs p-10 lg:flex-row">
            <button className="px-4 py-3 mt-2 bg-blue-800 text-white border-2 border-blue-800 rounded-md mr-4">
              Book a Test drive
            </button>
            <button className="px-4 py-3 mt-2 bg-white text-blue-800 border-2 border-blue-800 rounded-md mr-4">
              Request Bank Finance
            </button>
            <button className="px-4 py-3 mt-2 bg-white text-blue-800 border-2 border-blue-800 rounded-md mr-4">
              Visit Place
            </button>
            <button className="px-4 py-3 mt-2 bg-white text-blue-800 border-2 border-blue-800 rounded-md mr-4">
              Car Inspection
            </button>
          </div>
          <h1 className="text-2xl font-medium items-center pb-10">
            Vehicle Description
          </h1>
          <div className="flex flex-col text-xs font-black w-full h-auto lg:pl-10 lg:flex-row">
            <ul className="flex flex-col items-center lg:flex-row">
              <li className="pr-2 mr-2">
                Numbers of Doors <span className="font-normal">{car.doors},</span>
              </li>
              <li className="pr-2 mr-2">
                Engine <span className="font-normal">{car.engine},</span>
              </li>
              <li className="pr-2 mr-2">
                Condition <span className="font-normal">{car.condition},</span>
              </li>
              <li className="pr-2 mr-2">
                Driven <span className="font-normal">{car.driven},</span>
              </li>
              <li className="pr-2 mr-2">
                Suspension Type <span className="font-normal">{car.suspension},</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col text-xs font-black w-full h-auto lg:pl-10 lg:flex-row">
            <ul className="flex flex-col items-center lg:flex-row">
              <li className="mr-2">
                Avg <span className="font-normal pl-2">{car.milage},</span>
              </li>
              <li className="mr-2">
                Transmission <span className="font-normal pl-2">{car.transmission},</span>
              </li>
              <li className="mr-2">
                Fuel Type <span className="font-normal pl-2">{car.fuel},</span>
              </li>
            </ul>
          </div>
          <h1 className="text-green-600 text-2xl font-semibold pt-10">
            PKR {car.price}
          </h1>
          <Link href="/form">
            <button className="px-5 py-2 rounded-md bg-red-800 text-white text-gl mt-10">
              Make Payment
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export const generateStaticParams = async () => {
  const cars = await getCars();
  return cars.map((car) => ({
    details: car.slug,
  }));
};
