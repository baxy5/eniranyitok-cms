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
          <div className="flex items-center justify-center pb-10 text-[#9f844e] font-bold">
            <svg
              width="25"
              height="25"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <g clipPath="url(#clip0_5_51)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.77279 1.56484C6.30865 1.02978 6.9521 0.614723 7.6605 0.347157C8.36891 0.0795919 9.12609 -0.0343668 9.88187 0.0128331C10.6376 0.060033 11.3748 0.267314 12.0444 0.620939C12.714 0.974564 13.3008 1.46646 13.7659 2.06403L19.2631 9.12615C20.2707 10.4216 20.6259 12.109 20.2278 13.7015L18.5526 20.4084C18.466 20.7558 18.4707 21.1196 18.5662 21.4647C18.6617 21.8097 18.8448 22.1242 19.0977 22.3776L26.6223 29.9022C26.876 30.1556 27.191 30.339 27.5366 30.4345C27.8822 30.5301 28.2467 30.5345 28.5945 30.4473L35.2984 28.7721C36.0842 28.5756 36.9045 28.5603 37.6971 28.7275C38.4898 28.8946 39.2341 29.2397 39.8737 29.7368L46.9358 35.2309C49.4747 37.2062 49.7074 40.9578 47.435 43.2271L44.2684 46.3937C42.0022 48.66 38.615 49.6553 35.4576 48.5436C27.3762 45.7001 20.0387 41.0737 13.9895 35.0073C7.92355 28.9589 3.29709 21.6226 0.453227 13.5423C-0.655398 10.3879 0.339915 6.99771 2.60616 4.73146L5.77279 1.56484Z"
                  fill="#9F844E"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_51">
                  <rect width="49" height="49" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>06 30 985 7441</p>
          </div>
          <div>
            <Link href="#contact">
              <a className="btn-one text-xl uppercase px-6 py-3">Elérhetőség</a>
            </Link>
          </div>
        </div>
      </div>
      <HomeTiles data={tilesData} />
    </div>
  );
};

export default Hero;
