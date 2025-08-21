import { FaChevronDown } from 'react-icons/fa'
import { LuChevronDown } from 'react-icons/lu'


export default function FAQ() {
  return (
    <div className='w-[90%] mt-4 grid border rounded-t-[10px]'>
        <label className='text-left '>
            <input type="radio" name="faq" className='hidden'/>
            <header className='flex items-center justify-between p-3 border-b'>
                <p className='text-xl font-medium'>What is the application deadline?</p>
                <LuChevronDown className='text-3xl'/>
            </header>
            <div className='hidden max-h-0 p-3 border-b text-[#1f1f1f] overflow-hidden animate-expandDown bg-white'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed hic quod quidem aperiam quisquam? 
                Culpa sint, cupiditate et debitis repudiandae dolor dolorem ipsam deserunt similique earum veritatis 
                fuga qui laudantium!
            </div>
        </label>
        <label className='text-left'>
            <input type="radio" name="faq" className='hidden'/>
            <header className='flex items-center justify-between p-3 border-b'>
                <p className='text-xl'>What is the application deadline?</p>
                <LuChevronDown className='text-3xl'/>
            </header>
            <div className='hidden p-3 border-b'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed hic quod quidem aperiam quisquam? 
                Culpa sint, cupiditate et debitis repudiandae dolor dolorem ipsam deserunt similique earum veritatis 
                fuga qui laudantium!
            </div>
        </label>
        <label className='text-left'>
            <input type="radio" name="faq" className='hidden'/>
            <header className='flex items-center justify-between p-3 border-b'>
                <p className='text-xl'>What is the application deadline?</p>
                <LuChevronDown className='text-3xl'/>
            </header>
            <div className='hidden p-3'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed hic quod quidem aperiam quisquam? 
                Culpa sint, cupiditate et debitis repudiandae dolor dolorem ipsam deserunt similique earum veritatis 
                fuga qui laudantium!
            </div>
        </label>
        
    </div>
  )
}
