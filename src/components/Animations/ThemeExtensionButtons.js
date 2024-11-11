import * as React from "react";
const ThemeExtensionButtons = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 178 34"
    {...props}>
    <g filter="url(#filter0_di_398_754)">
      <rect
        width={85}
        height={32}
        x={1}
        y={1}
        fill="url(#paint0_linear_398_754)"
        rx={12}
      />
      <text
        xmlSpace="preserve"
        fill="#101828"
        fontFamily="Inter"
        fontSize={12}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}>
        <tspan x={13} y={21.364}>
          {"Extentions"}
        </tspan>
      </text>
    </g>
    <g filter="url(#filter1_di_398_754)">
      <rect
        width={71}
        height={32}
        x={106}
        y={1}
        fill="url(#paint1_linear_398_754)"
        rx={12}
      />
      <text
        xmlSpace="preserve"
        fill="#101828"
        fontFamily="Inter"
        fontSize={12}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}>
        <tspan x={118} y={21.364}>
          {"Themes"}
        </tspan>
      </text>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_398_754"
        x1={43.5}
        x2={43.5}
        y1={1}
        y2={33}
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset={0.656} stopColor="#FAFAFA" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_398_754"
        x1={141.5}
        x2={141.5}
        y1={1}
        y2={33}
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset={0.656} stopColor="#FAFAFA" />
      </linearGradient>
      <filter
        id="filter0_di_398_754"
        width={87}
        height={34}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={1}
          result="effect1_dropShadow_398_754"
        />
        <feOffset />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_398_754" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_398_754"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          radius={2}
          result="effect2_innerShadow_398_754"
        />
        <feOffset />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.96 0 0 0 0 0.96 0 0 0 0 0.96 0 0 0 1 0" />
        <feBlend in2="shape" result="effect2_innerShadow_398_754" />
      </filter>
      <filter
        id="filter1_di_398_754"
        width={73}
        height={34}
        x={105}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={1}
          result="effect1_dropShadow_398_754"
        />
        <feOffset />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_398_754" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_398_754"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          radius={2}
          result="effect2_innerShadow_398_754"
        />
        <feOffset />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.96 0 0 0 0 0.96 0 0 0 0 0.96 0 0 0 1 0" />
        <feBlend in2="shape" result="effect2_innerShadow_398_754" />
      </filter>
    </defs>
  </svg>
);
export default ThemeExtensionButtons;
