// import React, { useState } from "react";
// import SectionHeading from "@/app/componants/SectionHeading";
// import CarCard from "@/app/componants/CarCard";

// const Home: React.FC = () => {
  
//   const [, setSearchTerm] = useState(""); 
//   const popularCars = [
//     {
//       image: "/images/car.png",
//       name: "Koenigsegg",
//       type: "Sport",
//       price: "$99.00",
//       oldPrice: "",
//       features: [
//         { icon: "fas fa-gas-pump", label: "90L" },
//         { icon: "fas fa-cogs", label: "Manual" },
//         { icon: "fas fa-users", label: "2 People" },
//       ],
//     },
//     {
//       image: "/car2.png",
//       name: "Nissan GT - R",
//       type: "Sport",
//       price: "$80.00",
//       oldPrice: "$100.00",
//       features: [
//         { icon: "fas fa-gas-pump", label: "80L" },
//         { icon: "fas fa-cogs", label: "Manual" },
//         { icon: "fas fa-users", label: "2 People" },
//       ],
//     },
//     // Add more cars
//   ];

//   const recommendedCars = [
//     {
//       image: "/car3.png",
//       name: "All New Rush",
//       type: "SUV",
//       price: "$72.00",
//       oldPrice: "$80.00",
//       features: [
//         { icon: "fas fa-gas-pump", label: "70L" },
//         { icon: "fas fa-cogs", label: "Manual" },
//         { icon: "fas fa-users", label: "6 People" },
//       ],
//     },
//     // Add more cars
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-7xl mx-auto space-y-12">
//         {/* Popular Cars */}
//         <div>
          
//           <SectionHeading title="Popular Car" linkText="View All" />
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {popularCars.map((car, index) => (
//               <CarCard key={index} {...car} />
//             ))}
//           </div>
//         </div>

//         {/* Recommended Cars */}
//         <div>
//           <SectionHeading title="Recommendation Car" />
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {recommendedCars.map((car, index) => (
//               <CarCard key={index} {...car} />
//             ))}
//           </div>
//         </div>

//         {/* Show More Button */}
//         <div className="text-center">
//           <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
//             Show more car
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
