import * as React from "react";
import { useSpring, animated } from "@react-spring/web";

const CheckoutExperience = (props) => {
  const svgRef = React.useRef();
  const [inView, setInView] = React.useState(false);
  const [pathComplete, setPathComplete] = React.useState(false);

  // Set up Intersection Observer to trigger when SVG is in view
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (svgRef.current) observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, []);

  // React Spring animation for the path
  const clipPathAnimation = useSpring({
    from: { clipPath: "inset(100% 0 0 0)" }, // Fully hidden (clip starts at 100%)
    to: { clipPath: inView ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)" }, // Reveal from bottom to top
    config: { duration: 800 },
    onStart: () => {
      setPathComplete(false);
    },
    onRest: () => setPathComplete(true),
  });

  const { clipPathY } = useSpring({
    clipPathY: pathComplete ? 0 : 100, // Start at bottom (100%) and animate to top (0%)
    from: { clipPathY: 100 },
    config: { duration: 2000 },
  });

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 336 242"
      {...props}>
      <path
        fill="#fff"
        d="M0 16C0 7.163 7.163 0 16 0h320v242H16c-8.837 0-16-7.163-16-16V16Z"
      />
      <g clipPath="url(#clip0_298_1106)">
        <g clipPath="url(#clip1_298_1106)">
          <path
            fill="url(#paint0_linear_298_1106)"
            fillRule="evenodd"
            d="M45.992 33H336v-1.582H45.992V33Zm0 46H336v-1H45.992v1ZM336 127.73H45.992v-1H336v1ZM45.992 223.043H336v-1H45.992v1ZM336 254.816H45.992v-1H336v1ZM45.992 286.59H336v-1H45.992v1ZM336 318.355H45.992v-1H336v1ZM45.992 350.129H336v-1H45.992v1ZM336 381.902H45.992v-1H336v1ZM45.992 413.676H336v-1H45.992v1ZM336 445.441H45.992v-1H336v1ZM45.992 477.215H336v-1H45.992v1Zm0 31.773H336v-1H45.992v1ZM336 176H45.992v-1H336v1ZM45.992.645H336v-1H45.992v1ZM336-31.13H45.992v-1H336v1ZM45.992-62.902H336v-1H45.992v1ZM336-94.676H45.992v-1H336v1ZM45.992-126.44H336v-1H45.992v1ZM336-158.215H45.992v-1H336v1ZM45.992-189.988H336v-1H45.992v1Z"
            clipRule="evenodd"
          />
        </g>
        <g
          fill="#687082"
          clipPath="url(#clip2_298_1106)"
          fontFamily="Inter"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em">
          <text
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}>
            <tspan x={15} y={223.864}>
              {"0"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}>
            <tspan x={15} y={130.864}>
              {"50"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}>
            <tspan x={15} y={179.864}>
              {"25"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}>
            <tspan x={15} y={81.864}>
              {"75"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}>
            <tspan x={15} y={36.864}>
              {"100"}
            </tspan>
          </text>
        </g>
      </g>
      <g clipPath="url(#clip3_298_1106)">
        <animated.path
          style={clipPathAnimation}
          stroke="#67CE67"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M47.523 135.5c36.238 2.636 54.014-35.416 92.274-28.53 38.259 6.886 36.22-17.763 81.867 3.53C273.023 126 290.854 84.886 336 78"
        />
        <animated.path
          style={clipPathAnimation}
          fill="url(#paint1_linear_298_1106)"
          fillOpacity={0.2}
          d="M139.797 106.97c-38.259-6.886-57.56 31.166-93.797 28.53V263h290V78c-45.146 6.886-62.977 48-114.336 32.5-45.646-21.293-43.608 3.356-81.867-3.53Z"
        />
        <ellipse
          cx={303.496}
          cy={46}
          fill="#67CE67"
          stroke="#fff"
          strokeWidth={2}
          rx={4.063}
          ry={4}
        />
        <g filter="url(#filter0_f_298_1106)">
          <rect
            width={116}
            height={118}
            x={171.446}
            y={37}
            fill="#F4F5F6"
            rx={16}
          />
        </g>
        <g filter="url(#filter1_d_298_1106)">
          <rect width={114} height={108} x={171.5} y={41} fill="#fff" rx={12} />
          <path
            fill="#F4F5F6"
            d="M263 95c0 18.778-15.222 34-34 34s-34-15.222-34-34 15.222-34 34-34 34 15.222 34 34Zm-61.2 0c0 15.022 12.178 27.2 27.2 27.2 15.022 0 27.2-12.178 27.2-27.2 0-15.022-12.178-27.2-27.2-27.2-15.022 0-27.2 12.178-27.2 27.2Z"
          />
          <path
            fill="#67CE67"
            d="M229 64.4c0-1.878 1.526-3.418 3.395-3.23a33.998 33.998 0 0 1 30.5 31.162 33.999 33.999 0 0 1-52.784 30.938 34.003 34.003 0 0 1-10.776-44.883 33.998 33.998 0 0 1 15.983-14.513c1.719-.755 3.646.238 4.226 2.024.58 1.785-.409 3.685-2.109 4.483a27.203 27.203 0 0 0-14.883 30.969 27.198 27.198 0 0 0 47.809 10.489 27.2 27.2 0 0 0-17.97-43.827C230.528 67.778 229 66.278 229 64.4Z"
            clipPath="url(#revealClip)"
          />
          <text
            xmlSpace="preserve"
            fill="#67CE67"
            fontFamily="Gilroy"
            fontSize={15}
            fontWeight="bold"
            letterSpacing="0em"
            style={{
              whiteSpace: "pre",
            }}>
            <tspan x={220.45} y={100.108}>
              {"99"}
            </tspan>
          </text>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_298_1106">
          <path fill="#fff" d="M0 0h360v202H0z" transform="translate(16 26)" />
        </clipPath>
        <clipPath id="clip1_298_1106">
          <path fill="#fff" d="M0 0h290v477H0z" transform="translate(46 32)" />
        </clipPath>
        <clipPath id="clip2_298_1106">
          <path fill="#fff" d="M0 0h430v202H0z" transform="translate(16 26)" />
        </clipPath>
        <clipPath id="clip3_298_1106">
          <path fill="#fff" d="M0 0h290v185H0z" transform="translate(46 35)" />
        </clipPath>
        <linearGradient
          id="paint0_linear_298_1106"
          x1={45.992}
          x2={268.949}
          y1={200.944}
          y2={200.944}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#F0F0F0" />
          <stop offset={1} stopColor="#F0F0F0" stopOpacity={0.4} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_298_1106"
          x1={191.762}
          x2={191.762}
          y1={220}
          y2={41}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#67CE67" stopOpacity={0} />
          <stop offset={1} stopColor="#67CE67" />
        </linearGradient>
        <filter
          id="filter0_f_298_1106"
          width={276}
          height={278}
          x={91.446}
          y={-43}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_298_1106"
            stdDeviation={40}
          />
        </filter>
        <filter
          id="filter1_d_298_1106"
          width={162}
          height={156}
          x={147.5}
          y={41}
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
            radius={8}
            result="effect1_dropShadow_298_1106"
          />
          <feOffset dy={24} />
          <feGaussianBlur stdDeviation={16} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.0705882 0 0 0 0 0.0705882 0 0 0 0 0.0705882 0 0 0 0.05 0" />
          <feBlend
            in2="BackgroundImageFix"
            mode="multiply"
            result="effect1_dropShadow_298_1106"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_298_1106"
            result="shape"
          />
        </filter>
        <clipPath id="revealClip">
          <animated.rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            style={{ transform: clipPathY.to((y) => `translateY(${y}%)`) }}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default CheckoutExperience;
