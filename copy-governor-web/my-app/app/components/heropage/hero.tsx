import Image from "next/image";
import cover from "../../public/cover.png";
import image1 from "../../public/imageWebsite1.jpg";
import image2 from "../../public/imageWebsite2.jpg";
import image3 from "../../public/imageWebsite3.jpg";
import slid1 from "../../public/slideShow1.jpg";
import slid3 from "../../public/slideShow3.jpg";
const Hero = () => {
  return (
    <div>
      <main>
            <header>
        <div className="flex bg-red-100">
          <div className="mt-40 ml-20 text-3xl pb-20 w-full">
            <h1 className="text-5xl font-black text-blue-900">
              Governor Sindh
            </h1>
            <h2 className="text-blue-800 text-4xl">Kamran Khan Tessori</h2>
            <p className="font-mono font-black text-4xl text-blue-300">
              Certified Cloud
            </p>
            <p className="font-mono font-black text-4xl text-blue-300">
              Applied Generative AI
            </p>
            <p className="font-mono font-black text-4xl text-blue-300">
              Engineer (GenEng)
            </p>
            <br />
            <p className="font-sans font-black text-2xl text-blue-900">
              Earn up to $5,000 / month
            </p>
            <br />

            <p className="font-sans font-black text-2xl text-blue-900">
              Now admissions are
            </p>
            <p className="font-sans font-black text-2xl text-blue-900">
              open in Hyderabad
            </p>
            <br />
            <div className="flex">
              <button className="bg-blue-400 text-white p-4 rounded-lg font-serif text-2xl w-56">
                APPLY NOW
              </button>
              <div className="text-center ml-5">
                <p className="text-2xl font-bold text-blue-700">562143</p>
                <p className="text-sm text-blue-600">Accepted</p>
                <p className="text-sm text-blue-600">Applications</p>
              </div>
            </div>
          </div>
          <div 
          className="w-full mt-28 ml-72 p-0 items-end"><Image src={cover} alt="cover Picture" className="w-full h-full" />
          </div>
        </div>
        </header>

      <main>
        <div className="text-center text-3xl mt-11 text-blue-900 font-bold mb-10 mt-10">
          <p>Certified Cloud Applied Generative AI Engineer</p>
          <p>(GenEng) and Solopreneur Developing Billion-Dollar</p>
          <p>Valued Developers and Solopreneurs</p>
        </div>
        <div className="text-xl text-justify p-5 font-serif">
          <p>
            The pace of technological change is accelerating, big players like
            Microsoft, Amazon, Google, and OpenAI are winning by providing
            infrastructure, large AI foundation models, frameworks, 3D Metaverse
            experiences, and massive distribution networks. Solopreneurs trained
            in this program will win by automating work typically outsourced to
            employees, by directly connecting to customers by eliminating the
            middleman, and by developing vertical metaverses, thus paving the
            way for the first billion-dollar valued solopreneur businesses. This
            program has the objective to train this new breed of billion-dollar
            solopreneurs. These solopreneurs will adopt the ultra-lean business
            model and work independently and will not need to hire employees or
            other team members.
          </p>
        </div>
</main>

        <div className="flex justify-center p-9">
          <div className=" h-72 w-1/3 rounded-2xl mr-3"><Image src={image1} alt="Image" className="bg-cover h-72 rounded-xl"/></div>
          <div className=" h-72 w-1/3 rounded-2xl mr-3"><Image src={image2} alt="Image" className="bg-cover h-72 rounded-xl"/></div>
          <div className=" h-72 w-1/3 rounded-2xl mr-3"><Image src={image3} alt="Image" className="bg-cover h-72 rounded-xl"/></div>
        </div>

        <div className="flex justify-center p-9">
          <div className="w-1/2 rounded-2xl mr-3"><Image src={slid1} alt="Image" className="bg-cover h-96 rounded-xl"/></div>
          <div className="w-1/2 rounded-2xl mr-3"><Image src={slid3} alt="Image" className="bg-cover h-96 rounded-xl"/></div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
