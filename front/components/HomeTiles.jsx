import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";

const HomeTiles = () => {
  const [tileData, setTileData] = useState({});

  const fetchData = () => {
    fetch("https://eniranyitok-cms.herokuapp.com/api/home?populate=*")
      .then((res) => res.json())
      .then((res) => {
        setTileData(res.data.attributes.HomeTiles[0]);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-transparent p-2 md:flex md:gap-3">
      <div className="card flex items-center justify-center text-[#9F844E] h-56 text-center p-2 py-10 my-5 w-full">
        <div>
          <h2 className="text-xl mb-5">{tileData.RolamRich} </h2>
          <Link href="/rolam">
            <a className="button font-bold text-md uppercase">
              {tileData.Rolam}
            </a>
          </Link>
        </div>
      </div>

      <div className="card flex justify-center items-center text-[#9F844E] h-56 text-center p-2 py-10 my-5 w-full">
        <div>
          <h2 className="text-xl mb-5">{tileData.CsoportokRich} </h2>
          <Link href="/csoportok">
            <a className="button font-bold text-md uppercase">
              {tileData.Csoportok}
            </a>
          </Link>
        </div>
      </div>

      <div className="card flex items-center justify-center text-[#9F844E] h-56 text-center p-2 py-10 my-5 w-full">
        <div>
          <h2 className="text-xl mb-5">{tileData.AddiktologiaRich} </h2>
          <Link href="/addiktologia">
            <a className="button font-bold text-md uppercase">
              {tileData.Addiktologia}
            </a>
          </Link>
        </div>
      </div>

      <div className="card flex justify-center items-center text-[#9F844E] h-56 text-center p-2 py-10 my-5 w-full">
        <div>
          <h2 className="text-xl mb-5">{tileData.ArakRich} </h2>
          <Link href="/arak">
            <a className="button font-bold text-md uppercase">
              {tileData.Arak}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeTiles;
