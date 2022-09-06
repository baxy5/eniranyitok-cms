import React from "react";
import Link from "next/link";

const Groups = () => {
  return (
    <div className="bg-transparent p-2 md:flex md:gap-3">
      <div className="card text-[#9F844E] h-full text-center p-2 py-10 my-5">
        <h2 className="text-xl mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </h2>
        <Link href="/about">
          <a className="text-md uppercase">Rólam</a>
        </Link>
      </div>

      <div className="card text-[#9F844E] h-full text-center p-2 py-10 my-5">
        <h2 className="text-xl mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </h2>
        <Link href="/about">
          <a className="text-md uppercase">Rólam</a>
        </Link>
      </div>

      <div className="card text-[#9F844E] h-full text-center p-2 py-10 my-5">
        <h2 className="text-xl mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </h2>
        <Link href="/about">
          <a className="text-md uppercase">Rólam</a>
        </Link>
      </div>

      <div className="card text-[#9F844E] h-full text-center p-2 py-10 my-5">
        <h2 className="text-xl mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </h2>
        <Link href="/about">
          <a className="text-md uppercase">Rólam</a>
        </Link>
      </div>
    </div>
  );
};

export default Groups;
