import { ReactNode } from "react";
import { ColorVariant } from "@/types";


type Props = {
  bgColors: ColorVariant[]
  children: ReactNode
}

export const Card = ({ bgColors, children}: Props) => (
  <div
    className="relative flex h-2/3 w-full flex-col items-center justify-center overflow-hidden rounded-t-2xl"
    style={{
      background: `linear-gradient(0deg, #fafafa, ${bgColors[0].light})`,
    }}
  >
    {children}
  </div>
)
