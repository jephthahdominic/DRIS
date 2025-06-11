import { values } from "../../constants"
import Button from "../../ui/Button"
import Map from "./Map"
import ValueCard from "./ValueCard"

export default function About() {
  return (
    <div className="min-h-screen max-lg:h-3/4 w-full bg-[url('/science_lab.jpeg')] bg-cover bg-no-repeat bg-center bg-fixed">
      <div className="h-3/4 px-8 max-sm:px-4 py-14 pt-40 bg-[rgba(31,31,31,0.8)] flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl max-sm:text-4xl text-[#FFF] font-semibold max-md:leading-normal">Get To Know Us</h1>
        <p className="text-xl text-[#c8c8c8] w-[70%] max-md:w-[100%] leading-relaxed mt-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa velit, veritatis quia eum, non aliquid adipisci 
          tempora maxime reiciendis, excepturi nemo eveniet nihil fugiat atque at! Aperiam ipsam velit suscipit!
        </p>
      </div>
      <section className="px-8 max-sm:px-4 py-14 text-center flex flex-col items-center gap-4 bg-white">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">Our Values</h2>
          <p className="mt-4 text-[#1f1f1f] text-center">Over the years we have held on to our values</p>
        </div>
        <div className="flex items-start justify-center gap-28 max-md:gap-18 py-10 max-md:py-8 max-md:flex-wrap">
          {values.map((value, key)=> (
            <ValueCard value={value} key={key}/>
          ))}
        </div>
      </section>
      <section className="px-8 max-sm:px-4 py-14 text-center flex flex-col items-center gap-4 bg-[#f5f5f5]">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">Our Team</h2>
          <p className="mt-4 text-[#1f1f1f] w-[70%]">Meet our team of carefully selected professionals, who are at the heart of the tremendous progres we have made over the years.</p>
        </div>
      </section>
      <section className="px-8 max-sm:px-4 py-14 text-center flex flex-col items-center gap-4 bg-white w-full">
        <div>
          <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">Our Location</h2>
          <p className="mt-4 text-[#1f1f1f]">Visit us at our campus to explore our vibrant learning environment first hand</p>
        </div>
        <Map />
      </section>
      <section className="px-8 max-sm:px-4 py-14 text-center flex flex-col items-center gap-4 bg-[#f5f5f5] ">
        <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">Ready to Join Us?</h2>
        <p className="text-[#1f1f1fd5] text-xl max-sm:text-md">Give your child the gift of a world-class education. Enroll today and secure their future!</p>
        <div className="flex items-center gap-8">
          <Button>Learn How to Enroll</Button>
        </div>
      </section>
    </div>
  )
}
