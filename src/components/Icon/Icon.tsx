import React from "react"
// eslint-disable-next-line import/order
import { CODICONS, SETI_ICONS } from "@/constants/icons"

// export interface IIconProps {
// }
// {}: IIconProps

const Icon = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="px-16 pt-16 font-inter text-[48px] font-bold not-italic leading-[64px] tracking-[-0.96px]">
          Codicons
        </h2>
        <div className="grid grid-cols-10 gap-3 p-16">
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
      </div>
      <div className="flex flex-col">
        <h2 className="px-16 pt-16 font-inter text-[48px] font-bold not-italic leading-[64px] tracking-[-0.96px]">
          Seti Icons
        </h2>
        <div className="grid grid-cols-10 gap-3 p-16">
          {Object.entries(SETI_ICONS).map((icon) => {
            const [key, value] = icon
            const iconKey = Object.entries(value)[0][0]

            return (
              <>
                <div key={`${iconKey}-${key}`} className="flex flex-col">
                  <div className={`seti-icon seti-icon-${iconKey} !text-[48px]`} />
                  <label className="py-3 text-center">{iconKey}</label>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default React.memo(Icon)
