import * as React from "react";
import { useSpring, animated } from "@react-spring/web";

const HeroBannerTwo = () => {
  const elementAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" }, // Start from below the viewport
    to: { opacity: 1, transform: "translateY(0)" }, // Slide up after path animation
    config: { duration: 1000 },
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      viewBox="0 0 1104 640">
      <defs>
        <path id="v" fill="#fff" d="M0 0h590v24H0z" />
        <path id="w" fill="#fff" d="M0 0h14v14H0z" />
      </defs>
      <g clipPath="url(#a)">
        <path
          fill="#F7F7F7"
          d="M0 20C0 8.954 8.954 0 20 0h1064c11.05 0 20 8.954 20 20v620H0V20Z"
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={20}
          fontWeight={600}
          letterSpacing="-.02em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={251} y={97.273}>
            {"Editing"}
          </tspan>
        </text>
        <path fill="#fff" d="M0 50h192v590H0z" />
        <path
          fill="#687082"
          fillRule="evenodd"
          d="m37.993 85.476.007-.004.007.004 3.711 2.227 1.282.772v9.192c0 .494-.002.764-.017.959l-.002.022-.022.002c-.195.015-.465.017-.96.017h-8c-.493 0-.764-.002-.958-.017l-.022-.002-.002-.022a13.71 13.71 0 0 1-.017-.96v-9.191l1.277-.77 3.716-2.229Zm-4.575.801-4.18 2.508a.833.833 0 0 0 .857 1.43l1.238-.743v8.195c0 .933 0 1.4.182 1.756.16.314.415.569.728.729.357.181.823.181 1.757.181h8c.933 0 1.4 0 1.756-.181.314-.16.569-.415.729-.729.181-.356.181-.823.181-1.756v-8.195l1.238.743a.833.833 0 0 0 .858-1.43l-4.185-2.51-3.201-1.93c-.233-.14-.411-.247-.563-.328a1.652 1.652 0 0 0-.107-.055 1.54 1.54 0 0 0-.348-.127 1.667 1.667 0 0 0-.717 0 1.532 1.532 0 0 0-.348.128 1.175 1.175 0 0 0-.106.054c-.151.08-.33.188-.563.329l-3.206 1.931Z"
          clipRule="evenodd"
        />
        <path
          fill="#687082"
          fillRule="evenodd"
          d="M38.833 98.667v-3.334a.833.833 0 1 0-1.666 0v3.334h1.666ZM38 92.833a2.5 2.5 0 0 0-2.5 2.5v5h5v-5a2.5 2.5 0 0 0-2.5-2.5Z"
          clipRule="evenodd"
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={600}
          letterSpacing="-.01em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={60} y={96.727}>
            {"Dashboard"}
          </tspan>
        </text>
        <g filter="url(#b)">
          <rect width={160} height={44} x={16} y={122} fill="#F7F7F7" rx={8} />
          <path
            fill="#008060"
            d="M29.667 142.333a2.5 2.5 0 0 1 2.5-2.5h11.667a2.5 2.5 0 0 1 2.5 2.5v7.5a2.5 2.5 0 0 1-2.5 2.5H32.167a2.5 2.5 0 0 1-2.5-2.5v-7.5Z"
          />
          <path
            fill="#008060"
            fillRule="evenodd"
            d="M35.5 137.333a.834.834 0 0 0-.833.834v2.5a.833.833 0 0 1-1.667 0v-2.5a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v2.5a.833.833 0 0 1-1.667 0v-2.5a.834.834 0 0 0-.833-.834h-5Z"
            clipRule="evenodd"
          />
          <text
            xmlSpace="preserve"
            fill="#008060"
            fontFamily="Inter"
            fontSize={13}
            fontWeight={600}
            letterSpacing="-.01em"
            style={{ whiteSpace: "pre" }}>
            <tspan x={60} y={148.727}>
              {"Products"}
            </tspan>
          </text>
        </g>
        <path
          fill="#687082"
          d="M33.833 188.5a3.333 3.333 0 0 0-3.333 3.333v10a3.334 3.334 0 0 0 3.333 3.334h8.334a3.334 3.334 0 0 0 3.333-3.334v-10a3.333 3.333 0 0 0-3.333-3.333v1.667c.92 0 1.666.746 1.666 1.666v10c0 .921-.746 1.667-1.666 1.667h-8.334c-.92 0-1.666-.746-1.666-1.667v-10c0-.92.746-1.666 1.666-1.666V188.5Z"
        />
        <path
          fill="#687082"
          d="M34.666 195.167a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667ZM38 193.5a.833.833 0 1 0 0 1.667h3.333a.833.833 0 0 0 0-1.667H38Zm0 3.333a.833.833 0 0 0 0 1.667h3.333a.833.833 0 1 0 0-1.667H38ZM37.166 201c0-.46.373-.833.834-.833h1.666a.833.833 0 1 1 0 1.666H38a.833.833 0 0 1-.834-.833Zm-1.666-3.333a.833.833 0 1 1-1.667 0 .833.833 0 0 1 1.667 0Zm-.834 4.166a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Z"
        />
        <path
          fill="#687082"
          fillRule="evenodd"
          d="M40.5 188.5h-5a.833.833 0 1 0 0 1.667h5a.834.834 0 0 0 0-1.667Zm-5-1.667a2.5 2.5 0 0 0 0 5h5a2.5 2.5 0 1 0 0-5h-5Z"
          clipRule="evenodd"
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={600}
          letterSpacing="-.01em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={60} y={200.727}>
            {"Categories"}
          </tspan>
        </text>
        <path
          fill="#687082"
          fillRule="evenodd"
          d="M43.833 246.333H32.167V253c0 .921.746 1.667 1.666 1.667h8.334c.92 0 1.666-.746 1.666-1.667v-6.667ZM30.5 244.667V253a3.333 3.333 0 0 0 3.333 3.333h8.334A3.333 3.333 0 0 0 45.5 253v-8.333h-15Z"
          clipRule="evenodd"
        />
        <path
          fill="#687082"
          d="M35.5 248.833c0-.46.373-.833.833-.833h3.334a.833.833 0 1 1 0 1.667h-3.334a.833.833 0 0 1-.833-.834Z"
        />
        <path
          fill="#687082"
          fillRule="evenodd"
          d="M43.834 241.333H32.167a.834.834 0 0 0-.833.834v1.666c0 .461.373.834.833.834h11.667c.46 0 .833-.373.833-.834v-1.666a.834.834 0 0 0-.833-.834Zm-11.667-1.666a2.5 2.5 0 0 0-2.5 2.5v1.666a2.5 2.5 0 0 0 2.5 2.5h11.667a2.5 2.5 0 0 0 2.5-2.5v-1.666a2.5 2.5 0 0 0-2.5-2.5H32.167Z"
          clipRule="evenodd"
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={600}
          letterSpacing="-.01em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={60} y={252.727}>
            {"Collections"}
          </tspan>
        </text>
        <path
          fill="#687082"
          fillRule="evenodd"
          d="M42.786 296.667h-9.57c-.962 0-1.724.811-1.664 1.77l.416 6.667a1.667 1.667 0 0 0 1.664 1.563h8.737c.88 0 1.608-.685 1.663-1.563l.417-6.667a1.666 1.666 0 0 0-1.663-1.77ZM33.216 295a3.333 3.333 0 0 0-3.328 3.541l.417 6.667a3.333 3.333 0 0 0 3.327 3.125h8.737a3.333 3.333 0 0 0 3.327-3.125l.416-6.667A3.333 3.333 0 0 0 42.786 295h-9.57Z"
          clipRule="evenodd"
        />
        <path
          fill="#687082"
          fillRule="evenodd"
          d="M33.833 295.833a4.166 4.166 0 0 1 8.333 0v1.667a.833.833 0 0 1-1.666 0v-1.667a2.5 2.5 0 0 0-5 0v1.667a.833.833 0 0 1-1.667 0v-1.667Z"
          clipRule="evenodd"
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={600}
          letterSpacing="-.01em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={60} y={304.727}>
            {"Orders"}
          </tspan>
        </text>
        <path
          fill="#687082"
          fillRule="evenodd"
          d="M38 352.833a5.834 5.834 0 0 0-5.833 5.834v1.666a.833.833 0 1 1-1.667 0v-1.666a7.5 7.5 0 0 1 15 0v1.666a.833.833 0 1 1-1.667 0v-1.666A5.834 5.834 0 0 0 38 352.833Z"
          clipRule="evenodd"
        />
        <path
          fill="#687082"
          fillRule="evenodd"
          d="M38 351.167a3.334 3.334 0 1 0-.001-6.668 3.334 3.334 0 0 0 .001 6.668Zm0 1.666a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
          clipRule="evenodd"
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={600}
          letterSpacing="-.01em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={60} y={356.727}>
            {"Customers"}
          </tspan>
        </text>
        <path
          fill="#687082"
          fillRule="evenodd"
          d="M36.379 395.954a2.498 2.498 0 0 1 3.243 0l1.06.903a.833.833 0 0 0 .473.196l1.388.111a2.499 2.499 0 0 1 2.293 2.293l.111 1.388c.014.174.083.34.196.474l.903 1.059a2.501 2.501 0 0 1 0 3.244l-.903 1.059a.836.836 0 0 0-.196.474l-.11 1.388a2.499 2.499 0 0 1-2.294 2.293l-1.388.111a.838.838 0 0 0-.474.196l-1.06.903a2.498 2.498 0 0 1-3.242 0l-1.06-.903a.838.838 0 0 0-.474-.196l-1.388-.111a2.499 2.499 0 0 1-2.293-2.293l-.111-1.388a.836.836 0 0 0-.196-.474l-.903-1.059a2.501 2.501 0 0 1 0-3.244l.903-1.059a.836.836 0 0 0 .196-.474l.11-1.388a2.499 2.499 0 0 1 2.294-2.293l1.388-.111a.838.838 0 0 0 .474-.196l1.06-.903Zm2.162 1.268a.834.834 0 0 0-1.081 0l-1.06.903c-.4.341-.898.548-1.423.589l-1.387.111a.834.834 0 0 0-.765.765l-.11 1.387a2.497 2.497 0 0 1-.59 1.423l-.903 1.059a.835.835 0 0 0 0 1.082l.903 1.059c.341.4.548.898.59 1.423l.11 1.387a.834.834 0 0 0 .765.765l1.387.111a2.495 2.495 0 0 1 1.423.589l1.06.903a.834.834 0 0 0 1.08 0l1.06-.903c.4-.341.898-.548 1.423-.589l1.387-.111a.834.834 0 0 0 .765-.765l.11-1.387a2.498 2.498 0 0 1 .59-1.423l.903-1.059a.834.834 0 0 0 0-1.082l-.903-1.059a2.498 2.498 0 0 1-.59-1.423l-.11-1.387a.834.834 0 0 0-.764-.765l-1.388-.111a2.495 2.495 0 0 1-1.423-.589l-1.06-.903Z"
          clipRule="evenodd"
        />
        <path
          fill="#687082"
          d="M37.167 401.917a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm4.166 4.166a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
        />
        <path
          fill="#687082"
          fillRule="evenodd"
          d="M40.617 400.86c.353.295.4.82.106 1.174l-4.166 5a.833.833 0 0 1-1.28-1.067l4.166-5a.833.833 0 0 1 1.174-.107Z"
          clipRule="evenodd"
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={600}
          letterSpacing="-.01em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={60} y={408.727}>
            {"Coupons"}
          </tspan>
        </text>
        <path
          fill="#687082"
          fillRule="evenodd"
          d="M30.5 450.167a3.334 3.334 0 0 1 3.333-3.334h6.953a3.33 3.33 0 0 1 2.357.977l1.38 1.38a3.33 3.33 0 0 1 .977 2.357v10.286a3.334 3.334 0 0 1-3.333 3.334h-8.334a3.334 3.334 0 0 1-3.333-3.334v-11.666Zm13.333 2.5v9.166c0 .921-.746 1.667-1.666 1.667h-8.334c-.92 0-1.666-.746-1.666-1.667v-11.666c0-.921.746-1.667 1.666-1.667h5.834v1.667a2.5 2.5 0 0 0 2.5 2.5h1.666ZM43.741 451a1.666 1.666 0 0 0-.396-.631l-1.38-1.381a1.676 1.676 0 0 0-.632-.396v1.575c0 .46.373.833.834.833h1.574Z"
          clipRule="evenodd"
        />
        <path
          fill="#687082"
          d="M35.5 456a.833.833 0 1 0 0 1.667h5a.833.833 0 0 0 0-1.667h-5Zm0 3.333a.833.833 0 0 0 0 1.667H38a.833.833 0 1 0 0-1.667h-2.5Z"
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={600}
          letterSpacing="-.01em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={60} y={460.727}>
            {"Pages"}
          </tspan>
        </text>
        <path
          fill="#687082"
          d="M34.666 516.333h9.167a2.5 2.5 0 0 0 2.5-2.5V510.5a2.5 2.5 0 0 0-2.5-2.5l.732-.732a2.5 2.5 0 0 0 0-3.536l-2.298-2.298a2.5 2.5 0 0 0-3.535 0l-.732.732v2.357l1.91-1.91a.832.832 0 0 1 1.179 0l2.297 2.298a.833.833 0 0 1 0 1.178L38 511.476v2.357l4.166-4.166h1.667c.46 0 .833.373.833.833v3.333a.833.833 0 0 1-.833.834h-5.976a2.5 2.5 0 0 1-2.357 1.666h-.834Z"
        />
        <path
          fill="#687082"
          fillRule="evenodd"
          d="M35.5 501.333h-3.333a.834.834 0 0 0-.833.834v11.666c0 .461.373.834.833.834H35.5c.46 0 .834-.373.834-.834v-11.666a.834.834 0 0 0-.834-.834Zm-3.333-1.666a2.5 2.5 0 0 0-2.5 2.5v11.666a2.5 2.5 0 0 0 2.5 2.5H35.5a2.5 2.5 0 0 0 2.5-2.5v-11.666a2.5 2.5 0 0 0-2.5-2.5h-3.333Z"
          clipRule="evenodd"
        />
        <path
          fill="#687082"
          d="M34.667 512.167a.833.833 0 1 1-1.667 0 .833.833 0 0 1 1.667 0Z"
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={600}
          letterSpacing="-.01em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={60} y={512.727}>
            {"Widget"}
          </tspan>
        </text>
        <g filter="url(#c)">
          <mask id="d" fill="#fff">
            <path d="M0 0h1104v50H0V0Z" />
          </mask>
          <path fill="#fff" d="M0 0h1104v50H0V0Z" />
          <path fill="#F4F4F4" d="M1104 49H0v2h1104v-2Z" mask="url(#d)" />
          <mask
            id="f"
            width={27}
            height={30}
            x={20}
            y={10}
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}>
            <path
              fill="url(#e)"
              d="M0 0h26.136v30H0z"
              transform="translate(20 10)"
            />
          </mask>
          <g mask="url(#f)">
            <path fill="#008060" d="M6.141-3.859h83.152v77.446H6.141z" />
          </g>
          <text
            xmlSpace="preserve"
            fill="#008060"
            fontFamily="Inter"
            fontSize={12}
            fontWeight="bold"
            letterSpacing=".02em"
            style={{ whiteSpace: "pre" }}>
            <tspan x={52.136} y={36.364}>
              {"EVERSHOP"}
            </tspan>
          </text>
          <rect width={180} height={34} x={846} y={8} fill="#F5F5F5" rx={8} />
          <path
            fill="#9A9FA5"
            fillRule="evenodd"
            d="M871 24.167a5.833 5.833 0 1 1-11.666 0 5.833 5.833 0 1 1 11.666 0Zm.027 4.681a7.5 7.5 0 1 0-1.179 1.179l2.23 2.229a.833.833 0 1 0 1.178-1.178l-2.229-2.23Z"
            clipRule="evenodd"
          />
          <text
            xmlSpace="preserve"
            fill="#9A9FA5"
            fontFamily="Inter"
            fontSize={13}
            fontWeight={500}
            letterSpacing="0em"
            style={{ whiteSpace: "pre" }}>
            <tspan x={880} y={29.727}>
              {"Search"}
            </tspan>
          </text>
          <g clipPath="url(#g)">
            <rect
              width={34}
              height={34}
              x={1046}
              y={8}
              fill="#E6E8EC"
              rx={17}
            />
            <path fill="url(#h)" d="M1046 8h34v34h-34z" />
          </g>
        </g>
        <rect width={192} height={1} y={595} fill="#F4F4F4" rx={0.5} />
        <path
          fill="#687082"
          fillRule="evenodd"
          d="M44.625 613.909a2.49 2.49 0 0 0-.732-1.801 2.49 2.49 0 0 0-1.801-.732 2.48 2.48 0 0 0-1.395.447.153.153 0 0 1-.145.016.152.152 0 0 1-.09-.114 2.486 2.486 0 0 0-.67-1.302 2.495 2.495 0 0 0-1.792-.756 2.49 2.49 0 0 0-1.79.756c-.001 0 0 0 0 0a2.502 2.502 0 0 0-.67 1.302.152.152 0 0 1-.092.114.153.153 0 0 1-.145-.016 2.476 2.476 0 0 0-1.394-.447s.001 0 0 0a2.491 2.491 0 0 0-1.801.732 2.5 2.5 0 0 0-.285 3.195c.03.043.036.097.017.145a.152.152 0 0 1-.115.091 2.505 2.505 0 0 0-1.302.669 2.495 2.495 0 0 0-.756 1.792 2.493 2.493 0 0 0 .756 1.791 2.497 2.497 0 0 0 1.302.67.152.152 0 0 1 .114.091.152.152 0 0 1-.016.145 2.5 2.5 0 0 0-.447 1.394s0-.001 0 0a2.498 2.498 0 0 0 2.533 2.534 2.495 2.495 0 0 0 1.395-.448.153.153 0 0 1 .144-.016c.048.02.082.063.091.114a2.502 2.502 0 0 0 .67 1.302 2.494 2.494 0 0 0 1.791.756 2.49 2.49 0 0 0 1.792-.756c0 .001 0 0 0 0a2.495 2.495 0 0 0 .67-1.302.152.152 0 0 1 .09-.114.153.153 0 0 1 .145.016 2.492 2.492 0 0 0 1.394.448 2.5 2.5 0 0 0 2.534-2.534s0 .001 0 0a2.505 2.505 0 0 0-.447-1.394.152.152 0 0 1-.017-.145.152.152 0 0 1 .114-.091 2.493 2.493 0 0 0 1.302-.669c.467-.454.757-1.09.757-1.792s-.29-1.337-.756-1.791a2.51 2.51 0 0 0-1.303-.67.152.152 0 0 1-.114-.091.152.152 0 0 1 .017-.145 2.501 2.501 0 0 0 .447-1.394Zm-1.91-.623a.834.834 0 0 0-1.064-.096 1.82 1.82 0 0 1-2.83-1.172.835.835 0 0 0-1.641 0 1.82 1.82 0 0 1-2.83 1.172.834.834 0 0 0-1.16 1.16 1.819 1.819 0 0 1-1.172 2.83.834.834 0 0 0 0 1.64 1.817 1.817 0 0 1 1.172 2.83.834.834 0 0 0 1.16 1.16 1.823 1.823 0 0 1 1.737-.189c.59.245.988.771 1.093 1.362a.834.834 0 0 0 1.64 0 1.82 1.82 0 0 1 2.83-1.173.834.834 0 0 0 1.16-1.16 1.817 1.817 0 0 1 1.173-2.83.834.834 0 0 0 0-1.64 1.819 1.819 0 0 1-1.172-2.83.834.834 0 0 0-.097-1.064Z"
          clipRule="evenodd"
        />
        <path
          fill="#687082"
          fillRule="evenodd"
          d="M38 619.667a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333Zm0 1.666a3.333 3.333 0 1 0 .001-6.666 3.333 3.333 0 0 0 0 6.666Z"
          clipRule="evenodd"
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={600}
          letterSpacing="-.01em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={60} y={622.727}>
            {"Setting"}
          </tspan>
        </text>
        <rect width={630} height={204} x={216} y={122} fill="#fff" rx={8} />
        <g clipPath="url(#i)">
          <text
            xmlSpace="preserve"
            fill="#101828"
            fontFamily="Inter"
            fontSize={15}
            fontWeight={600}
            letterSpacing="-.02em"
            style={{ whiteSpace: "pre" }}>
            <tspan x={236} y={155.455}>
              {"Air Force 1 Low EWP"}
            </tspan>
          </text>
          <rect
            width={73.5}
            height={19.5}
            x={386.25}
            y={140.25}
            fill="#ECFDF3"
            rx={9.75}
          />
          <rect
            width={73.5}
            height={19.5}
            x={386.25}
            y={140.25}
            stroke="#A9EFC8"
            strokeWidth={0.5}
            rx={9.75}
          />
          <circle cx={396.5} cy={150} r={2.5} fill="#00764A" />
          <text
            xmlSpace="preserve"
            fill="#00764A"
            fontFamily="Inter"
            fontSize={12}
            fontWeight={500}
            letterSpacing="0em"
            style={{ whiteSpace: "pre" }}>
            <tspan x={403.355} y={154.364}>
              {"Enabled"}
            </tspan>
          </text>
        </g>
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={12}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={236} y={189.364}>
            {"Name"}
          </tspan>
        </text>
        <rect
          width={286}
          height={37}
          x={236.5}
          y={196.5}
          stroke="#E6E8EC"
          rx={11.5}
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={500}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={248} y={219.727}>
            {"Air Force 1 Low EWP"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={12}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={539} y={189.364}>
            {"Category"}
          </tspan>
        </text>
        <rect
          width={286}
          height={37}
          x={539.5}
          y={196.5}
          stroke="#E6E8EC"
          rx={11.5}
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={500}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={551} y={219.727}>
            {"Men"}
          </tspan>
        </text>
        <path
          stroke="#999FA6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="m802 213 4 4 4-4"
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={12}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={236} y={265.364}>
            {"SKU"}
          </tspan>
        </text>
        <rect
          width={185}
          height={37}
          x={236.5}
          y={272.5}
          stroke="#E6E8EC"
          rx={11.5}
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={500}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={248} y={295.727}>
            {"N292_Blue_M"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={12}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={438} y={265.364}>
            {"Price"}
          </tspan>
        </text>
        <rect
          width={185}
          height={37}
          x={438.5}
          y={272.5}
          stroke="#E6E8EC"
          rx={11.5}
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={500}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={450} y={295.727}>
            {"388 USD"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={12}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={640} y={265.364}>
            {"Weight"}
          </tspan>
        </text>
        <rect
          width={185}
          height={37}
          x={640.5}
          y={272.5}
          stroke="#E6E8EC"
          rx={11.5}
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={500}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={652} y={295.727}>
            {"1.2kg"}
          </tspan>
        </text>
        <rect width={630} height={217} x={216} y={334} fill="#fff" rx={8} />
        <g clipPath="url(#j)">
          <text
            xmlSpace="preserve"
            fill="#101828"
            fontFamily="Inter"
            fontSize={15}
            fontWeight={600}
            letterSpacing="-.02em"
            style={{ whiteSpace: "pre" }}>
            <tspan x={236} y={367.455}>
              {"Variant"}
            </tspan>
          </text>
        </g>
        <text
          xmlSpace="preserve"
          fill="#343946"
          fontFamily="Inter"
          fontSize={10}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={236} y={401.636}>
            {"IMAGE"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          fill="#343946"
          fontFamily="Inter"
          fontSize={10}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={322} y={401.636}>
            {"SIZE"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          fill="#343946"
          fontFamily="Inter"
          fontSize={10}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={399} y={401.636}>
            {"COLOR"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          fill="#343946"
          fontFamily="Inter"
          fontSize={10}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={494} y={401.636}>
            {"PRICE"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          fill="#343946"
          fontFamily="Inter"
          fontSize={10}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={601} y={401.636}>
            {"STOCK"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          fill="#343946"
          fontFamily="Inter"
          fontSize={10}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={686} y={401.636}>
            {"STATUS"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          fill="#343946"
          fontFamily="Inter"
          fontSize={10}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={781} y={401.636}>
            {"ACTIONS"}
          </tspan>
        </text>
        <path fill="#E6E8EC" d="M236 414h590v1H236z" />
        <rect width={48} height={48} x={236} y={427} fill="url(#k)" rx={8} />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={500}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={321.797} y={455.727}>
            {"X"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={500}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={398.602} y={455.727}>
            {"Red"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={500}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={494.398} y={455.727}>
            {"$280.00"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={500}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={601.203} y={455.727}>
            {"129"}
          </tspan>
        </text>
        <g clipPath="url(#l)">
          <path
            stroke="#343946"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M818.417 446.333h-2.45c-.98 0-1.47 0-1.844.191-.33.168-.597.436-.765.765-.191.374-.191.864-.191 1.844v4.9c0 .98 0 1.471.191 1.845.168.329.435.597.765.765.374.19.864.19 1.844.19h4.9c.98 0 1.47 0 1.844-.19.33-.168.597-.436.765-.765.191-.374.191-.865.191-1.845v-2.45m-7 1.75h.977c.285 0 .428 0 .562-.032.119-.028.233-.076.337-.14.118-.072.219-.173.421-.374l5.578-5.579a1.238 1.238 0 0 0-1.75-1.75l-5.578 5.579c-.202.201-.303.302-.375.42a1.173 1.173 0 0 0-.14.337c-.032.135-.032.277-.032.563v.976Z"
          />
        </g>
        <rect
          width={61.5}
          height={19.5}
          x={690.25}
          y={441.25}
          fill="#FEF3F1"
          rx={9.75}
        />
        <rect
          width={61.5}
          height={19.5}
          x={690.25}
          y={441.25}
          stroke="#EFADA9"
          strokeWidth={0.5}
          rx={9.75}
        />
        <circle cx={698.5} cy={451} r={2.5} fill="#C60000" />
        <text
          xmlSpace="preserve"
          fill="#C60000"
          fontFamily="Inter"
          fontSize={11}
          fontWeight={500}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={705.041} y={455}>
            {"Disable"}
          </tspan>
        </text>
        <rect width={48} height={48} x={236} y={487} fill="url(#m)" rx={8} />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={500}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={321.797} y={515.727}>
            {"M"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={500}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={398.602} y={515.727}>
            {"Green"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={500}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={494.398} y={515.727}>
            {"$300.00"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={500}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={601.203} y={515.727}>
            {"282"}
          </tspan>
        </text>
        <g clipPath="url(#n)">
          <path
            stroke="#343946"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M818.417 506.333h-2.45c-.98 0-1.47 0-1.844.191-.33.168-.597.436-.765.765-.191.374-.191.864-.191 1.844v4.9c0 .98 0 1.471.191 1.845.168.329.435.597.765.765.374.19.864.19 1.844.19h4.9c.98 0 1.47 0 1.844-.19.33-.168.597-.436.765-.765.191-.374.191-.865.191-1.845v-2.45m-7 1.75h.977c.285 0 .428 0 .562-.032.119-.028.233-.076.337-.14.118-.072.219-.173.421-.374l5.578-5.579a1.238 1.238 0 0 0-1.75-1.75l-5.578 5.579c-.202.201-.303.302-.375.42a1.173 1.173 0 0 0-.14.337c-.032.135-.032.277-.032.563v.976Z"
          />
        </g>
        <rect width={48} height={48} x={236} y={487} fill="url(#o)" rx={8} />
        <rect
          width={65.5}
          height={19.5}
          x={690.25}
          y={501.25}
          fill="#ECFDF3"
          rx={9.75}
        />
        <rect
          width={65.5}
          height={19.5}
          x={690.25}
          y={501.25}
          stroke="#A9EFC8"
          strokeWidth={0.5}
          rx={9.75}
        />
        <circle cx={698.5} cy={511} r={2.5} fill="#00764A" />
        <text
          xmlSpace="preserve"
          fill="#00764A"
          fontFamily="Inter"
          fontSize={11}
          fontWeight={500}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={705.284} y={515}>
            {"Enabled"}
          </tspan>
        </text>
        <rect width={630} height={128} x={216} y={559} fill="#fff" rx={8} />
        <g clipPath="url(#p)">
          <text
            xmlSpace="preserve"
            fill="#101828"
            fontFamily="Inter"
            fontSize={15}
            fontWeight={600}
            letterSpacing="-.02em"
            style={{ whiteSpace: "pre" }}>
            <tspan x={236} y={592.455}>
              {"Search Engine Optimize"}
            </tspan>
          </text>
        </g>
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={12}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={236} y={626.364}>
            {"URL key"}
          </tspan>
        </text>
        <rect
          width={286}
          height={37}
          x={236.5}
          y={633.5}
          stroke="#E6E8EC"
          rx={11.5}
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={12}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={539} y={626.364}>
            {"Meta keywords"}
          </tspan>
        </text>
        <rect
          width={286}
          height={37}
          x={539.5}
          y={633.5}
          stroke="#E6E8EC"
          rx={11.5}
        />
        <rect width={226} height={170} x={854} y={122} fill="#fff" rx={8} />
        <text
          xmlSpace="preserve"
          fill="#101828"
          fontFamily="Inter"
          fontSize={15}
          fontWeight={600}
          letterSpacing="-.02em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={870} y={151.455}>
            {"Status"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          fill="#101828"
          fontFamily="Inter"
          fontSize={12}
          fontWeight={500}
          letterSpacing={0}
          style={{ whiteSpace: "pre" }}>
          <tspan x={870} y={180.864}>
            {"Status"}
          </tspan>
        </text>
        <rect
          width={15}
          height={15}
          x={870.5}
          y={193.5}
          fill="#EBFFFA"
          rx={7.5}
        />
        <rect
          width={15}
          height={15}
          x={870.5}
          y={193.5}
          stroke="#008060"
          rx={7.5}
        />
        <circle cx={878} cy={201} r={3.2} fill="#008060" />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          letterSpacing={0}
          style={{ whiteSpace: "pre" }}>
          <tspan x={894} y={205.727}>
            {"Enabled"}
          </tspan>
        </text>
        <rect width={15} height={15} x={974.5} y={193.5} fill="#fff" rx={7.5} />
        <rect
          width={15}
          height={15}
          x={974.5}
          y={193.5}
          stroke="#D0D5DD"
          rx={7.5}
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          letterSpacing={0}
          style={{ whiteSpace: "pre" }}>
          <tspan x={997} y={205.727}>
            {"Disabled"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          fill="#101828"
          fontFamily="Inter"
          fontSize={12}
          fontWeight={500}
          letterSpacing={0}
          style={{ whiteSpace: "pre" }}>
          <tspan x={870} y={241.864}>
            {"Visibility"}
          </tspan>
        </text>
        <rect
          width={15}
          height={15}
          x={870.5}
          y={254.5}
          fill="#EBFFFA"
          rx={7.5}
        />
        <rect
          width={15}
          height={15}
          x={870.5}
          y={254.5}
          stroke="#008060"
          rx={7.5}
        />
        <circle cx={878} cy={262} r={3.2} fill="#008060" />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          letterSpacing={0}
          style={{ whiteSpace: "pre" }}>
          <tspan x={894} y={266.727}>
            {"Yes"}
          </tspan>
        </text>
        <rect width={15} height={15} x={974.5} y={254.5} fill="#fff" rx={7.5} />
        <rect
          width={15}
          height={15}
          x={974.5}
          y={254.5}
          stroke="#D0D5DD"
          rx={7.5}
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={13}
          letterSpacing={0}
          style={{ whiteSpace: "pre" }}>
          <tspan x={997} y={266.727}>
            {"No"}
          </tspan>
        </text>
        <g clipPath="url(#q)">
          <rect width={226} height={249} x={854} y={300} fill="#fff" rx={8} />
          <text
            xmlSpace="preserve"
            fill="#101828"
            fontFamily="Inter"
            fontSize={15}
            fontWeight={600}
            letterSpacing="-.02em"
            style={{ whiteSpace: "pre" }}>
            <tspan x={870} y={329.455}>
              {"Inventory"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            fill="#101828"
            fontFamily="Inter"
            fontSize={12}
            fontWeight={500}
            letterSpacing={0}
            style={{ whiteSpace: "pre" }}>
            <tspan x={870} y={358.864}>
              {"Manage stock"}
            </tspan>
          </text>
          <rect
            width={15}
            height={15}
            x={870.5}
            y={371.5}
            fill="#EBFFFA"
            rx={7.5}
          />
          <rect
            width={15}
            height={15}
            x={870.5}
            y={371.5}
            stroke="#008060"
            rx={7.5}
          />
          <circle cx={878} cy={379} r={3.2} fill="#008060" />
          <text
            xmlSpace="preserve"
            fill="#222630"
            fontFamily="Inter"
            fontSize={13}
            letterSpacing={0}
            style={{ whiteSpace: "pre" }}>
            <tspan x={894} y={383.727}>
              {"Yes"}
            </tspan>
          </text>
          <rect
            width={15}
            height={15}
            x={974.5}
            y={371.5}
            fill="#fff"
            rx={7.5}
          />
          <rect
            width={15}
            height={15}
            x={974.5}
            y={371.5}
            stroke="#D0D5DD"
            rx={7.5}
          />
          <text
            xmlSpace="preserve"
            fill="#222630"
            fontFamily="Inter"
            fontSize={13}
            letterSpacing={0}
            style={{ whiteSpace: "pre" }}>
            <tspan x={997} y={383.727}>
              {"No"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            fill="#101828"
            fontFamily="Inter"
            fontSize={12}
            fontWeight={500}
            letterSpacing={0}
            style={{ whiteSpace: "pre" }}>
            <tspan x={870} y={419.864}>
              {"Stock avaiability"}
            </tspan>
          </text>
          <rect
            width={15}
            height={15}
            x={870.5}
            y={432.5}
            fill="#EBFFFA"
            rx={7.5}
          />
          <rect
            width={15}
            height={15}
            x={870.5}
            y={432.5}
            stroke="#008060"
            rx={7.5}
          />
          <circle cx={878} cy={440} r={3.2} fill="#008060" />
          <text
            xmlSpace="preserve"
            fill="#222630"
            fontFamily="Inter"
            fontSize={13}
            letterSpacing={0}
            style={{ whiteSpace: "pre" }}>
            <tspan x={894} y={444.727}>
              {"Yes"}
            </tspan>
          </text>
          <rect
            width={15}
            height={15}
            x={974.5}
            y={432.5}
            fill="#fff"
            rx={7.5}
          />
          <rect
            width={15}
            height={15}
            x={974.5}
            y={432.5}
            stroke="#D0D5DD"
            rx={7.5}
          />
          <text
            xmlSpace="preserve"
            fill="#222630"
            fontFamily="Inter"
            fontSize={13}
            letterSpacing={0}
            style={{ whiteSpace: "pre" }}>
            <tspan x={997} y={444.727}>
              {"No"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            fill="#101828"
            fontFamily="Inter"
            fontSize={12}
            fontWeight={500}
            letterSpacing={0}
            style={{ whiteSpace: "pre" }}>
            <tspan x={870} y={480.864}>
              {"Quantity"}
            </tspan>
          </text>
          <rect
            width={193}
            height={37}
            x={870.5}
            y={491.5}
            stroke="#E6E8EC"
            rx={11.5}
          />
          <text
            xmlSpace="preserve"
            fill="#222630"
            fontFamily="Inter"
            fontSize={12}
            fontWeight={500}
            letterSpacing="0em"
            style={{ whiteSpace: "pre" }}>
            <tspan x={882} y={514.364}>
              {"2432"}
            </tspan>
          </text>
        </g>
        <g clipPath="url(#r)">
          <rect width={226} height={102} x={854} y={557} fill="#fff" rx={8} />
          <text
            xmlSpace="preserve"
            fill="#101828"
            fontFamily="Inter"
            fontSize={15}
            fontWeight={600}
            letterSpacing="-.02em"
            style={{ whiteSpace: "pre" }}>
            <tspan x={870} y={586.455}>
              {"Attribute Group"}
            </tspan>
          </text>
          <rect
            width={193}
            height={37}
            x={870.5}
            y={601.5}
            stroke="#E6E8EC"
            rx={11.5}
          />
          <text
            xmlSpace="preserve"
            fill="#222630"
            fontFamily="Inter"
            fontSize={12}
            fontWeight={500}
            letterSpacing="0em"
            style={{ whiteSpace: "pre" }}>
            <tspan x={882} y={624.364}>
              {"Default"}
            </tspan>
          </text>
        </g>
        <path
          fill="#222630"
          fillRule="evenodd"
          d="M225.909 85.265a1 1 0 0 0-1.413.057l-3.231 3.5a1.001 1.001 0 0 0 0 1.356l3.231 3.5a1 1 0 0 0 1.47-1.356l-1.682-1.822H234a1 1 0 0 0 0-2h-9.716l1.682-1.822a1 1 0 0 0-.057-1.413Z"
          clipRule="evenodd"
        />
        <animated.g filter="url(#s)" style={elementAnimation}>
          <g clipPath="url(#t)">
            <rect width={413} height={246} x={579} y={73} fill="#fff" rx={12} />
            <rect
              width={189}
              height={214}
              x={595}
              y={89}
              fill="#F4F5F6"
              rx={8}
            />
            <rect
              width={164}
              height={164}
              x={608}
              y={107}
              fill="url(#u)"
              rx={12}
            />
            <text
              xmlSpace="preserve"
              fill="#101828"
              fontFamily="Inter"
              fontSize={14}
              fontWeight={600}
              letterSpacing="0em"
              style={{ whiteSpace: "pre" }}>
              <tspan x={808} y={106.091}>
                {"Air Force 1 Low EWP"}
              </tspan>
            </text>
            <text
              xmlSpace="preserve"
              fill="#101828"
              fontFamily="Inter"
              fontSize={12}
              fontWeight={500}
              letterSpacing="0em"
              style={{ whiteSpace: "pre" }}>
              <tspan x={808} y={127.364}>
                {"$300.00"}
              </tspan>
            </text>
            <path fill="#E6E8EC" d="M808 141h168v1H808z" />
            <text
              xmlSpace="preserve"
              fill="#101828"
              fontFamily="Inter"
              fontSize={11}
              fontWeight={500}
              letterSpacing="0em"
              style={{ whiteSpace: "pre" }}>
              <tspan x={808} y={162}>
                {"Choose a Color"}
              </tspan>
            </text>
            <rect
              width={26.8}
              height={26.8}
              x={808.6}
              y={172.6}
              stroke="#008060"
              strokeWidth={1.2}
              rx={13.4}
            />
            <circle cx={822} cy={186} r={11} fill="#A4CFC1" />
            <path
              fill="#E6E8EC"
              d="M808 210h168v1H808zm30 19v16h-1v-16zm33 0v16h-1v-16z"
            />
            <text
              xmlSpace="preserve"
              fill="#101828"
              fontFamily="Inter"
              fontSize={12}
              fontWeight={500}
              letterSpacing="0em"
              style={{ whiteSpace: "pre" }}>
              <tspan x={850} y={241.364}>
                {"2"}
              </tspan>
            </text>
            <rect
              width={91}
              height={31}
              x={808.5}
              y={221.5}
              stroke="#E6E8EC"
              rx={11.5}
            />
            <path
              stroke="#101828"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M819.333 237h9.333M884 232.333v9.334M879.333 237h9.333"
            />
            <rect
              width={168}
              height={38}
              x={808}
              y={265}
              fill="#008060"
              rx={12}
            />
            <text
              xmlSpace="preserve"
              fill="#fff"
              fontFamily="Inter"
              fontSize={12}
              fontWeight={600}
              letterSpacing="0em"
              style={{ whiteSpace: "pre" }}>
              <tspan x={866} y={288.364}>
                {"Buy Now"}
              </tspan>
            </text>
          </g>
        </animated.g>
      </g>
      <defs>
        <clipPath id="a">
          <path
            fill="#fff"
            d="M0 20C0 8.954 8.954 0 20 0h1064c11.05 0 20 8.954 20 20v620H0V20Z"
          />
        </clipPath>
        <clipPath id="g">
          <rect width={34} height={34} x={1046} y={8} fill="#fff" rx={17} />
        </clipPath>
        <clipPath id="i">
          <use xlinkHref="#v" transform="translate(236 138)" />
        </clipPath>
        <clipPath id="j">
          <use xlinkHref="#v" transform="translate(236 350)" />
        </clipPath>
        <clipPath id="l">
          <use xlinkHref="#w" transform="translate(812 444)" />
        </clipPath>
        <clipPath id="n">
          <use xlinkHref="#w" transform="translate(812 504)" />
        </clipPath>
        <clipPath id="p">
          <use xlinkHref="#v" transform="translate(236 575)" />
        </clipPath>
        <clipPath id="q">
          <rect width={226} height={249} x={854} y={300} fill="#fff" rx={8} />
        </clipPath>
        <clipPath id="r">
          <rect width={226} height={102} x={854} y={557} fill="#fff" rx={8} />
        </clipPath>
        <clipPath id="t">
          <rect width={413} height={246} x={579} y={73} fill="#fff" rx={12} />
        </clipPath>
        <pattern
          id="e"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox">
          <use xlinkHref="#x" transform="scale(.00268 .00234)" />
        </pattern>
        <pattern
          id="h"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox">
          <use xlinkHref="#y" transform="scale(.00208)" />
        </pattern>
        <pattern
          id="k"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox">
          <use xlinkHref="#z" transform="translate(0 -.125) scale(.00058)" />
        </pattern>
        <pattern
          id="m"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox">
          <use xlinkHref="#z" transform="translate(0 -.125) scale(.00058)" />
        </pattern>
        <pattern
          id="o"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox">
          <use xlinkHref="#A" transform="scale(.00169)" />
        </pattern>
        <pattern
          id="u"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox">
          <use xlinkHref="#B" transform="scale(.0012)" />
        </pattern>
        <image id="x" width="373" height="428" href="/img/logo.svg" />
        <image id="y" width="480" height="480" href="/img/avatar.webp" />
        <image id="z" width="1728" height="2160" href="/img/shoe-two.webp" />
        <image id="A" width="592" height="592" href="/img/shoe-hero.webp" />
        <image id="B" width="836" height="836" href="/img/shoe-hero.webp" />
        <filter
          id="b"
          width={160}
          height={46}
          x={16}
          y={121}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={0.5} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_4207_729" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={-2} />
          <feGaussianBlur stdDeviation={0.5} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend
            in2="effect1_innerShadow_4207_729"
            mode="multiply"
            result="effect2_innerShadow_4207_729"
          />
        </filter>
        <filter
          id="c"
          width={1104}
          height={50}
          x={0}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={1} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0.956863 0 0 0 0 0.956863 0 0 0 0 0.956863 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_4207_729" />
        </filter>
        <filter
          id="s"
          width={457}
          height={290}
          x={557}
          y={71}
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
            radius={2}
            result="effect1_dropShadow_4207_729"
          />
          <feOffset dy={20} />
          <feGaussianBlur stdDeviation={12} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.0648261 0 0 0 0 0.0733614 0 0 0 0 0.0845229 0 0 0 0.12 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4207_729"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_4207_729"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default HeroBannerTwo;
