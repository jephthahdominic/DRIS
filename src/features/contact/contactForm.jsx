import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,      // e.g. service_xxxxxx
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,     // e.g. template_xxxxxx
//         form.current,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY       // e.g. qwerty123456
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           alert("Message sent successfully");
//         },
//         (error) => {
//           console.error(error.text);
//           alert("Failed to send message");
//         }
//       );
//   };

  return (
    <form action='https://formspree.io/f/xgvzjjey' method="POST" className="w-full mt-8 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input type="text" name="user_name" id="name" required className="w-full focus:shadow-md border-2 border-[#c8c8c8] transition-all"/>
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input type="email" name="user_email" id="email" required className="w-full focus:shadow-md border-2 border-[#c8c8c8] transition-all"/>
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" required className="p-3 w-full focus:shadow-md border-2 border-[#c8c8c8] h-32 outline-0 rounded-[10px] transition-all"></textarea>
        </div>
        <div>
            <button type="submit" className="w-full p-4 px-6 mt-2 text-[#fff] bg-blue-500 shadow-2xl hover:bg-[#1D4ED8] transition-all cursor-pointer
            rounded-[10px] flex items-center gap-2 justify-center text-md">
            Send Message <FaPaperPlane />
            </button>
        </div>
    </form>
  );
}
