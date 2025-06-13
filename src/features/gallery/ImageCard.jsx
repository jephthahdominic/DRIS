export default function ImageCard({item, clickAction}) {
  return (
    <img src={item.URI} alt="image" className="brightness-100 rounded-md" width={300} loading="lazy" data-aos="slide-up" data-aos-offset="200"
        data-aos-duration="1000" data-aos-once="false" onClick={()=>clickAction()}/>
  )
}
