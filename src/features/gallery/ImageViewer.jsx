import { IoClose } from 'react-icons/io5'


export default function ImageViewer({currentImg, setOpenViewer}) {
  return (
    <div>
      <IoClose className="text-black text-5xl cursor-pointer absolute right-0" onClick={()=>setOpenViewer(false)}/>
      <img src={`https:${currentImg.fields.image.fields.file.url}`} alt="image" className='h-[500px] min-w-[500px] shadow-2xl rounded-[10px] max-sm:w-[80%] max-sm:h-[400px] object-cover'/>
    </div>
  )
}
