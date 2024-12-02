import Image from "next/image";
import FeaturedCard from "./components/FeaturedCard";

export default function Home() {
  interface Cars{
    carImage:string
    carName:string,
    carPrice:string,
    carReviews:number
  }
  
  let carDetails:Cars[] =[
    {carImage:"/Corolla-X.jpg", carName:"Corolla",carPrice:"59.7-75.5",carReviews:621  },
    {carImage:"/Suzuki_Alto_-_PNG.png", carName:"Suzuki Alto",carPrice:"23.7-30.5",carReviews:199},
    {carImage:"/Honda_City_Front.jpg", carName:"Honda City",carPrice:"32.7-55.5",carReviews:491  },
    {carImage:"/Honda civic.jpg", carName:"Honda Civic",carPrice:"34.7-80.5",carReviews:321  },
  ]
  return (
   <div className="flex flex-col justify-between items-center lg:flex-row">
 {
  carDetails.map((Details)=>{
    return(
      <div>
<FeaturedCard
carImage={Details.carImage}
carName={Details.carName}
carPrice={Details.carPrice}
carReviews={Details.carReviews}
/>
      </div>
    )
  })
}

   </div>
  );
}
