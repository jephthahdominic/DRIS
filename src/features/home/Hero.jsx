import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className={`h-[90vh] max-lg:h-3/4 w-full bg-[url('/group_photo.jpeg')] bg-cover bg-no-repeat bg-center`}>
        <div className="h-full px-8 max-sm:px-4 py-14 pt-40 bg-[rgba(31,31,31,0.8)] flex flex-col justify-center items-center text-center" >
            <h1 className="text-6xl max-sm:text-4xl text-[#FFF] font-semibold max-md:leading-normal" data-aos="fade-up" data-aos-offset="200"
            data-aos-duration="1000">Nurturing Leaders of Tomorrow</h1>
            <p className="text-xl text-[#c8c8c8] w-[70%] max-md:w-[100%] leading-relaxed mt-6" data-aos="zoom-in" data-aos-duration="1000">Our supportive community, state-of-the-art facilities, and innovative programs provide the ideal environment 
            for students to flourish and reach their full potential.</p>
            <Link to="/admission" className="w-max p-3 px-10 mt-8 text-[#fff] bg-blue-500 shadow-2xl hover:bg-[#1D4ED8] transition-all cursor-pointer
            rounded-[10px]">Enroll Now</Link>
            {/* <Link to="/about_us" className="text-[#1f1f1f] bg-white border border-blue-500 hover:bg-[#1D4ED8] hover:text-[#fff] text-[1.1rem] transition-all shadow-2xl p-3 px-8 mt-10 rounded-[10px]">Discover more</Link> */}
        </div>
    </div>
  )
}
