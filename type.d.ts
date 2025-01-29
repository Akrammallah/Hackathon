interface CarCardProps {
  id:number;
  imageUrl:string
  name: string;
  type: string;
  price: string;
  oldPrice?: string;
   featres: { icon: string; label: string }[];
   slug: string;
   pricePerDay:number;
   title:string;
   description:string;
   tags:string;
    fuelCapacity:string;
  transmission:string;
    seatingCapacity:string
    
}