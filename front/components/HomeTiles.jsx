import React from "react";
import Link from "next/link";

const HomeTiles = ({ data }) => {
  return (
    <div className="bg-transparent p-2 md:flex md:gap-3">
      <div className="card flex items-center justify-center text-[#9F844E] h-56 text-center p-2 py-10 my-5 w-full">
        <div>
          <h2 className="text-xl mb-5">{data.RolamRich} </h2>
          <Link href="/rolam">
            <a className="button font-bold text-md uppercase">{data.Rolam}</a>
          </Link>
        </div>
      </div>

      <div className="card flex justify-center items-center text-[#9F844E] h-56 text-center p-2 py-10 my-5 w-full">
        <div>
          <h2 className="text-xl mb-5">{data.CsoportokRich} </h2>
          <Link href="/csoportok">
            <a className="button font-bold text-md uppercase">
              {data.Csoportok}
            </a>
          </Link>
        </div>
      </div>

      <div className="card flex items-center justify-center text-[#9F844E] h-56 text-center p-2 py-10 my-5 w-full">
        <div>
          <h2 className="text-xl mb-5">{data.AddiktologiaRich} </h2>
          <Link href="/addiktologia">
            <a className="button font-bold text-md uppercase">
              {data.Addiktologia}
            </a>
          </Link>
        </div>
      </div>

      <div className="card flex justify-center items-center text-[#9F844E] h-56 text-center p-2 py-10 my-5 w-full">
        <div>
          <h2 className="text-xl mb-5">{data.ArakRich} </h2>
          <Link href="/arak">
            <a className="button font-bold text-md uppercase">{data.Arak}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeTiles;
