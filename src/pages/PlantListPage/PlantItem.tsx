import React, { useState } from "react";
import type { Plant } from "types";
import clsx from "clsx";
import { Link } from "react-router";
import {POT_COLORS} from "utils"


export const PlantItem: React.FC<{ plant: Plant }> = ({ plant }) => {
  const [imgIdx, setImgIdx] = useState(0);

  return (
    <div className="mx-5 my-8">
      <Link to={`/plants/${plant.id}`}>
        <img
          className="w-[240px] h-[220px] rounded-md"
          src={plant.images[imgIdx].src}
          alt={plant.name}
        />
      </Link>
      <div className="flex justify-between my-3">
        <div className="text-xl text-emerald-700">{plant.name}</div>
        <div className="text-md text-emerald-500">$ {plant.price}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm">{plant.images[imgIdx].pot_color}</div>
        <div className="flex">
          {plant.images.map((col, idx) => (
            <div
              key={idx}
              className={clsx(
                "w-5 h-5 rounded-full mx-[3px]",
                POT_COLORS[col.pot_color],
                imgIdx === idx && "outline outline-slate-400 outline-offset-2",
              )}
              onMouseEnter={() => setImgIdx(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
