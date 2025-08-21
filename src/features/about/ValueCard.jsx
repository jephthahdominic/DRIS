export default function ValueCard({value}) {
  return (
    <div className="max-md:w-[100%] md:w-[80%] p-6 shadow-md rounded-[10px] cursor-pointer border border-[#f9f9f9]" data-aos="fade-up" data-aos-offset="200"
      data-aos-duration="1000" data-aos-once="false">
      <h3 className="text-xl font-semibold">{value.title}</h3>
      <p className="text-[#1f1f1fd5] text-base mt-2 leading-relaxed">{value.statement.charAt(0).toUpperCase() + value.statement.slice(1).toLowerCase()}</p>
    </div>
  )
}
