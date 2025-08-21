import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { GrMail, GrPhone } from "react-icons/gr";
import Map from "../about/Map";
import ContactForm from "./contactForm";

export default function Contact() {
  return (
    <div className="min-h-screen max-lg:h-3/4 w-full">
      <div className="h-3/4 px-8 max-sm:px-4 py-14 pt-40 bg-[rgba(31,31,31,0.8)] flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl max-sm:text-4xl text-[#FFF] font-semibold max-md:leading-normal" data-aos="fade-up" data-aos-offset="200"
        data-aos-duration="1000">Keep in Touch</h1>
        <p className="text-xl text-[#c8c8c8] w-[70%] max-md:w-[100%] leading-relaxed mt-6" data-aos="zoom-in" data-aos-offset="200"
        data-aos-duration="1000">
          We’re here to answer your questions.
        </p>
      </div>
      <section className="py-14 flex max-lg:flex-col justify-center items-center gap-52 max-lg:gap-24 xl:bg-[#f5f5f5]">
        <div className="flex flex-col max-sm:px-4 " data-aos="zoom-in-left" data-aos-offset="200"
        data-aos-duration="1000" data-aos-once="true">
          <h2 className="text-4xl max-sm:text-3xl font-semibold ">Our Contact</h2>
          <div className="flex flex-col gap-4 mt-4">
            <p className="text-[#1f1f1f] text-[0.95rem] flex gap-2 items-center"><GoLocation /> Road B1, Valley View Gardens Estate, Atali, Elimgbu.</p>
            <p className="text-[#1f1f1f] text-[0.95rem] flex gap-2 items-center"><GrPhone /> +234-803-313-4187</p>
            <p className="text-[#1f1f1f] text-[0.95rem] flex gap-2 items-center"><GrMail  /> dominicanroyaleschool@gmail.com</p>
          </div>
          <div className="flex items-center gap-5 text-[#1f1f1f] text-[1.5rem] mt-8">
            <a href="/" className="text-3xl"><FaFacebook /></a>
            <a href="/" className="text-3xl"><FaWhatsapp /></a>
            <a href="/" className="text-3xl"><FaInstagram /></a>
          </div>
        </div>
        <div className="flex flex-col xl:w-[40%] max-sm:w-[100%] max-sm:p-10 sm:w-[70%] lg:items-center max-sm:bg-[#f5f5f5]" data-aos="zoom-in-right" data-aos-offset="200"
        data-aos-duration="1000" data-aos-once="false">
          <h2 className="text-4xl max-sm:text-3xl font-semibold">Send Us a Message</h2>
          <ContactForm/>
        </div>
      </section>
      <section className="px-8 max-sm:px-4 py-10 text-center flex flex-col items-center gap-4 bg-white w-full" data-aos="zoom-in" data-aos-offset="200"
        data-aos-duration="1000" data-aos-once="false">
        <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">Our Location</h2>
        <Map />
      </section>

    </div>
  )
}
