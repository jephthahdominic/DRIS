import { Link, NavLink } from "react-router-dom"
import logo from "../assets/graduation-cap.png"
import { BiMenu } from "react-icons/bi"

export default function Header() {
  return (
    <header className="p-8 max-sm:p-5 flex items-center justify-between bg-red-700">
        <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="logo" width={28}/>
            <h4 className="text-[1.25rem] max-sm:text-[1rem] text-[#fff]">Dominican Royale <span className="max-xl:block">International School</span></h4>
        </Link>
        <button><BiMenu className="text-[#fff] text-[1.5rem] md:hidden"/></button>
        <nav className="flex items-center gap-4 max-md:hidden">
            <NavLink to="/" className={({isActive}) => isActive ? "text-[#fff] border-b-2 border-b-[#fff]" : "text-[#c5c5c5] border-b-2 border-transparent"}>Home</NavLink>
            <NavLink to ="/about_us" className={({isActive}) => isActive ? "text-[#fff] border-b-2 border-b-[#fff]" : "text-[#c5c5c5] border-b-2 border-transparent"}>About</NavLink>
            <NavLink to="/admission" className={({isActive}) => isActive ? "text-[#fff] border-b-2 border-b-[#fff]" : "text-[#c5c5c5] border-b-2 border-transparent"}>Admission</NavLink>
            <NavLink to ="/contact" className={({isActive}) => isActive ? "text-[#fff] border-b-2 border-b-[#fff]" : "text-[#c5c5c5] border-b-2 border-transparent"}>Contact</NavLink>
            <NavLink to="/news" className={({isActive}) => isActive ? "text-[#fff] border-b-2 border-b-[#fff]" : "text-[#c5c5c5] border-b-2 border-transparent"}>News</NavLink>
            <NavLink to="/gallery" className={({isActive}) => isActive ? "text-[#fff] border-b-2 border-b-[#fff]" : "text-[#c5c5c5] border-b-2 border-transparent"}>Gallery</NavLink>
        </nav>
    </header>
  )
}
