import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";
import { GrMail, GrPhone } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] p-8 flex flex-col gap-32 max-sm:gap:18">
        <section className="flex max-xl:flex-col max-xl:items-center xl:justify-between gap-52 max-sm:gap-10">
            <div className="max-sm:text-center">
                <h3 className="text-[#e8e8e8] text-[1.25rem] font-semibold">Contact Us</h3>
                <div className="flex flex-col gap-4 mt-4 max-sm:items-center">
                    <p className="text-[#c5c5c5] text-[0.95rem] flex gap-2 items-center"><GoLocation /> Road B1, Valley View Gardens Estate, Atali, Elimgbu.</p>
                    <p className="text-[#c5c5c5] text-[0.95rem] flex gap-2 items-center"><GrPhone /> +234-803-313-4187</p>
                    <p className="text-[#c5c5c5] text-[0.95rem] flex gap-2 items-center"><GrMail  /> dominicanroyaleschool@gmail.com</p>
                </div>
            </div>
            <div className="max-sm:text-center">
                <h3 className="text-[rgb(232,232,232)] text-[1.25rem] font-semibold">Quick Links</h3>
                <nav className="flex flex-col mt-4">
                    <NavLink to="/" className={({isActive}) => isActive ? "text-[#fff]" : "text-[#c5c5c5]"}>Home</NavLink>
                    <NavLink to ="/about_us" className={({isActive}) => isActive ? "text-[#fff]" : "text-[#c5c5c5]"}>About</NavLink>
                    <NavLink to="/admission" className={({isActive}) => isActive ? "text-[#fff]" : "text-[#c5c5c5]"}>Admission</NavLink>
                    <NavLink to ="/contact" className={({isActive}) => isActive ? "text-[#fff]" : "text-[#c5c5c5]"}>Contact</NavLink>
                    <NavLink to="/news" className={({isActive}) => isActive ? "text-[#fff]" : "text-[#c5c5c5]"}>News</NavLink>
                    <NavLink to="/gallery" className={({isActive}) => isActive ? "text-[#fff]" : "text-[#c5c5c5]"}>Gallery</NavLink>
                </nav>
            </div>
            <div className="flex flex-col gap-8 max-sm:items-center flex-1">
                <div>
                    <h3 className="text-[rgb(232,232,232)] text-[1.25rem] font-semibold">Follow Us</h3>
                    <div className="flex items-center gap-3 text-[#c5c5c5] text-[1.5rem] mt-3">
                        <FaFacebook />
                        <FaWhatsapp />
                        <FaInstagram />
                    </div>
                </div>
                <div className="max-sm:text-center">
                    <h3 className="text-[rgb(232,232,232)] text-[1.25rem] font-semibold">Stay in Touch</h3>
                    <form action="" className="flex flex-col gap-3 mt-4 max-sm:items-center">
                        <input type="text" placeholder="Enter your name (Optional)" className="border border-white bg-white"/>
                        <input type="email" placeholder="Enter your Email" className="border border-white bg-white" required/>
                        <Button>Subscribe.</Button>
                    </form>
                </div>
            </div>
        </section>
        <section className="w-full text-center text-[#c5c5c5]">
            &copy; 2025. Dominican Royale International School. 
            All rights reserved.
        </section>
    </footer>
  )
}
