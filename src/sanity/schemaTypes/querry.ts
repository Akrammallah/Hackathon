import {groq} from 'next-sanity'

export const querry = groq`
*[_type=="car"]{
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
  "imageUrl": image.asset->url,
  "slug":slug.current
}
`
export const querry2 = groq`
*[_type=="car"]{
  id,
  name,
  title,
  type,
  pricePerDay,
  description,
  tags,
  "imageUrl": image.asset->url,
}[0..7]
`


