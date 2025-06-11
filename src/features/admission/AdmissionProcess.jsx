import { FaPaperPlane, FaRegFile } from "react-icons/fa";
import { LuPaperclip } from "react-icons/lu";
import { PiCalendar, PiNotepad, PiPaperPlane } from "react-icons/pi";

export default function AdmissionProcess({step}) {
  return (
    <div className="flex justify-center gap-28 max-md:gap-18 py-10 max-md:py-8 max-md:flex-wrap">
      <div className="flex flex-col items-center gap-2 bg-gradient-to-br from-[#f5f5f5] via-[#ffffff] to-[#fce8e8] p-6 rounded-[10px] shadow-xl">
        <FaRegFile className="text-5xl text-[#1f1f1f]"/>
        <div>
          <h4 className="text-[1.25rem] font-semibold">Step 1: Application</h4>
          <p className="text-[#1f1f1f] text-md leading-normal mt-2">Download and fill out the application form. Submit it along with the required documents.</p>
        </div>
        <button className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-[10px] cursor-pointer shadow-2xl hover:bg-[#1D4ED8] transition-all">Download Form</button>
      </div>
      <div className="flex flex-col items-center gap-2 bg-gradient-to-br from-[#f5f5f5] via-[#ffffff] to-[#fce8e8] p-6 rounded-[10px] shadow-xl">
        <PiCalendar className="text-5xl text-[#1f1f1f]"/>
        <div>
          <h4 className="text-[1.25rem] font-semibold">Step 2: Interview</h4>
          <p className="text-[#1f1f1f] text-md leading-normal mt-2">Schedule an appointment with the school's management for an interview and to better know your child.</p>
        </div>
        <button className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-[10px] cursor-pointer shadow-2xl hover:bg-[#1D4ED8] transition-all">Schedule Appointment</button>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#f5f5f5] via-[#ffffff] to-[#fce8e8] p-6 rounded-[10px] shadow-xl">
        <FaPaperPlane className="text-5xl text-[#1f1f1f]"/>
        <div>
          <h4 className="text-[1.25rem] font-semibold">Step 3: Enrollment</h4>
          <p className="text-[#1f1f1f] text-md leading-normal mt-2">Schedule an appointment with the school's management for an interview and to better know your child.</p>
        </div>
      </div>
    </div>
  )
}
