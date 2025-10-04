import React from "react";

import GroupTiles from "./GroupTiles";

const Groups = ({ data }) => {
  return (
    <div className="csoportok">
      <div className="flex justify-center items-center pt-10">
        <h1 className="text-3xl sm:text-6xl pb-10 text-[#9f844e] font-bold">
          Csoportok
        </h1>
      </div>
      <div className="text-[#161718] flex justify-around flex-col gap-10 px-6 sm:grid sm:grid-cols-2 sm:p-10 sm:py-12 lg:grid-cols-3">
        <GroupTiles title={data.TileOne} text={data.TileOneRich} />
        <GroupTiles title={data.TileTwo} text={data.TileTwoRich} />
        <GroupTiles title={data.TileThree} text={data.TileThreeRich} />
        <GroupTiles title={data.TileFour} text={data.TileFourRich} />
        <GroupTiles title={data.TileFive} text={data.TileFiveRich} />
        <GroupTiles title={data.TileSix} text={data.TileSixRich} />
      </div>
    </div>
  );
};

export default Groups;
