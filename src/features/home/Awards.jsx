import { SiRotaryinternational } from "react-icons/si"
import waec_logo from "../../assets/waec-logo.jpg"
import litfest from "../../assets/Litfest.png"
import cowbell from "../../assets/cowbell.jpg"

export default function Awards() {
  return (
    <div className="mt-10 flex gap-10">
        <div className="flex flex-col items-center p-3  rounded-[10px]">
            <img src={cowbell} alt="litfest" width={120}/>
            <div className="text-xl max-md:text-sm text-[#1f1f1f65]">
                <p>Cowbellpedia, Rivers State.</p>
                <p>3rd position</p>
                <span>(2010)</span>
            </div>
        </div>
        <div className="flex flex-col items-center p-3  rounded-[10px]">
            <img src={waec_logo} alt="waec" width={120}/>
            <div className="text-xl max-md:text-sm text-[#1f1f1f65]">
                <p>West African Examination Council</p>
                <p>WAEC Approved.</p>
                <span>(2022)</span>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3  p-3 rounded-[10px]">
            <SiRotaryinternational className="text-[6rem] text-[#1f1f1f65]"/>
            <div className="text-xl max-md:text-sm text-[#1f1f1f65]">
                <p>Rotary spelling B competition</p>
                <p>2nd Position <span>(2011, 2012).</span></p>
                <p>3rd Position <span>(2023).</span></p>
            </div>
        </div>
        <div className="flex flex-col items-center p-3  rounded-[10px]">
            <img src={litfest} alt="litfest" width={120}/>
            <div className="text-xl max-md:text-sm text-[#1f1f1f65]">
                <p>LitFest, 2024.</p>
                <p>2nd position, Quiz</p>
                <p>1st position, Debate</p>
                <span>(2024)</span>
            </div>
        </div>
    </div>
  )
}
