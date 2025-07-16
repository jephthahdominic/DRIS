import React, { useEffect, useState } from "react";
// ...existing imports...

export default function Stats() {
  // Animated counters
  const [parents, setParents] = useState(0);
  const [rating, setRating] = useState(0);
  const [graduates, setGraduates] = useState(0);

  useEffect(() => {
    // Happy Parents
    let p = 0, g = 0, r = 0;
    const parentsTarget = 200;
    const graduatesTarget = 100;
    const ratingTarget = 4.5;
    const interval = setInterval(() => {
      if (p < parentsTarget) setParents(++p);
      if (g < graduatesTarget) setGraduates(++g);
      if (r < ratingTarget * 10) setRating((++r) / 10);
      if (p >= parentsTarget && g >= graduatesTarget && r >= ratingTarget * 10) clearInterval(interval);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    // Stats Bar
    <div className="w-full mt-8">
      {/* <h2 className="text-3xl font-bold text-center mb-4">Our Achievements</h2>
      <p className="text-center text-gray-600 mb-6">Celebrating our milestones and the trust of our community.</p> */}
     {/*...existing code...*/}
        <div className="flex flex-wrap justify-center gap-18 mb-8">
            <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-600">{parents}+</span>
            <span className="text-lg text-gray-700">Happy Parents</span>
            </div>
            <div className="flex flex-col items-center">
            <span className="flex items-center text-3xl font-bold text-yellow-500">
                {rating.toFixed(1)}
                <svg className="w-7 h-7 ml-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
                </svg>
            </span>
            <span className="text-lg text-gray-700">School Rating</span>
            </div>
            <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-600">{graduates}+</span>
            <span className="text-lg text-gray-700">Graduated Students</span>
            </div>
        </div>
        {/* End Stats Bar */}
        </div>
)}