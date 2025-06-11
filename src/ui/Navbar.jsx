import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";

export default function Navbar() {
  const {isSidebar, setIsSidebar} = useSidebar()
  return (
    <div className={`fixed md:hidden top-0 z-20 h-screen w-full bg-[rgba(255,255,255,.98)] flex items-center animate-fadeIn ${!isSidebar && "hidden"}`}>
      <IoClose className="text-5xl absolute top-8 right-8" onClick={()=>setIsSidebar(false)}/>
      <nav className="flex flex-col items-center gap-10 text-3xl w-full px-4">
        <NavLink to="/" className={({isActive}) => isActive ? "text-[#000] w-full py-2 text-center border-b-2 border-b-[#fff]" : "text-[#1f1f1fee] py-2 w-full text-center text-3xl border-b-2 border-transparent"}>Home</NavLink>
        <NavLink to ="/about_us" className={({isActive}) => isActive ? "text-[#000] text-center py-2 w-full border-b-2 border-b-[#fff]" : "text-[#1f1f1fee] py-2 w-full text-center text-3xl border-b-2 border-transparent"}>About</NavLink>
        <NavLink to="/admission" className={({isActive}) => isActive ? "text-[#000] text-center py-2 w-full border-b-2 border-b-[#fff]" : "text-[#1f1f1fee] py-2 w-full text-center text-3xl border-b-2 border-transparent"}>Admission</NavLink>
        <NavLink to ="/contact" className={({isActive}) => isActive ? "text-[#000] text-center py-2 w-full border-b-2 border-b-[#fff]" : "text-[#1f1f1fee] py-2 w-full text-center text-3xl border-b-2 border-transparent"}>Contact</NavLink>
        <NavLink to="/news" className={({isActive}) => isActive ? "text-[#000] text-center py-2 w-full border-b-2 border-b-[#fff]" : "text-[#1f1f1fee] py-2 w-full text-center text-3xl border-b-2 border-transparent"}>News</NavLink>
        <NavLink to="/gallery" className={({isActive}) => isActive ? "text-[#000] text-center py-2 w-full border-b-2 border-b-[#fff]" : "text-[#1f1f1fee] py-2 w-full text-center text-3xl border-b-2 border-transparent"}>Gallery</NavLink>
      </nav>
    </div>
  )
}
