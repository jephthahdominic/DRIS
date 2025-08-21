import { Suspense, useEffect, useState } from "react";
import MediaCard from "./MediaCard";
import MediaViewer from "./MediaViewer";
import { contentfulService } from "../../../lib/contentfulService";



export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState([])
  const [openImgViewer, setOpenViewer] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [noMore, setNoMore] = useState(false);

  async function loadPage(targetPage) {
    try {
      setLoading(true);
      const media = await contentfulService.getMedia(targetPage);
      setGalleryItems(media);
      setPage(targetPage);
      // If fewer than 10 items returned, we've likely reached the end
      setNoMore(media.length < 10);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPage(1);
  }, [])

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
          {loading && (
            <p className="text-center mb-4">Loading...</p>
          )}
          {!loading && galleryItems.length === 0 ? (
            <p className="text-center">No media items to view at the moment</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center gap-4">
              {galleryItems.map((item, key) => (
                <MediaCard key={key} item={item} clickAction={() => handleClickImage(item)} />
              ))}
            </div>
          )}

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              type="button"
              className={`px-4 py-2 rounded border ${page === 1 || loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
              onClick={() => loadPage(page - 1)}
              disabled={page === 1 || loading}
              aria-label="Previous page"
            >
              Previous
            </button>
            <span className="text-sm text-gray-700">Page {page}</span>
            <button
              type="button"
              className={`px-4 py-2 rounded border ${noMore || loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
              onClick={() => loadPage(page + 1)}
              disabled={noMore || loading}
              aria-label="Next page"
            >
              Next
            </button>
          </div>
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
