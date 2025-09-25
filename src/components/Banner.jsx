import React, { useContext } from "react";
import { TicketContext } from "../provider/TicketContext";

const Banner = () => {
  const {inprogress,resolve}=useContext(TicketContext);
  return (
    <div className=" p-1">
      <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* In-Progress Card */}
          <div className="relative rounded-xl  p-12 text-center text-white bg-gradient-to-r from-purple-600 to-indigo-600 overflow-hidden">
            {/* Background SVG/PNG */}
            <img
              src="/vector1.png"
              alt="background"
              className="absolute left-0 bottom-0 h-full"
            />

            {/* Second Image (Reversed) */}
            <img
              src="/vector1.png"
              alt="background"
              className="absolute right-0 bottom-0 h-full transform scale-x-[-1] "
            />

            {/* Foreground Content */}
            <h3 className="text-lg">In-Progress</h3>
            <p className="text-4xl font-bold">{inprogress.length==0?0:inprogress.length}</p>
          </div>

          {/* Resolved Card */}
          <div className="relative rounded-xl p-12 text-center text-white bg-gradient-to-r from-green-400 to-green-600 overflow-hidden">
            {/* Background SVG/PNG */}
            <img
              src="/vector1.png"
              alt="background"
              className="absolute left-0 bottom-0 h-full"
            />

            {/* Second Image (Reversed) */}
            <img
              src="/vector1.png"
              alt="background"
              className="absolute right-0 bottom-0 h-full transform scale-x-[-1] "
            />

            {/* Foreground Content */}
            <h3 className="text-lg">Resolved</h3>
            <p className="text-4xl font-bold">{resolve.length==0?0:resolve.length}</p>
          </div>
        </div>
    </div>
  );
};

export default Banner;
