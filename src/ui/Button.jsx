export default function Button({children}) {
  return (
    <button className="w-max p-2 px-4 text-[#fff] bg-blue-500 shadow-2xl hover:bg-[#1D4ED8] transition-all cursor-pointer
    rounded-[10px]">{children}</button>
  )
}
