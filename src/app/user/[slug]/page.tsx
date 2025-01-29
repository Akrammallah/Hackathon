import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { groq } from "next-sanity";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getCar(slug: string): Promise<CarCardProps> {
  return client.fetch(groq`*[_type == "car" && slug.current == "${slug}"]{
    _id,
    name,
    title,
    type,
    pricePerDay,
    fuelCapacity,
    transmission,
    seatingCapacity,
    
    description,
    tags,
    "imageUrl": image.asset->url
    }[0]`);

}

export default async function Page({ params }: PageProps) {
  
const car = await getCar(params.slug);

return (
  <div key={car.id} className=" grid grid-cols-1 md:grid-cols-2 justify-between items-center mx-12 text-black p-24 shadow-emerald-400 shadow-lg">
    <div>
    <h1 className="font-bold mb-4 text-2xl">{car.name}</h1>
    <Image src={car.imageUrl} alt={car.name} width={400} height={400} />
    </div>
    <div className="ml-12 font-bold leading-8  ">
    <p>{car.description}</p>
    
    
    
    <p className="flex justify-between items-center">{car.transmission} <span>{car.seatingCapacity}</span></p>
  
    <br />
    
    <p className="flex justify-between items-center">{car.type} <span>{car.tags}</span>
    {car.title}</p>
    <br />
    <p className="flex justify-between items-center">{car.pricePerDay} <span> <p>{car.fuelCapacity}</p></span></p>
    <Button className="w-full mt-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">Rent Now</Button>

    </div>
    
  </div>
);
}
