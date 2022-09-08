import React from "react";
import Link from "next/link";
import Image from "next/image";

import HomeTiles from "../components/HomeTiles";

const Hero = ({ tilesData }) => {
  return (
    <div className="main-nav h-full">
      <div className="flex justify-center items-center text-center py-24">
        <div>
          <div>
            <Image
              src="/logo.png"
              width="500"
              height="500"
              alt="Énirányítok logo"
            />
          </div>
          <Link href="#contact">
            <a className="btn-one text-xl uppercase px-6 py-3">Elérhetőség</a>
          </Link>
        </div>
      </div>
      <HomeTiles data={tilesData} />
    </div>
  );
};

export default Hero;
