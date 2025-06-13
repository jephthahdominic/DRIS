import Hero from "./Hero"
import { programs, values } from "../../constants/index"
import ValueCard from "../about/ValueCard"
import ProgramCard from "./ProgramCard"
import Testimonials from "./Testimonials"
import { Link } from "react-router-dom"
import Awards from "./Awards"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <section className="px-8 max-sm:px-4 py-14">
        <div className="text-center flex flex-col items-center gap-3" data-aos="zoom-in" data-aos-offset="200"
            data-aos-duration="1000" data-aos-once="false">
          <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">About Us</h2>
          <p className="text-[#1f1f1fd5] w-[70%] max-md:w-[100%] leading-relaxed md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nesciunt, enim velit 
            earum tempore reiciendis. Nesciunt aliquid dolores debitis optio et, officia 
            doloremque quae illum voluptates cum sapiente dolor recusandae!</p>
          <Link to="/about_us" className="w-max p-3 px-6 mt-2 text-[#fff] bg-blue-500 shadow-2xl hover:bg-[#1D4ED8] transition-all cursor-pointer
          rounded-[10px]">Learn More</Link>
        </div>
      </section>
      <section className="px-8 max-sm:px-4 py-14 text-center flex flex-col items-center gap-3 bg-[#f5f5f5]">
        <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading" data-aos="zoom-in" data-aos-offset="200"
        data-aos-duration="1000" data-aos-once="false">Our Values</h2>
        <div className="flex items-start justify-center gap-28 max-md:gap-18 py-10 max-md:py-8 max-md:flex-wrap" data-aos="zoom-in" data-aos-offset="200"
        data-aos-duration="1000" data-aos-once="false">
          {values.map((value, key) => (
            <ValueCard value={value} key={key}/>
          ))}
        </div>
      </section>
      <section className="px-8 max-sm:px-4 py-14 text-center flex flex-col items-center gap-4" data-aos="zoom-in" data-aos-offset="200"
        data-aos-duration="1000" data-aos-once="false">
        <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">Our Educational Programs</h2>
        <div className="flex item-start justify-center gap-18 mt-8 max-md:flex-wrap">
          {programs.map((program, key)=>(
            <ProgramCard program={program} key={key}/>
          ))}
        </div>
      </section>
      <section className="px-8 max-sm:px-4 py-14 text-center flex flex-col items-center gap-4 bg-[#f5f5f5]"  data-aos="zoom-in" data-aos-offset="200"
      data-aos-duration="1000" data-aos-once="false">
        <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">Awards for Excellence</h2>
        <Awards />
      </section>
      <section className="px-8 max-sm:px-4 py-14 text-center flex flex-col items-center gap-4" data-aos="zoom-in" data-aos-offset="200"
      data-aos-duration="1000" data-aos-once="false">
        <h2 className="text-4xl font-semibold section-heading">Testimonials</h2>
        <div className="w-full">
          <Testimonials />
        </div>
      </section>
      <section className="px-8 max-sm:px-4 py-14 text-center flex flex-col items-center gap-4 bg-[#f5f5f5]" data-aos="zoom-in" data-aos-offset="200"
      data-aos-duration="1000" data-aos-once="false">
        <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">Ready to Join Us?</h2>
        <p className="text-[#1f1f1fd5] sm:text-xl">Give your child the gift of a world-class education. Enroll today and secure their future!</p>
        <div className="flex items-center gap-8">
          <Link to="/admission" className="w-max p-3 px-6 mt-2 text-[#fff] bg-blue-500 shadow-2xl hover:bg-[#1D4ED8] transition-all cursor-pointer
          rounded-[10px]">Enroll Now</Link>
        </div>
      </section>
      <section className="px-8 max-sm:px-4 py-14 text-center flex flex-col items-center gap-4" data-aos="zoom-in" data-aos-offset="200"
      data-aos-duration="1000" data-aos-once="false">
        <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">Contact Us?</h2>
        <p className="text-[#1f1f1fd5] sm:text-xl w-[70%]">We’d love to hear from you! Contact us for any inquiries or support.</p>
        <div className="flex items-center gap-8">
          <Link to="/contact" className="p-3 px-6 mt-2 text-[#1D4ED8] bg-white border border-blue-500 shadow-2xl hover:bg-[#1D4ED8] hover:text-[#fff] transition-all cursor-pointer
          rounded-[10px]">Contact us</Link>
        </div>
      </section>
    </div>
  )
}
