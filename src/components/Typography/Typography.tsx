import React from "react"
// eslint-disable-next-line import/order
import { TYPOGRAPHY } from "@/constants/typography"

// export interface ITypographyProps {}
//{}: ITypographyProps
const Typography = () => {
  return (
    <>
      <div className="flex flex-col bg-[#3E3E3F] p-16">
        <h2 className="font-inter text-[48px] font-bold not-italic leading-[64px] tracking-[-0.96px] text-[#ffffff]">
          Typography
        </h2>
        <div className="flex grow flex-col py-16">
          <ul className="text-[#ffffff]">
            {Object.entries(TYPOGRAPHY).map((item) => {
              const itemId = item[0]
              const { title, description, useCase } = item[1]
              return (
                <>
                  <li key={itemId} className="flex h-[40px] flex-row items-center gap-x-4 py-8">
                    <div className={`w-[350px] flex-none ${itemId}`}>{title}</div>
                    <div className="tracker-[-0.06px] w-[213px] flex-none items-center font-inter text-[12px] font-normal not-italic leading-normal">
                      {description}
                    </div>
                    <div className="tracker-[-0.06px] grow font-inter text-[12px] font-normal not-italic leading-normal">
                      {useCase}
                    </div>
                  </li>
                </>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default React.memo(Typography)
