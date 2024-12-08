import Image from "next/image";
import img from "@/Images/image_7-removebg-preview.png"
import img1 from "@/Images/image 8.png"

const Home: React.FC = () => {
  return (
    <div className=" container m-auto grid grid-cols-1 sm:grid-cols-2 sm:space-x-12 mt-6">
      <div className="w-[640] h-[380] bg-[#54A6FF] text-white p-12 rounded-md mb-6 sm:mb-0">
        <h1 className="text-4xl md:4xl text-white mb-4">The Best Platform <br />for Car Rental</h1>
        <p className="mb-4">Ease of doing a car rental safely and <br /> reliably. Of course at a low price.</p>
        <button className="py-2 px-4 rounded-md bg-[#103293]   text-white hover:bg-blue-700">Book Now</button>
        <Image className="sm:ml-24 mr-96 sm:mr-0" src={img} alt="image" width={400} height={400} />
        
      </div>
      
      <div>
      <div className="w-[640] h-[380] bg-blue-700 text-white p-12 rounded-md">
        <h1 className="text-4xl md:4xl text-white mb-4">Easy way to rent a car at a low price <br />for Car Rental</h1>
        <p className="mb-4">Providing cheap car rental services and <br />safe and comfortable facilities.</p>
        <button className="py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-700">Book Now</button>
        <Image className="sm:ml-24" src={img1} alt="image" width={400} height={400} />
      </div>
     
      </div>
    </div>
  );
};

export default Home;