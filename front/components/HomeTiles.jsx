import { Tile } from "./Tile";
import React from "react";

const HomeTiles = ({ data }) => {
  return (
    <div className="bg-transparent p-2 md:flex md:gap-3">
      <Tile title={data.Rolam} text={data.RolamRich} href="/rolam" />

      <Tile
        title={data.Csoportok}
        text={data.CsoportokRich}
        href="/csoportok"
      />

      <Tile
        title={data.Addiktologia}
        text={data.AddiktologiaRich}
        href="/addiktologia"
      />

      <Tile title={data.Arak} text={data.ArakRich} href="/arak" />

      <Tile title={data.Hipnozis} text={data.HipnozisRich} href="/hipnozis" />
    </div>
  );
};

export default HomeTiles;
