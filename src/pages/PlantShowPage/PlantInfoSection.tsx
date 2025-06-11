import { Plant } from "types";
import {useState} from "react"
import {PlantHeading} from "./PlantHeading"
import {BenefitBox} from "./BenefitBox"
import { PlantPurchaseOptions } from "./PlantPurchaseOptions";

export const PlantInfoSection = ({plant}:{plant: Plant}) => {
  const [imageIdx, setImageIdx] = useState(0)
  
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col flex-1">
        <div className="block mb-8 md:hidden">
        <PlantHeading plant={plant}/>
        </div>
        <img src={plant.images[imageIdx].src} />
      
      </div>
      <div className="flex flex-col flex-1 md:px-8">
       <div className="hidden md:block">
       <PlantHeading plant={plant}/>
       </div>
      <p className="mt-4 leading-relaxed text-slate-600">
        {plant.description}
      </p>
       <div className="flex mt-4">
        <BenefitBox
          icon="far fa-check-circle"
          title="Guaranteed Healthy"
          description="Guaranteed to arrive healthy or your money back"
        />
         <div className="bg-slate-200 w-px mx-2 "></div>
        <BenefitBox
          icon="fa-solid fa-truck-fast"
          title="Free Shipping"
          description="Get free ground shipping on orders over $50 or more"
        />
       </div>
        <PlantPurchaseOptions plant={plant} imageIdx={imageIdx} setImageIdx={setImageIdx}/>
      </div>
    </div>
  )
}