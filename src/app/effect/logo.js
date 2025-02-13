'use client'
import { useState } from "react";
import "./LogoWall.css";
import { Star } from "lucide-react";

function LogoWall({
  items = [],
  direction = "horizontal",
  pauseOnHover = false,
  size = "clamp(8rem, 1rem + 30vmin, 25rem)",
  duration = "60s",
  textColor = "#ffffff",
  bgColor = "#060606",
  bgAccentColor = "#111111"
}) {
  const [isPaused, setIsPaused] = useState(false);

  const wrapperClass = [
    "logoWall-wrapper",
    direction === "vertical" && "wrapper--vertical"
  ]
    .filter(Boolean)
    .join(" ");

  const marqueeClass = [
    "marquee",
    direction === "vertical" && "marquee--vertical",
    isPaused && "paused"
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={wrapperClass}
      style={{
        "--size": size,
        "--duration": duration,
        "--color-text": textColor,
        "--color-bg": bgColor,
        "--color-bg-accent": bgAccentColor
      }}
    >
      <div
        className={marqueeClass}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div className="marquee__group">
          {items.map((item, idx) => (
               
               <div key={idx} className="flex gap-2 justify-center items-center font-silkscreen">
        <Star className="w-4"/>   <h1 className="text-3xl font-bold ">
          {
            item.altText
          }
            </h1> 
          </div>

       
            ))}
        </div>
        <div className="marquee__group" aria-hidden="true">
          {items.map((item, idx) => (
     
          <div key={idx} className="flex gap-2 justify-center items-center font-silkscreen">
        <Star className="w-4"/>   <h1 className="text-3xl font-bold ">
            {item.altText}
            </h1> 
          </div>

          ))}
        </div>
      </div>

   
    
   
    </article>
  );
}

export default LogoWall;
