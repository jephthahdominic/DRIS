import Button from "../../ui/Button"
import Hero from "./Hero"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <section className="p-8 py-14 text-center flex flex-col items-center gap-4">
        <h2 className="text-4xl after: section-heading">About Us</h2>
        <p className="text-[#1f1f1f] w-[80%] leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nesciunt, enim velit 
          earum tempore reiciendis. Nesciunt aliquid dolores debitis optio et, officia 
          doloremque quae illum voluptates cum sapiente dolor recusandae!</p>
        <Button>Learn More</Button>
      </section>
    </div>
  )
}
