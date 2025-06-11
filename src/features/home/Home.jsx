import Button from "../../ui/Button"
import Hero from "./Hero"
import { programs, values } from "../../constants/index"
import ValueCard from "../about/ValueCard"
import ProgramCard from "./ProgramCard"
import BusinessProgress from "./BusinessProgress"
import { SiRotaryinternational } from "react-icons/si"
import waec_logo from "../../assets/waec-logo.jpg"
import Testimonials from "./Testimonials"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <section className="p-8 py-14">
        <div className="text-center flex flex-col items-center gap-3">
          <h2 className="text-4xl font-semibold section-heading">About Us</h2>
          <p className="text-[#1f1f1fd5] w-[70%] max-md:w-[100%] leading-relaxed text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nesciunt, enim velit 
            earum tempore reiciendis. Nesciunt aliquid dolores debitis optio et, officia 
            doloremque quae illum voluptates cum sapiente dolor recusandae!</p>
          <Button>Learn More</Button>
        </div>
      </section>
      <section className="p-8 py-14 text-center flex flex-col items-center gap-3 bg-[#f5f5f5]">
        <h2 className="text-4xl font-semibold section-heading">Our Values</h2>
        <div className="flex items-start justify-center gap-28 max-md:gap-18 py-10 max-md:py-8 max-md:flex-wrap">
          {values.map((value, key) => (
            <ValueCard value={value} key={key}/>
          ))}
        </div>
      </section>
      <section className="p-8 py-14 text-center flex flex-col items-center gap-4">
        <h2 className="text-4xl font-semibold section-heading">Our Educational Programs</h2>
        <div className="flex item-start justify-center gap-18 mt-8 max-md:flex-wrap">
          {programs.map((program, key)=>(
            <ProgramCard program={program} key={key}/>
          ))}
        </div>
      </section>
      <section className="p-8 py-14 text-center flex flex-col items-center gap-4 bg-[#f5f5f5] ">
        <h2 className="text-4xl font-semibold section-heading">Awards for Excellence</h2>
        <div className="mt-10 flex gap-10">
          <div className="flex flex-col items-center justify-center gap-3  p-3 rounded-[10px]">
            <SiRotaryinternational className="text-[6rem] text-[#1f1f1f65]"/>
            <div className="text-xl text-[#1f1f1f65]">
              <p>Rotary spelling B competition</p>
              <p>1st Position, Rivers state</p>
              <span>(2018, 2019).</span>
            </div>
          </div>
          <div className="flex flex-col items-center p-3  rounded-[10px]">
            <img src={waec_logo} alt="waec" width={150}/>
            <div className="text-xl text-[#1f1f1f65]">
              <p>West African Examination Council</p>
              <p>WAEC Approved.</p>
              <span>(2022)</span>
            </div>
          </div>
        </div>
      </section>
      <section className="p-8 py-14 text-center flex flex-col items-center gap-4">
        <h2 className="text-4xl font-semibold section-heading">Testimonials</h2>
        <div className="w-full">
          <Testimonials />
        </div>
      </section>
      <section className="p-8 py-14 text-center flex flex-col items-center gap-4 bg-[#f5f5f5] ">
        <h2 className="text-4xl font-semibold section-heading">Ready to Join Us?</h2>
        <p className="text-[#1f1f1fd5] text-xl">Give your child the gift of a world-class education. Enroll today and secure their future!</p>
        <div className="flex items-center gap-8">
          <Button>Learn How to Enroll</Button>
        </div>
      </section>
      <section className="p-8 py-14 text-center flex flex-col items-center gap-4">
        <h2 className="text-4xl font-semibold section-heading">Contact Us?</h2>
        <p className="text-[#1f1f1fd5] text-xl">We’d love to hear from you! Contact us for any inquiries or support.</p>
        <div className="flex items-center gap-8">
          <Link to="/contact" className="p-3 px-6 mt-2 text-[#1D4ED8] bg-white border border-blue-500 shadow-2xl hover:bg-[#1D4ED8] hover:text-[#fff] transition-all cursor-pointer
          rounded-[10px]">Contact us</Link>
        </div>
      </section>
    </div>
  )
}
