import React from "react";

export default function SameCard({ name, img, alt, width = "w-full", height = "h-auto" }) {
  return (
    <div className="flex flex-col gap-3 w-full h-full">
      <h3 className="playwrite text-xl md:text-2xl font-semibold tracking-wide text-left">
        {name}
      </h3>
      
      <div className="w-full h-full overflow-hidden rounded-xl bg-slate-800/20 border border-white/10 shadow-lg">
        <img 
          src={img} 
          alt={alt} 
          className={`${width} ${height} max-h-[500px] md:max-h-none aspect-[3/4] md:aspect-auto object-cover rounded-xl transform transition-all duration-700 ease-out hover:scale-95`} 
        />
      </div>
    </div>
  );
}