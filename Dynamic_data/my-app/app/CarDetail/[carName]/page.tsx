import { notFound } from "next/navigation"; // For 404 handling
import Image from "next/image";

// Dummy Data for Cars (Replace this with API/Database fetch)
const carDetails = [
  { carImage: "/Corolla-X.jpg", carName: "Corolla", carPrice: "59.7-75.5", carReviews: 621, slug: "corolla" },
  { carImage: "/Suzuki_Alto_-_PNG.png", carName: "Suzuki Alto", carPrice: "23.7-30.5", carReviews: 199, slug: "suzuki-alto" },
  { carImage: "/Honda_City_Front.jpg", carName: "Honda City", carPrice: "32.7-55.5", carReviews: 491, slug: "honda-city" },
  { carImage: "/Honda civic.jpg", carName: "Honda Civic", carPrice: "34.7-80.5", carReviews: 321, slug: "honda-civic" },
];

export default function  CarDetail({ params }: { params: { carName: string } }) {
  const car = carDetails.find((c) => c.slug === params.carName);

  // If car not found, show 404
  if (!car) return notFound();

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
      <div className="w-10/12 md:w-8/12 lg:w-6/12 bg-white shadow-md rounded-md">
        <Image
          src={car.carImage}
          alt={car.carName}
          width={600}
          height={400}
          className="rounded-t-md"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">{car.carName}</h1>
          <p className="text-green-500 text-lg mb-4">PKR {car.carPrice}</p>
          <p className="text-gray-600 mb-6">{car.carReviews}</p>
          <div className="flex items-center">
            <span className="flex text-orange-500 text-xl">
              ★★★★☆
            </span>
            <p className="text-blue-700 text-sm ml-2">
              {car.carReviews} Reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
