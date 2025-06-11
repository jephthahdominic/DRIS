import { useRef, useEffect } from "react";
import { LuChevronLeft, LuChevronRight} from "react-icons/lu";

const testimonials = [
  {
    name: "Mrs. Johnson",
    text: "This platform helped my son find a scholarship that changed his life. I'm beyond grateful!",
  },
  {
    name: "Mr. Adebayo",
    text: "As a parent, I feel empowered knowing my daughter has access to real opportunities.",
  },
  {
    name: "Mrs. Chen",
    text: "The support and resources available here are unmatched. Highly recommended for families.",
  },
];

const Testimonials = () => {
  const containerRef = useRef(null);
  const scrollAmount = useRef(0);

  // Duplicate testimonials to simulate infinite loop
  const extendedTestimonials = [...testimonials, ...testimonials];

  // Auto scroll logic
  useEffect(() => {
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth / 2;

    const scroll = () => {
      if (!container) return;

      scrollAmount.current += container.offsetWidth;
      container.scrollTo({ left: scrollAmount.current, behavior: "smooth" });

      // Loop reset when halfway scrolled (because we duplicated the content)
      if (scrollAmount.current >= scrollWidth) {
        scrollAmount.current = 0;
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: "auto" });
        }, 500); // wait for scroll animation to finish
      }
    };

    const interval = setInterval(scroll, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    if (!containerRef.current) return;
    scrollAmount.current -= containerRef.current.offsetWidth;
    containerRef.current.scrollBy({ left: -containerRef.current.offsetWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!containerRef.current) return;
    scrollAmount.current += containerRef.current.offsetWidth;
    containerRef.current.scrollBy({ left: containerRef.current.offsetWidth, behavior: "smooth" });
  };

  return (
    <section className="relative max-w-full">      
      {/* Scrollable container */}
      <div
        ref={containerRef}
        className="w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar testimonial"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="snap-center shrink-0 w-full px-6 md:px-20 py-10"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center h-full">
              <p className="text-lg italic text-gray-700">"{testimonial.text}"</p>
              <h3 className="mt-6 font-semibold text-indigo-600">— {testimonial.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Manual scroll buttons (only on md+ screens) */}
      <div className="hidden md:flex justify-between items-center absolute top-1/2 w-full px-4 transform -translate-y-1/2">
        <button
          onClick={scrollLeft}
          className="bg-white p-2 rounded-full shadow hover:bg-indigo-100 transition"
        >
          <LuChevronLeft className="w-6 h-6 text-indigo-600" />
        </button>
        <button
          onClick={scrollRight}
          className="bg-white p-2 rounded-full shadow hover:bg-indigo-100 transition"
        >
          <LuChevronRight className="w-6 h-6 text-indigo-600" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
