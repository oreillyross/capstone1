import clsx from "clsx";
import { Plant } from "types";

import { POT_COLORS } from "utils";

// TODO type setImageIdx correctly
export const PlantPurchaseOptions = ({
  plant,
  imageIdx,
  setImageIdx,
}: {
  plant: Plant;
  imageIdx: number;
  setImageIdx: any;
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex my-10 text-emerald-600">
        <i className="mr-4 text-2xl fa-solid fa-brush"></i>
        <div className="text-2xl">Pot Options</div>
      </div>
      <div>
        <div className="flex">
          {plant.images.map((plantImg, idx) => (
            <div
              key={plantImg.pot_color}
              className="flex flex-col items-center mx-2"
              onMouseEnter={() => setImageIdx(idx)}
            >
              <div
                className={clsx(
                  "w-10 h-10 rounded-full",
                  POT_COLORS[plantImg.pot_color],
                  imageIdx === idx &&
                    "outline outline-offset-2 outline-slate-500",
                )}
              ></div>
              <div
                className={clsx(
                  "mt-1",
                  imageIdx === idx ? "text-slate-700" : "text-slate-500",
                )}
              >
                {plantImg.pot_color}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
