import FeaturedCards from "./components/featuredCard";

export default function Home() {
  interface Car {
    carImage: string;
    carName: string;
    carPrice: string;
    carReviews: number;
  }

  const carDetails: Car[] = [
    { carImage: "/Corolla-X.jpg", carName: "Corolla", carPrice: "59.7-75.5", carReviews: 621 },
    { carImage: "/Suzuki_Alto_-_PNG.png", carName: "Suzuki Alto", carPrice: "23.7-30.5", carReviews: 199 },
    { carImage: "/Honda_City_Front.jpg", carName: "Honda City", carPrice: "32.7-55.5", carReviews: 491 },
    { carImage: "/Honda civic.jpg", carName: "Honda Civic", carPrice: "34.7-80.5", carReviews: 321 },
  ];

  return (
    <div>
      <div className="bg-gray-100">
        <h1 className="text-center text-3xl font-bold text-blue-900 py-10">
          Featured Cars
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {carDetails.map((car) => (
            <FeaturedCards
              carImage={car.carImage}
              carName={car.carName}
              carPrice={car.carPrice}
              carReviews={car.carReviews}
            />
          ))}
        </div>
      </div>      
    </div>
  );
}
