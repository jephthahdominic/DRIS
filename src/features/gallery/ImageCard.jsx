export default function ImageCard({item, clickAction}) {
  return (
    <div className="cursor-pointer h-max bg-[#f5f5f5] shadow-md rounded-md border border-gray-200">
      <img src={`https:${item.fields.image.fields.file.url}`} alt="image" className="object-cover w-full h-full rounded-t-md" width={300} loading="lazy" data-aos="zoom-in" data-aos-offset="100"
        data-aos-duration="1000" data-aos-once="true" onClick={()=>clickAction()}/>
      <p className="text-base text-gray-500 text-left p-2">{item.fields.description}</p>
    </div>  
  )
}
