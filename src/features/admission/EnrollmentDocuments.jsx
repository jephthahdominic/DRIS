import { MdCheckCircle } from "react-icons/md";
import { TiTick } from "react-icons/ti";

export default function EnrollmentDocuments() {
  return (
    <ul className="w-full text-left p-3 flex flex-col gap-2">
        <li className="text-[1.125rem] flex items-center gap-2 p-5 shadow-sm border-[#c4c4c4] border-2 border-solid rounded-[10px]">
            <MdCheckCircle className="text-green-700 text-[1.3rem]"/>
            Completed application form
        </li>
        <li className="text-[1.125rem] flex items-center gap-2 p-5 shadow-sm border-[#c4c4c4] border-2 border-solid rounded-[10px]">
            <MdCheckCircle className="text-green-700 text-[1.3rem]"/>
            Birth certificate (copy)
        </li>
        <li className="text-[1.125rem] flex items-center gap-2 p-5 shadow-sm border-[#c4c4c4] border-2 border-solid rounded-[10px]">
            <MdCheckCircle className="text-green-700 text-[1.3rem]"/>
            Recent passport photographs (2)
        </li>
        <li className="text-[1.125rem] flex items-center gap-2 p-5 shadow-sm border-[#c4c4c4] border-2 border-solid rounded-[10px]">
            <MdCheckCircle className="text-green-700 text-[1.3rem]"/>
            Previous school result sheet (if applicable)
        </li>
    </ul>
  )
}
