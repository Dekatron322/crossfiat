import React from "react"

export interface IconProps {
  className?: string
}

const UsdtIcon: React.FC<IconProps> = ({ className = "" }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="32" height="32" fill="url(#pattern0_573_1199)" />
      <defs>
        <pattern id="pattern0_573_1199" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_573_1199" transform="scale(0.015625)" />
        </pattern>
        <image
          id="image0_573_1199"
          width="64"
          height="64"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default UsdtIcon
