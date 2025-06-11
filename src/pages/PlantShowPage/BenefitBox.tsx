import { BenefitBoxProps } from "types"
import clsx from "clsx"

export const BenefitBox = ({icon, title, description}: BenefitBoxProps) => {
  return (
    <div className="flex flex-col flex-1 items-center px-2 py-4">
    <i className={clsx("text-emerald-500 text-3xl",icon)}></i>
      <div className="text-slate-800">{title}</div>
      <div className="text-slate-500 text-md text-center">{description}</div>
    </div>
  )
} 