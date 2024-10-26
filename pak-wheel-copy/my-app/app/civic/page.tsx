import Image from "next/image";
import Link from "next/link";
import civic from "../../public/Honda civic.jpg";

export default function Civic() {
  return (
    <main>
    <section className="flex justify-center items-center bg-slate-300">
      <div className="flex flex-col justify-center items-center w-8/12 p-20">
        <h1 className="text-3xl font-semibold underline underline-offset-2 pb-10">
          Honda Civic 2024 Price in Pakistan, Images, Reviews & Specs
        </h1>
        <div className="w-auto px-6">
          <Image src={civic} alt="corolla" />
        </div>

        <div className="flex justify-between text-xs p-10">
          <button className="px-4 py-3 bg-blue-800 text-white border-2 border-blue-800 rounded-md mr-4">
            Book a Test drive
          </button>
          <button className="px-4 py-3 bg-white text-blue-800 border-2 border-blue-800 rounded-md mr-4">
            Request Bank Finance
          </button>
          <button className="px-4 py-3 bg-white text-blue-800 border-2 border-blue-800 rounded-md mr-4">
            Visit Place
          </button>
          <button className="px-4 py-3 bg-white text-blue-800 border-2 border-blue-800 rounded-md mr-4">
            Car Inspection
          </button>
        </div>
        <h1 className="text-2xl font-medium items-center pb-10">
          Vehicle Description
        </h1>

        <div className="flex pl-10 text-xs font-black w-full h-auto">
          <ul className="flex items-center">
            <li className="pr-2 mr-2">
              Numbers of Doors <span className="font-normal">4,</span>
            </li>
            <li className="pr-2 mr-2">
              Engine<span className="font-normal">1800cc,</span>
            </li>
            <li className="pr-2 mr-2">
              Condition <span className="font-normal">9 / 10,</span>
            </li>
            <li className="pr-2 mr-2">
              Driven <span className="font-normal">9500 KM,</span>
            </li>
            <li className="pr-2 mr-2">
              Suspension Type{" "}
              <span className="font-normal">Soft Suspension,</span>
            </li>
          </ul>
        </div>
        <div className="flex pt-6 pl-10 text-xs font-black w-full h-auto">
          <ul className="flex items-center">
            <li className="mr-2">
              Avg <span className="font-normal pl-2">13 KM Per ltr,</span>
            </li>
            <li className="mr-2">
              Transmission<span className="font-normal pl-2">Automatic,</span>
            </li>
            <li className="mr-2">
              Fuel Type<span className="font-normal pl-2">High Octane,</span>
            </li>
          </ul>
        </div>

        <h1 className="text-green-600 text-2xl font-semibold pt-10">
          PKR 65,00,000
        </h1>
        <Link href="/form">
          <button className="px-5 py-2 rounded-md bg-red-800 text-white text-gl mt-10">
            Make Payment
          </button>
        </Link>
      </div>
    </section>
  </main>
  )
}

