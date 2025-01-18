// import Image from "next/image";

// interface CarCardProps {
//   image: string;
//   name: string;
//   type: string;
//   price: string;
//   oldPrice?: string;
//   features: { icon: string; label: string }[];
// }

// const CarCard: React.FC<CarCardProps> = ({ image, name, type, price, oldPrice, features }) => {
//   return (
//     <div className="border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition">
//       <div className="relative w-full h-36 mb-4">
//         <Image
//           src={image}
//           alt={name}
//           layout="fill"
//           objectFit="contain"
//           className="rounded-md"
//         />
//       </div>
//       <h3 className="text-lg font-semibold">{name}</h3>
//       <p className="text-sm text-gray-500">{type}</p>
//       <div className="flex items-center mt-2">
//         <p className="text-lg font-bold text-blue-500">{price} <span className="text-sm">/ day</span></p>
//         {oldPrice && (
//           <p className="text-sm text-gray-400 line-through ml-2">{oldPrice}</p>
//         )}
//       </div>
//       <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
//         {features.map((feature, index) => (
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
