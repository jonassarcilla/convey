import React from "react"

// export interface IColorProps {}
// {}: IColorProps

const Color = () => {
  return (
    <>
      <div className="flex h-[100vh] flex-row gap-16 bg-[#3E3E3F] p-16">
        <div className="flex flex-col gap-8">
          <div className="h-[128px] w-[128px] bg-base-01" />
          <div className="flex flex-col gap-4">
            <h3 className="text-[24px] font-[700] leading-8 tracking-[-0.12px] text-[#ffffff] opacity-80">Base 01</h3>
            <p className="text-[20px] font-[700] leading-[32px] tracking-[-0.1px] text-[#ffffff] opacity-80">FFFFFF</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="h-[128px] w-[128px] bg-base-02" />
          <div className="flex flex-col gap-4">
            <h3 className="text-[24px] font-[700] leading-8 tracking-[-0.12px] text-[#ffffff] opacity-80">Base 02</h3>
            <p className="text-[20px] font-[700] leading-[32px] tracking-[-0.1px] text-[#ffffff] opacity-80">F0F0F0</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(Color)
