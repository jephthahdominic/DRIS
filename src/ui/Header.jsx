import { Link, NavLink } from "react-router-dom"
import logo from "../assets/DRIS_logo.png"
import { BiMenu } from "react-icons/bi"
import { useState } from "react"
import { useSidebar } from "../context/SidebarContext"

export default function Header() {
  const {setIsSidebar} = useSidebar()
  const [isScrollActive, setIsScrollActive] = useState(false);
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 50){
      setIsScrollActive(true)
    }else{
      setIsScrollActive(false)
    }
  })
  return (
    <header className={`px-8 py-6 max-sm:p-5 flex items-center z-10 justify-between fixed w-full ${isScrollActive ? "bg-red-700": "bg-transparent"}`}>
        <Link to="/" className="flex items-center gap-1">
            <img src={logo} alt="logo" width={50}/>
            <h4 className="text-[1.25rem] max-sm:text-[1rem] text-[#fff]">Dominican Royale <span className="max-xl:block">International School</span></h4>
        </Link>
        <button onClick={()=>setIsSidebar(true)}><BiMenu className="text-[#fff] text-[1.5rem] md:hidden"/></button>
        <nav className="flex items-center gap-4 max-md:hidden">
            <NavLink to="/" className={({isActive}) => isActive ? "text-[#fff] border-b-2 border-b-[#fff]" : "text-[#f9f9f9] border-b-2 border-transparent"}>Home</NavLink>
            <NavLink to ="/about_us" className={({isActive}) => isActive ? "text-[#fff] border-b-2 border-b-[#fff]" : "text-[#f9f9f9] border-b-2 border-transparent"}>About</NavLink>
            <NavLink to="/admission" className={({isActive}) => isActive ? "text-[#fff] border-b-2 border-b-[#fff]" : "text-[#f9f9f9] border-b-2 border-transparent"}>Admission</NavLink>
            <NavLink to ="/contact" className={({isActive}) => isActive ? "text-[#fff] border-b-2 border-b-[#fff]" : "text-[#f9f9f9] border-b-2 border-transparent"}>Contact</NavLink>
            <NavLink to="/news" className={({isActive}) => isActive ? "text-[#fff] border-b-2 border-b-[#fff]" : "text-[#f9f9f9] border-b-2 border-transparent"}>News</NavLink>
            <NavLink to="/gallery" className={({isActive}) => isActive ? "text-[#fff] border-b-2 border-b-[#fff]" : "text-[#f9f9f9] border-b-2 border-transparent"}>Gallery</NavLink>
        </nav>
    </header>
  )
}
