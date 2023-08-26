import React from "react"
// eslint-disable-next-line import/order
import { CODICONS } from "@/constants/icons"

// export interface IIconProps {
// }
// {}: IIconProps

const Icon = () => {
  return (
    <>
      <h2 className="px-16 pt-16 font-inter text-[48px] font-bold not-italic leading-[64px] tracking-[-0.96px]">
        Codicons
      </h2>
      <div className="grid grid-cols-12 gap-3 p-16">
        {CODICONS.sort().map((icon: string) => {
          return (
            <>
              <div className="flex flex-col">
                <div className={`codicon codicon-${icon} !text-[48px]`} />
                <label className="py-3 text-center">{icon}</label>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default React.memo(Icon)
