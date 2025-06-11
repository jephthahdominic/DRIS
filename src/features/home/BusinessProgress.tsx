import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

type Stat = {
  label: string;
  target: number;
  duration?: number; // optional: in seconds
};

const stats: Stat[] = [
  { label: "Years in Business", target: 5 },
  { label: "Happy Clients", target: 120 },
  { label: "Projects Completed", target: 350 },
  { label: "Team Members", target: 15 },
];

const BusinessProgress = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const controls = useAnimation();
  const [values, setValues] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        const start = 0;
        const end = stat.target;
        const duration = (stat.duration || 2) * 1000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const current = Math.floor(progress * end);

          setValues((prev) => {
            const updated = [...prev];
            updated[index] = current;
            return updated;
          });

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      });

      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className="py-16 text-center">
      <h2 className="text-4xl font-semibold mb-10">Our Business Progress</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="bg-white p-6 rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0 } }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="text-4xl font-bold text-indigo-600">
              {values[index]}
              {stat.label.includes("Years") ? "+" : ""}
            </div>
            <p className="mt-2 text-gray-700">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BusinessProgress;
