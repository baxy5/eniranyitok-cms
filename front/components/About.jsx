import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="about h-screen p-5 pt-24 lg:pt-48 lg:pl-24">
      <h2 className="font-bold text-6xl uppercase mb-10 md:text-8xl lg:text-9xl">
        Szalai <br /> Éva
      </h2>
      <Link href="/rolam">
        <a className="btn-one text-xl uppercase px-6 py-3">Rólam</a>
      </Link>
    </div>
  );
};

export default About;
