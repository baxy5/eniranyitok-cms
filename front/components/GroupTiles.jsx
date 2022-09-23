import React from "react";
import Link from "next/link";

const GroupTiles = ({ title, text }) => {
  return (
    <div className="pricing-card flex justify-center items-center h-56 text-center w-[300px] sm:w-[500px]">
      <div>
        <h2 className="text-2xl mb-5 md:text-4xl">{text}</h2>
        <Link href="">
          <a className="border-2 rounded-sm border-[#161718] sm:text-xl p-2 hover:bg-[#161718] hover:text-[#9f844e] transition-all ease-in-out duration-150">
            {title}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default GroupTiles;
