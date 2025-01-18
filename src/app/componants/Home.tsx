import Image from "next/image";
import img from "@/Images/image_7-removebg-preview.png"
import img1 from "@/Images/image 8.png"
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className=" container m-auto grid grid-cols-1 md:grid-cols-2 sm:space-x-10 mt-6 mr-[2vw] ">
      <div className="w-[640] h-[360] bg-[#54A6FF]  text-white p-12 rounded-md mb-6 sm:mb-0">
        <h1 className="text-4xl md:4xl text-white mb-4">The Best Platform <br />for Car Rental</h1>
        <p className="mb-4 sm:mb-6">Ease of doing a car rental safely and <br /> reliably. Of course at a low price.</p>
       <Link href={'/visit'}> <button className="py-2 px-4 rounded-md bg-[#103293]   text-white hover:bg-blue-700">Book Now</button>
       </Link><Image className="sm:ml-24 mr-96 sm:mr-0" src={img} alt="image" width={400} height={400} />
        
      </div>
      
      <div>
      <div className="w-[640] h-[360] bg-[#103293] hidden sm:block text-white p-12 rounded-md">
        <h1 className="text-4xl md:3xl text-white mb-4">Easy way to rent a car at a low price for Car Rental</h1>
        <p className="mb-4">Providing cheap car rental services and <br />safe and comfortable facilities.</p>
        <Link href={'/bill'}><button className="py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-green-700">Book Now</button>
        </Link><Image className="sm:ml-24" src={img1} alt="image" width={400} height={400} />
      </div>
     
      </div>
    </div>
  );
};

export default Home;