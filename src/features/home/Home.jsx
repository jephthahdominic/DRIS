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
        <div className="flex flex-col items-center gap-3" data-aos="zoom-in" data-aos-offset="200"
            data-aos-duration="1000" data-aos-once="false">
          <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">About Us</h2>
          <p className="text-[#1f1f1fd5] max-md:w-[100%] leading-relaxed md:text-xl text-justify">
            At D.R.I.S., we are committed to nurturing excellence in a caring and disciplined environment. Since our founding in 2007, we’ve grown from 
            just a few students into a thriving school offering Nursery, Primary, and Secondary education. With a focus on strong values, academic achievement, 
            and individual growth, we prepare our students to succeed both within Nigeria and beyond.
          </p>
          <Link to="/about_us" className="w-max p-3 px-6 mt-10 text-[#fff] bg-blue-500 shadow-2xl hover:bg-[#1D4ED8] transition-all cursor-pointer
          rounded-[10px]">Learn More</Link>
        </div>
      </section>
      <section className="px-8 max-sm:px-4 py-14 text-center flex flex-col items-center gap-3 bg-[#f5f5f5]">
        <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading" data-aos="zoom-in" data-aos-offset="200"
        data-aos-duration="1000" data-aos-once="false">Our Values</h2>
        <div className=" flex flex-col gap-8 max-md:gap-18 py-10 max-md:py-8 max-md:flex-wrap" data-aos="zoom-in" data-aos-offset="200"
        data-aos-duration="1000" data-aos-once="false">
          {values.map((value, key) => (
            <ValueCard value={value} key={key}/>
          ))}
          <div className="max-md:w-[80%] p-6 shadow-md rounded-[10px] text-center cursor-pointer border border-[#f9f9f9]" data-aos="fade-up" data-aos-offset="200"
            data-aos-duration="1000" data-aos-once="false">
            <h3 className="text-xl font-semibold">Our Core Values</h3>
            <ul className=" list-disc flex flex-col gap-3 text-justify mt-6 px-10">
              <li>
                Faith in God:
                We build our foundation on God’s Word. Every learner is encouraged to trust, love, and walk daily with Christ.
              </li>
              <li>
                Excellence:
                We strive to do all things well—academically, spiritually, and socially—as unto the Lord.
              </li>
              <li>
                Integrity:
                We commit to honesty, transparency, and doing what is right, even when no one is watching.
              </li>
              <li>
                Leadership:
                We raise confident, wise, and compassionate leaders who serve others and impact the world positively.

              </li>
              <li>
                Discipline:
                We uphold good behavior, personal responsibility, and orderliness in a godly learning environment.
              </li>
              <li>
                Respect for All:
                We treat everyone with dignity, kindness, and empathy—recognizing that each person is created in God’s image.
              </li>
              <li>
                Servant-Heartedness:
                We encourage students to lead by serving others humbly and joyfully, following Christ’s example.
              </li>
            </ul>
          </div>
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
