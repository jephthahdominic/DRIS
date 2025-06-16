import { Link } from "react-router-dom"
import { values } from "../../constants"
import Button from "../../ui/Button"
import Map from "./Map"
import ValueCard from "./ValueCard"

export default function About() {
  return (
    <div className="min-h-screen max-lg:h-3/4 w-full bg-[url('/science_lab.jpeg')] bg-cover bg-no-repeat bg-center bg-fixed">
      <div className="h-3/4 px-8 max-sm:px-4 py-14 pt-40 bg-[rgba(31,31,31,0.8)] flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl max-sm:text-4xl text-[#FFF] font-semibold max-md:leading-normal" data-aos="fade-up" data-aos-offset="200"
            data-aos-duration="1000">Get To Know Us</h1>
        <p className="text-xl text-[#c8c8c8] w-[70%] max-md:w-[100%] leading-relaxed mt-2" data-aos="zoom-in" data-aos-duration="1000">
          We are committed to a better education
        </p>
      </div>
      <section className="px-8 max-sm:px-4 py-14 bg-[#f5f5f5]">
        <div className="flex flex-col items-center gap-3" data-aos="zoom-in" data-aos-offset="200"
            data-aos-duration="1000" data-aos-once="false">
          <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">About Dominican Royale International School (D.R.I.S.)</h2>
          <p className="text-[#1f1f1fd5] max-md:w-[100%] leading-relaxed md:text-xl text-justify">
            Dominican Royale International School (D.R.I.S.), founded in January 2007, is a growing private institution in Port Harcourt, Nigeria, committed 
            to delivering quality education from nursery through secondary school. Born out of a passion to provide accessible and compassionate learning in 
            an underserved area, D.R.I.S. began with just four children and three teachers and has since evolved into a respected school writing both WAEC and 
            NECO exams, with successful graduates within and outside Nigeria. Our school is driven by strong values, personalized attention, and a commitment 
            to nurturing every child’s potential in a safe, spiritual, and academically sound environment. With a focus on character development and academic 
            excellence, D.R.I.S. continues to grow through community trust and a shared vision of making a lasting difference in education.</p>
          <Link to="/about_us" className="w-max py-4 px-10 mt-10 text-[#fff] bg-blue-500 shadow-2xl hover:bg-[#1D4ED8] transition-all cursor-pointer
          rounded-[10px]">Learn More</Link>
        </div>
      </section>
      <section className="px-8 max-sm:px-4 py-14 text-center flex flex-col items-center gap-4 bg-white">
        <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-offset="200"
            data-aos-duration="1000" data-aos-once="true">
          <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">Our Values</h2>
          <p className="mt-4 text-[#1f1f1f] text-center">Over the years we have held on to our values</p>
        </div>
        <div className="max-md:gap-18 py-10 max-md:py-8 max-md:flex-wrap">
          {values.map((value, key)=> (
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
      <section className="px-8 max-sm:px-4 py-14 text-center flex flex-col items-center gap-4 bg-[#f5f5f5]" >
        <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-offset="200"
            data-aos-duration="1000" data-aos-once="false">
          <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">Our Team</h2>
          <p className="mt-4 text-[#1f1f1f] w-[70%]">Meet our team of carefully selected professionals, who are at the heart of the tremendous progres we have made over the years.</p>
        </div>
      </section>
      <section className="px-8 max-sm:px-4 py-14 text-center flex flex-col items-center gap-4 bg-white w-full">
        <div data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000" data-aos-once="false">
          <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">Our Location</h2>
          <p className="mt-4 text-[#1f1f1f]">Visit us at our campus to explore our vibrant learning environment first hand</p>
        </div>
        <Map />
      </section>
      <section className="px-8 max-sm:px-4 py-14 bg-[#f5f5f5] ">
        <div className="text-center flex flex-col items-center gap-4" data-aos="zoom-in" data-aos-offset="200"
            data-aos-duration="1000" data-aos-once="false">
          <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">Ready to Join Us?</h2>
          <p className="text-[#1f1f1fd5] sm:text-xl">Give your child the gift of a world-class education. Enroll today and secure their future!</p>
          <div className="flex items-center gap-8">
            <Link to="/admission" className="w-max p-3 px-6 mt-2 text-[#fff] bg-blue-500 shadow-2xl hover:bg-[#1D4ED8] transition-all cursor-pointer
            rounded-[10px]">Enroll Now</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
