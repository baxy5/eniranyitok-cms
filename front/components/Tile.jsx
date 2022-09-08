import React from "react";
import Link from "next/link";

export function Tile({ title, text, href }) {
  return (
    <div className="card flex items-center justify-center text-[#9F844E] h-56 text-center p-2 py-10 my-5 w-full">
      <div>
        <h2 className="text-xl mb-5">{text} </h2>
        <Link href={href}>
          <a className="button font-bold text-md uppercase">{title}</a>
        </Link>
      </div>
    </div>
  );
}
