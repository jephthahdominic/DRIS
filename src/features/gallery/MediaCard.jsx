import { IoPlay } from "react-icons/io5";

export default function MediaCard({item, clickAction}) {
  console.log(item)
  return (
    <div className="cursor-pointerbg-[#f5f5f5] shadow-md rounded-md border border-gray-200" onClick={()=>clickAction()}>
      <div className="relative h-[300px]">
        <img src={`https:${item.fields.image.fields.file.url}`} alt="image" className="object-cover w-full h-full rounded-t-md" width={300} loading="lazy" data-aos="zoom-in" data-aos-offset="100"
          data-aos-duration="1000" data-aos-once="true"/>
        {item.fields.isVideo && <IoPlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-red-500 text-5xl" />}
      </div>
      <p className="text-base text-gray-500 text-left p-2">{item.fields.description}</p>
    </div>  
  )
}
