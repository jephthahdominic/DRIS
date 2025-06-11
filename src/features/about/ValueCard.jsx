export default function ValueCard({value}) {
  return (
    <div className="p-6 shadow-xl rounded-[10px] text-center cursor-pointer hover:transform hover:scale-110 transition-all">
      <h3 className="text-xl font-semibold">{value.title}</h3>
      <p className="text-[#1f1f1fd5] text-md mt-2 leading-relaxed">{value.statement}</p>
    </div>
  )
}
