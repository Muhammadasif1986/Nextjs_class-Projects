
const CarsDetails = async ({params,}:
      {params:{details:string}}
)=>{
      console.log(params)
      return(
            <div className="text-center text-4xl">
                  <h1>Car Detail</h1>
                  <h2 className="font-semibold">{params.details}</h2>
            </div>
      )
}
export default CarsDetails
