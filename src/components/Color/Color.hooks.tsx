import { useEffect, useRef, useState } from "react"

const useColor = (colorValue: string) => {
  const colorItemRef = useRef<HTMLDivElement | null>(null)
  const [colorHex, setColorHex] = useState<string>("")

  useEffect(() => {
    if (!colorItemRef.current) return
    const styles = getComputedStyle(colorItemRef.current)

    const regExp = /\(([^)]+)\)/
    const matches = regExp.exec(colorValue) || []
    const extractColorHex = styles.getPropertyValue(matches[1])
    setColorHex(extractColorHex.replace("#", ""))
  }, [colorItemRef, colorValue])

  return { colorItemRef, colorHex }
}

export default useColor
