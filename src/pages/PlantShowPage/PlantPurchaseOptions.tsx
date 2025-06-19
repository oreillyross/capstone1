import clsx from "clsx";
import { Plant } from "types";
import {useState} from "react"

import { POT_COLORS } from "utils";
import { addPlantToCart } from "services/cart";

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
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
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
    <div className="flex">
      <div className="mt-2 rounded-full flex text-xl text-slate-500 items-center border-2 border-slate-300 px-3 py-4">
        <button onClick={() => {
          if (quantity > 1) setQuantity(quantity - 1)
        }}>
        <i className="fa-solid fa-minus"></i>
        </button>
        <div className="mx-4 text-emerald-700 text-2xl">{quantity}</div>
        <button onClick={() => {
        setQuantity(quantity + 1)
        }}>
        <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <button 
        onClick={async () => {
          setIsLoading(true)
          const response = await addPlantToCart({
            id: plant.id,
            quantity,
            pot_color: plant.images[imageIdx].pot_color
          })
          setIsLoading(false)
          console.log(response.status)
        }}
        className="rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xl flex flex-1 ml-2 justify-center items-center">
        {
         isLoading ? <i className="mr-2 fa-solid fa-spinner animate-spin text-2xl"></i> : 
        <i className="mr-2 fa-solid fa-cart-plus text-2xl"></i>
        }
        add to cart
      </button>
    </div>
    </>
  );
};
