import { IoClose } from 'react-icons/io5'


export default function MediaViewer({currentMedia, setOpenViewer}) {
  console.log(currentMedia)
  if(currentMedia.fields.isVideo){
    return (
      <div>
        <IoClose className="text-black text-5xl cursor-pointer absolute right-0" onClick={()=>setOpenViewer(false)}/>
        <video src={`https:${currentMedia.fields.video.fields.file.url}`} controls className='h-[500px] min-w-[500px] shadow-2xl rounded-[10px] max-sm:w-[80%] max-sm:h-[400px] object-cover' autoPlay/>
      </div>
    )
  }
  return (
    <div>
      <IoClose className="text-black text-5xl cursor-pointer absolute right-0" onClick={()=>setOpenViewer(false)}/>
      <img src={`https:${currentMedia.fields.image.fields.file.url}`} alt="image" className='h-[500px] min-w-[500px] shadow-2xl rounded-[10px] max-sm:w-[80%] max-sm:h-[400px] object-cover'/>
    </div>
  )
}
