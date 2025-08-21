import { Suspense, useEffect, useState } from "react";
import MediaCard from "./MediaCard";
import MediaViewer from "./MediaViewer";
import { contentfulService } from "../../../lib/contentfulService";



export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState([])
  const [openImgViewer, setOpenViewer] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);

  useEffect(()=>{
    async function getMedia(){
      const media = await contentfulService.getMedia()
      setGalleryItems(media)
      console.log(media)
    }
    getMedia()
  },[])

  function handleClickImage(item){
    setOpenViewer(true);
    setCurrentMedia(item)
  }
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="max-lg:h-3/4 w-full bg-[url('/science_lab.jpeg')] bg-cover bg-no-repeat bg-center bg-fixed">
        <div className="min-h-11/12 px-8 max-sm:px-4 py-14 pt-40 bg-[rgba(31,31,31,0.8)] flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl max-sm:text-4xl text-[#FFF] font-semibold max-md:leading-normal" data-aos="fade-up" data-aos-offset="200"
          data-aos-duration="1000" data-aos-once="false">Our Gallery</h1>
          <p className="text-xl text-[#c8c8c8] w-[70%] max-md:w-[100%] leading-relaxed mt-2" data-aos="zoom-in" data-aos-offset="200"
          data-aos-duration="1000" data-aos-once="false">
            Explore Education in DRIS
          </p>
        </div>
        
        <section className="px-8 max-sm:px-4 py-14 bg-[#f5f5f5]">
          {galleryItems.length === 0 ? <p>No media items to view at the moment</p> : <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center gap-4">{galleryItems.map((item, key)=>(
            <MediaCard key={key} item={item} clickAction={()=>handleClickImage(item)}/>
          ))}</div>}
        </section>
        {openImgViewer && <div className="fixed h-screen w-full z-30 top-0 bg-[rgba(0,0,0,0.80)] flex flex-col jsutify-center items-center animate-fadeIn">
            <div className="h-full w-full flex flex-col md:flex-row items-center justify-center">
              <div onClick={()=>setOpenViewer(false)} className="h-full w-full"></div>
              <MediaViewer currentMedia={currentMedia} setOpenViewer={setOpenViewer}/>
              <div onClick={()=>setOpenViewer(false)} className="h-full w-full"></div>
            </div>
        </div>}
      </div>
    </Suspense>
  )
}
