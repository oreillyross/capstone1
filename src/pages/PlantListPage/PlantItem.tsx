import React, { useState } from "react"
import type { Plant } from "types"
import clsx from "clsx"

const POT_COLORS = {
  stone: "bg-stone-200",
  slate: "bg-slate-300",
  sky: "bg-sky-700",
  black: "bg-gray-600",
  white: "bg-gray-50",
  amber: "bg-amber-600"
}

function getRandomIdx(array: any) {
  return Math.floor(Math.random() * array.length)
}

export const PlantItem: React.FC<{plant: Plant}> = ({plant}) => {

  const [imgIdx, setImgIdx] = useState(getRandomIdx(plant.images))
  console.log(imgIdx, plant.images)  
  return (
    <div className="mx-2 my-8">
    <img className="w-[240px] h-[220px] rounded-md" src={plant.images[imgIdx].src}/>
    <div className="flex justify-between my-3">
     <div className="text-xl text-emerald-700">
      {plant.name}
     </div> 
      <div className="text-md text-emerald-500">
      $ {plant.price}
      </div>
    </div>
      <div className="flex justify-between">
      <div className="text-sm">
        {plant.images[imgIdx].pot_color} 
      </div>
        <div className="flex">
          {plant.images.map((col, idx) => <div key={idx} className={clsx("w-5 h-5 rounded-full bg-gray-600 mx-[3px]", POT_COLORS[col.pot_color] )} onMouseEnter={() => setImgIdx(idx)}></div>)}
        </div>
      </div>
    </div>
  )
}