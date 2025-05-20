import { Plant } from "types";
import {PlantHeading} from "./PlantHeading"

export const PlantInfoSection = ({plant}:{plant: Plant}) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col flex-1">
        <div className="block mb-8 md:hidden">
        <PlantHeading plant={plant}/>
        </div>
        <img src={plant.images[0].src} />
        <div>
        Todo
        </div>
      </div>
      <div className="flex flex-col flex-1 md:px-8">
       <div className="hidden md:block">
       <PlantHeading plant={plant}/>
       </div>
      <p className="mt-4 leading-relaxed text-slate-600">
        {plant.description}
      </p>
      </div>
    </div>
  )
}