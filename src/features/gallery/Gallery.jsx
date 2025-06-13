import { gallery } from "../../assets/Gallery";
import ImageCard from "./ImageCard";

export default function Gallery() {
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
      <section className="px-8 max-sm:px-4 py-14 columns-2 sm:columns-2 md:columns-3 lg:columns-4 p-4 space-y-4 text-center gap-4 bg-white">
        {gallery.map((img, key)=>(
          <ImageCard key={key} img={img}/>
        ))}
      </section>

    </div>
  )
}
