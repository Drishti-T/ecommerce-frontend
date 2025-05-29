import { useEffect, useState } from "react";
export const ScrollingText = () => {


  const baseText = "Class Class Class ";
  const [text, setText] = useState(baseText);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => prev.slice(1) + prev[0]); // Shift one character left
    }, 150); // Speed (ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden whitespace-nowrap bg-gray-100">
      <span className="text-xl font-semibold">{text}</span>
    </div>
  );
};


