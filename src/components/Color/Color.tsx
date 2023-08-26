import React from "react"
// eslint-disable-next-line import/order
import { ACCENTS, BASECOLOR } from "@/constants/colors"
import useColor from "./Color.hooks"

// export interface IColorProps {}
// {}: IColorProps

interface IColorItemProps {
  category: string
  colorKey: string
  colorValue: string
}
const ColorItem = ({ category, colorKey, colorValue }: IColorItemProps) => {
  const { colorItemRef, colorHex } = useColor(colorValue)

  return (
    <div className="flex flex-col gap-8">
      <div
        ref={colorItemRef}
        className={`h-[128px] w-[128px]`}
        style={{
          backgroundColor: colorValue,
        }}
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-[24px] font-[700] capitalize leading-8 tracking-[-0.12px] text-[#ffffff] opacity-80">
          {category} {colorKey}
        </h3>
        <p className="text-[20px] font-[700] uppercase leading-[32px] tracking-[-0.1px] text-[#ffffff] opacity-80">
          {colorHex}
        </p>
      </div>
    </div>
  )
}

const Color = () => {
  return (
    <>
      {Object.entries(BASECOLOR).map((item) => {
        const category = item[0]
        const colorPalletes = item[1]
        return (
          <>
            <div className="flex flex-col bg-[#3E3E3F] p-16">
              <h3 className="text-[24px] capitalize text-[#fff]">{category}</h3>
              <div className="grid-cols grid h-full justify-items-center gap-16 bg-[#3E3E3F] p-16 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10">
                {Object.entries(colorPalletes)
                  .sort()
                  .map(([key, value]: [string, string]) => {
                    if (key === "DEFAULT") return <></>
                    return <ColorItem category={category} key={key} colorKey={key} colorValue={value} />
                  })}
              </div>
            </div>
          </>
        )
      })}
      {Object.entries(ACCENTS).map((item) => {
        const category = item[0]
        const colorPalletes = item[1]
        return (
          <>
            <div className="flex flex-col bg-[#3E3E3F] p-16">
              <h3 className="text-[24px] capitalize text-[#fff]">{category}</h3>
              <div className="grid-cols grid h-full justify-items-center gap-16 bg-[#3E3E3F] p-16 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10">
                {Object.entries(colorPalletes)
                  .sort()
                  .map(([key, value]: [string, string]) => {
                    if (key === "DEFAULT") return <></>
                    return <ColorItem category={category} key={key} colorKey={key} colorValue={value} />
                  })}
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}

export default React.memo(Color)
