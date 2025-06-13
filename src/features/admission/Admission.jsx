import { Link } from "react-router-dom";
import AdmissionProcess from "./AdmissionProcess";
import EnrollmentDocuments from "./EnrollmentDocuments";
import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

const faq = [
  {
    question:"What is the application deadline?",
    answer:"Applications are accepted year-round, contact the school for further details."
  },
  {
    question:"What is the "
  }
]

export default function Admission() {

  const [openScheduleBooker, setOpenScheduleBooker] = useState(false)

  return (
    <div className="min-h-screen max-lg:h-3/4 w-full">
      <div className="h-3/4 px-8 max-sm:px-4 py-14 pt-40 bg-[rgba(31,31,31,0.8)] flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl max-sm:text-4xl text-[#FFF] font-semibold max-md:leading-normal" data-aos="fade-up" data-aos-offset="200"
            data-aos-duration="1000">Join Us Today</h1>
        <p className="text-xl text-[#c8c8c8] w-[70%] max-md:w-[100%] leading-relaxed mt-6" data-aos="zoom-in" data-aos-duration="1000">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa velit, veritatis quia eum, non aliquid adipisci 
          tempora maxime reiciendis, excepturi nemo eveniet nihil fugiat atque at! Aperiam ipsam velit suscipit!
        </p>
      </div>
      <section className="px-8 max-sm:px-4 py-14 bg-white">
        <div className="text-center flex flex-col items-center gap-4" data-aos="zoom-in" data-aos-offset="200"
        data-aos-duration="1000" data-aos-once="true">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">Admission Process</h2>
          </div>
          <AdmissionProcess setOpenScheduleBooker={setOpenScheduleBooker}/>
        </div>
      </section>
      <section className="px-8 max-sm:px-4 py-14 bg-white">
        <div className="text-center flex flex-col items-center gap-4" data-aos="zoom-in" data-aos-offset="200"
        data-aos-duration="1000" data-aos-once="false">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">Required Documents</h2>
          </div>
          <EnrollmentDocuments />
        </div>
      </section>
      <section className="px-8 max-sm:px-4 py-14 bg-[#f5f5f5]">
        <div className="text-center flex flex-col items-center gap-4" data-aos="zoom-in" data-aos-offset="200"
        data-aos-duration="1000" data-aos-once="false">

          <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">Contact Us?</h2>
          <p className="text-[#1f1f1fd5] sm:text-xl w-[70%]">We’d love to hear from you! Contact us for any inquiries or support.</p>
          <div className="flex items-center gap-8">
            <Link to="/contact" className="p-3 px-6 mt-2 text-[#1D4ED8] bg-white border border-blue-500 shadow-2xl hover:bg-[#1D4ED8] hover:text-[#fff] transition-all cursor-pointer
            rounded-[10px]">Contact us</Link>
          </div>
        </div>
      </section>
      {/* <section className="px-8 max-sm:px-4 py-14 text-center flex flex-col items-center gap-4 bg-[#f5f5f5]">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">Frequently Asked Questions</h2>
        </div>
        <FAQ />
      </section> */}
      {openScheduleBooker && <div className="fixed h-screen w-full p-10 z-30 top-0 bg-[rgba(0,0,0,0.50)] flex flex-col gap-3 jsutify-center items-center animate-fadeIn">
        <IoCloseCircle className="text-white text-6xl cursor-pointer" onClick={()=>setOpenScheduleBooker(false)}/>
        <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0BVThoPS_wpXyW0zNGTriTUKJa_JOAyfgypYYNU37XN4cRZ129Zej--_rew-krk2fgmGPQQD_U?gv=true" style={{border: 0}} width="100%" height="600" frameBorder="0" className="bg-white h-11/12 w-11/12 m-auto rounded-[10px]"></iframe>
        Hello
      </div>}
    </div>
  )
}
