import * as React from "react";
const SVGComponent = (props) => (
  <svg width={400} height={300} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect
      x={10}
      y={10}
      width={380}
      height={280}
      rx={20}
      ry={20}
      fill="#FFFFFF"
      stroke="#E5E7EB"
      strokeWidth={1}
    />
    <image
      x={30}
      y={30}
      width={60}
      height={60}
      href="https://example.com/product-image.png"
      clipPath="url(#clip)"
    />
    <defs>
      <clipPath id="clip">
        <rect x={30} y={30} width={60} height={60} rx={10} ry={10} />
      </clipPath>
    </defs>
    <text
      x={110}
      y={50}
      fontSize={16}
      fontFamily="Inter"
      fontWeight="bold"
      fill="#111827">
      {"Air Force 1 Low EWP"}
    </text>
    <text x={110} y={70} fontSize={12} fontFamily="Inter" fill="#6B7280">
      {"3 colours"}
    </text>
    <text x={110} y={90} fontSize={14} fontFamily="Inter" fill="#111827">
      {"$280.00 - $399.00"}
    </text>
    <rect
      x={320}
      y={30}
      width={60}
      height={30}
      rx={15}
      ry={15}
      fill="#F3F4F6"
      stroke="#34D399"
    />
    <text
      x={338}
      y={50}
      fontSize={12}
      fontFamily="Inter"
      fontWeight="bold"
      fill="#10B981">
      {"Push"}
    </text>
    <text x={30} y={120} fontSize={12} fontFamily="Inter" fill="#6B7280">
      {"VARIANT"}
    </text>
    <text x={100} y={120} fontSize={12} fontFamily="Inter" fill="#6B7280">
      {"SIZE"}
    </text>
    <text x={160} y={120} fontSize={12} fontFamily="Inter" fill="#6B7280">
      {"COLOR"}
    </text>
    <text x={220} y={120} fontSize={12} fontFamily="Inter" fill="#6B7280">
      {"PRICE"}
    </text>
    <text x={280} y={120} fontSize={12} fontFamily="Inter" fill="#6B7280">
      {"STOCK"}
    </text>
    <text x={340} y={120} fontSize={12} fontFamily="Inter" fill="#6B7280">
      {"ACTIONS"}
    </text>
    <text x={30} y={150} fontSize={12} fontFamily="Inter" fill="#111827">
      {"X"}
    </text>
    <text x={100} y={150} fontSize={12} fontFamily="Inter" fill="#111827">
      {"Red"}
    </text>
    <text x={160} y={150} fontSize={12} fontFamily="Inter" fill="#111827">
      {"$280.00"}
    </text>
    <text x={220} y={150} fontSize={12} fontFamily="Inter" fill="#111827">
      {"129"}
    </text>
    <rect x={340} y={140} width={20} height={20} fill="#F3F4F6" />
  </svg>
);
export default SVGComponent;
