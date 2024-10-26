import Link from "next/link"
export default function Form() {
  return (
    <div className="flex flex-col justify-center items-center h-auto bg-slate-300 p-10">
      <h1 className="text-4xl font-bold underline text-center mb-32">
        Enter your Details
      </h1>
      <form className="flex flex-col justify-center items-center gap-5 w-8/12">
        <input
          type="name;"
          className="w-2/5 border-2 border-red-300 rounded py-2 pl-2"
          placeholder="Enter Your Name"
        />
        <input
          type="email;"
          className="w-2/5 border-2 border-red-300 rounded py-2 pl-2"
          placeholder="Enter Your Email"
        />
        <input
          type="number;"
          className="w-2/5 border-2 border-red-300 rounded py-2 pl-2"
          placeholder="Card Number"
        />
        <input
          type="address;"
          className="w-2/5 border-2 border-red-300 rounded py-2 pl-2"
          placeholder="Address"
        />
       
       <Link href="/thankyou"> <button className="p-3 bg-blue-700 rounded-xl text-white mt-10">
          Place your Order
        </button>
        </Link>
      </form>
    </div>
  );
}
