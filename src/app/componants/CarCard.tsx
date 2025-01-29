// import Image from "next/image";





// const CarCard: React.FC<CarCardProps> = ({car}:CarCardProps) => {
//   return (
//     <div className="border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition">
//       <div className="relative w-full h-36 mb-4">
//         <Image
//           src={car.imageUrl}
//           alt={car.name}
//           layout="fill"
//           objectFit="contain"
//           className="rounded-md"
//         />
//       </div>
//       <h3 className="text-lg font-semibold">{car.name}</h3>
//       <p className="text-sm text-gray-500">{car.tags}</p>
//       <div className="flex items-center mt-2">
//         <p className="text-lg font-bold text-blue-500">{car.pricePerDay} <span className="text-sm">/ day</span></p>
//         {car.isFeatured && (
//           <span className="ml-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
//             FEATURED
//           </span>
//         )}
//       </div>
//       <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
//         {car.features.map((feature: any, index:number) => (
//           <div key={index} className="flex items-center space-x-1">
//             <span className={feature.icon}></span>
//             <span>{feature.label}</span>
//           </div>
//         ))}
//       </div>
//       <button className="w-full mt-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
//         Rent Now
//       </button>
//     </div>
//   );
// };

// export default CarCard;
