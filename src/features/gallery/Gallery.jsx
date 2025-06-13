import { useState } from "react";
import { gallery } from "../../assets/Gallery";
import ImageCard from "./ImageCard";
import ImageViewer from "./ImageViewer";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { IoClose, IoCloseCircle } from "react-icons/io5";

export default function Gallery() {
  const [openImgViewer, setOpenViewer] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  function handleClickImage(item){
    setOpenViewer(true);
    setCurrentImg(item)
  }
  return (
    <div className="max-lg:h-3/4 w-full bg-[url('/science_lab.jpeg')] bg-cover bg-no-repeat bg-center bg-fixed">
      <div className="min-h-11/12 px-8 max-sm:px-4 py-14 pt-40 bg-[rgba(31,31,31,0.8)] flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl max-sm:text-4xl text-[#FFF] font-semibold max-md:leading-normal" data-aos="fade-up" data-aos-offset="200"
        data-aos-duration="1000" data-aos-once="false">Our Gallery</h1>
        <p className="text-xl text-[#c8c8c8] w-[70%] max-md:w-[100%] leading-relaxed mt-2" data-aos="zoom-in" data-aos-offset="200"
        data-aos-duration="1000" data-aos-once="false">
          Explore Education in DRIS
        </p>
      </div>
      <section className="px-8 max-sm:px-4 py-14 columns-2 sm:columns-2 md:columns-3 lg:columns-4 p-4 space-y-4 text-center gap-4 bg-[#f5f5f5]">
        {gallery.map((item, key)=>(
          <ImageCard key={key} item={item} clickAction={()=>handleClickImage(item)}/>
        ))}
      </section>
      {openImgViewer && <div className="fixed h-screen w-full p-10 z-30 top-0 bg-[rgba(0,0,0,0.80)] flex flex-col gap-3 jsutify-center items-center animate-fadeIn">
          <IoClose className="text-white text-5xl cursor-pointer absolute right-10 top-14" onClick={()=>setOpenViewer(false)}/>
          <div className="h-full flex flex-col items-center justify-center">
            <ImageViewer currentImg={currentImg}/>
            <div className="flex items-center gap-2 mt-4">
              {gallery.map((item, key)=>(
                <div className={`w-[50px] max-h-[50px] overflow-hidden ${item.URI === currentImg.URI && 'border-2 border-white'}`} key={key} onClick={()=>setCurrentImg(item)}>
                  <img src={item.URI} alt="image" className="w-full max-h-[40px] object-cover"/>
                </div>
              ))}
            </div>
          </div>
      </div>}
    </div>
  )
}
