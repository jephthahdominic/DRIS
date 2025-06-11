import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className={`h-screen max-xl:h-3/4 w-full bg-[url('/group_photo.jpeg')] bg-cover bg-no-repeat bg-center`}>
        <div className="h-full p-8 max-md:pt-32 bg-[rgba(31,31,31,0.8)] flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl max-sm:text-4xl text-[#FFF] font-semibold max-md:leading-normal">Nurturing Leaders of Tomorrow</h1>
            <p className="text-xl text-[#c8c8c8] w-[70%] max-md:w-[100%] leading-relaxed mt-6">Our supportive community, state-of-the-art facilities, and innovative programs provide the ideal environment 
            for students to flourish and reach their full potential.</p>
            <Link to={"/about_us"} className="text-[#fff] bg-blue-500 hover:bg-[#1D4ED8] text-[1.1rem] transition-all shadow-2xl p-3 px-8 mt-10 rounded-[10px]">Discover more</Link>
        </div>
    </div>
  )
}
