export default function ProgramCard({program}) {
  return (
    <div className="rounded-md text-center bg-white shadow xl">
        <img src={program.coverImg} alt="program_cover" className="w-full rounded-t-[10px]"/>
        <div className="py-4 px-2">
            <h4 className="text-xl font-semibold">{program.category}</h4>
            <p className="text-[#1f1f1fd5] text-md mt-2 leading-relaxed">{program.description}</p>
        </div>
    </div>
  )
}
