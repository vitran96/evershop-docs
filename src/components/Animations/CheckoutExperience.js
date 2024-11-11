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
  // return (
  //   <svg
  //     ref={svgRef}
  //     xmlns="http://www.w3.org/2000/svg"
  //     xmlnsXlink="http://www.w3.org/1999/xlink"
  //     fill="none"
  //     viewBox="0 0 336 285"
  //     {...props}>
  //     <defs>
  //       <path
  //         id="reuse-0"
  //         fill="#fff"
  //         d="M0 59c0-8.837 7.163-16 16-16h320v242H16c-8.837 0-16-7.163-16-16V59Z"
  //       />
  //     </defs>
  //     <use xlinkHref="#reuse-0" />
  //     <mask
  //       id="mask0_298_1106"
  //       width={799}
  //       height={245}
  //       x={0}
  //       y={42}
  //       maskUnits="userSpaceOnUse"
  //       style={{
  //         maskType: "alpha",
  //       }}>
  //       <path
  //         fill="url(#paint0_linear_298_1106)"
  //         d="M25.6 287c-8.96 0-13.441 0-16.864-1.744a16.003 16.003 0 0 1-6.992-6.992C0 274.841 0 270.361 0 261.4V42h799v219.4c0 8.961 0 13.441-1.744 16.864a16.005 16.005 0 0 1-6.992 6.992C786.841 287 782.361 287 773.4 287H25.6Z"
  //       />
  //     </mask>
  //     <mask
  //       id="mask1_298_1106"
  //       width={800}
  //       height={242}
  //       x={0}
  //       y={43}
  //       maskUnits="userSpaceOnUse"
  //       style={{
  //         maskType: "alpha",
  //       }}>
  //       <path
  //         fill="url(#paint1_linear_298_1106)"
  //         d="M0 68.6c0-8.96 0-13.441 1.744-16.864a16 16 0 0 1 6.992-6.992C12.16 43 16.64 43 25.6 43H800v242H25.6c-8.96 0-13.441 0-16.864-1.744a16.003 16.003 0 0 1-6.992-6.992C0 272.841 0 268.361 0 259.4V68.6Z"
  //       />
  //     </mask>
  //     <g filter="url(#filter0_d_298_1106)" mask="url(#mask1_298_1106)">
  //       <use xlinkHref="#reuse-0" />
  //     </g>
  //     <g clipPath="url(#clip0_298_1106)">
  //       <g clipPath="url(#clip1_298_1106)">
  //         <path
  //           fill="url(#paint2_linear_298_1106)"
  //           fillRule="evenodd"
  //           d="M45.992 76H336v-1.582H45.992V76Zm0 46H336v-1H45.992v1ZM336 170.73H45.992v-1H336v1ZM45.992 266.043H336v-1H45.992v1ZM336 297.816H45.992v-1H336v1ZM45.992 329.59H336v-1H45.992v1ZM336 361.355H45.992v-1H336v1ZM45.992 393.129H336v-1H45.992v1ZM336 424.902H45.992v-1H336v1ZM45.992 456.676H336v-1H45.992v1ZM336 488.441H45.992v-1H336v1ZM45.992 520.215H336v-1H45.992v1Zm0 31.773H336v-1H45.992v1ZM336 219H45.992v-1H336v1ZM45.992 43.644H336v-1H45.992v1ZM336 11.871H45.992v-1H336v1ZM45.992-19.902H336v-1H45.992v1ZM336-51.676H45.992v-1H336v1ZM45.992-83.44H336v-1H45.992v1ZM336-115.215H45.992v-1H336v1ZM45.992-146.988H336v-1H45.992v1Z"
  //           clipRule="evenodd"
  //         />
  //       </g>
  //       <g
  //         fill="#687082"
  //         clipPath="url(#clip2_298_1106)"
  //         fontFamily="Inter"
  //         fontSize={12}
  //         fontWeight={500}
  //         letterSpacing="0em">
  //         <text
  //           xmlSpace="preserve"
  //           style={{
  //             whiteSpace: "pre",
  //           }}>
  //           <tspan x={15} y={266.864}>
  //             {"0"}
  //           </tspan>
  //         </text>
  //         <text
  //           xmlSpace="preserve"
  //           style={{
  //             whiteSpace: "pre",
  //           }}>
  //           <tspan x={15} y={173.864}>
  //             {"50"}
  //           </tspan>
  //         </text>
  //         <text
  //           xmlSpace="preserve"
  //           style={{
  //             whiteSpace: "pre",
  //           }}>
  //           <tspan x={15} y={222.864}>
  //             {"25"}
  //           </tspan>
  //         </text>
  //         <text
  //           xmlSpace="preserve"
  //           style={{
  //             whiteSpace: "pre",
  //           }}>
  //           <tspan x={15} y={124.864}>
  //             {"75"}
  //           </tspan>
  //         </text>
  //         <text
  //           xmlSpace="preserve"
  //           style={{
  //             whiteSpace: "pre",
  //           }}>
  //           <tspan x={15} y={79.864}>
  //             {"100"}
  //           </tspan>
  //         </text>
  //       </g>
  //     </g>
  //     <animated.path
  //       style={clipPathAnimation}
  //       stroke="#67CE67"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       strokeWidth={2}
  //       d="M47.523 135.5c36.238 2.636 54.014-35.416 92.274-28.53 38.259 6.886 36.22-17.763 81.867 3.53C273.023 126 290.854 84.886 336 78"
  //     />
  //     <animated.path
  //       style={clipPathAnimation}
  //       fill="url(#paint3_linear_298_1106)"
  //       fillOpacity={0.2}
  //       d="M139.797 106.97c-38.259-6.886-57.56 31.166-93.797 28.53V263h290V78c-45.146 6.886-62.977 48-114.336 32.5-45.646-21.293-43.608 3.356-81.867-3.53Z"
  //     />
  //     <ellipse
  //       cx={303.496}
  //       cy={89}
  //       fill="#67CE67"
  //       stroke="#fff"
  //       strokeWidth={2}
  //       rx={4.063}
  //       ry={4}
  //     />
  //     <g filter="url(#filter1_f_298_1106)">
  //       <rect
  //         width={116}
  //         height={118}
  //         x={171.446}
  //         y={80}
  //         fill="#F4F5F6"
  //         rx={16}
  //       />
  //     </g>
  //     <g filter="url(#filter2_d_298_1106)">
  //       <rect width={114} height={108} x={171.5} y={84} fill="#fff" rx={12} />
  //       <path
  //         fill="#F4F5F6"
  //         d="M263 138c0 18.778-15.222 34-34 34s-34-15.222-34-34 15.222-34 34-34 34 15.222 34 34Zm-61.2 0c0 15.022 12.178 27.2 27.2 27.2 15.022 0 27.2-12.178 27.2-27.2 0-15.022-12.178-27.2-27.2-27.2-15.022 0-27.2 12.178-27.2 27.2Z"
  //       />
  //       <path
  //         d="M229 107.4c0-1.878 1.526-3.418 3.395-3.23a33.995 33.995 0 0 1 30.5 31.162 33.994 33.994 0 0 1-28.576 36.249 33.997 33.997 0 0 1-38.38-25.644 34.003 34.003 0 0 1 19.379-39.062c1.719-.756 3.646.237 4.226 2.023.58 1.786-.409 3.685-2.109 4.483a27.202 27.202 0 0 0 15.82 51.484 27.2 27.2 0 0 0-.864-53.853c-1.863-.234-3.391-1.734-3.391-3.612Z"
  //         fill="#67CE67"
  //         clipPath="url(#revealClip)" // Apply clip path to the path
  //       />
  //       {/* <animated.path
  //         ref={pathRef}
  //         style={pathSpring}
  //         strokeDasharray={pathLength}
  //         fill="none" // Set fill to none for visibility during drawing
  //         stroke="#67CE67" // Add stroke color (same as fill if desired)
  //         d="M229 107.4c0-1.878 1.526-3.418 3.395-3.23a33.995 33.995 0 0 1 30.5 31.162 33.994 33.994 0 0 1-28.576 36.249 33.997 33.997 0 0 1-38.38-25.644 34.003 34.003 0 0 1 19.379-39.062c1.719-.756 3.646.237 4.226 2.023.58 1.786-.409 3.685-2.109 4.483a27.202 27.202 0 0 0 15.82 51.484 27.2 27.2 0 0 0-.864-53.853c-1.863-.234-3.391-1.734-3.391-3.612Z"
  //       /> */}
  //       <text
  //         xmlSpace="preserve"
  //         fill="#67CE67"
  //         fontFamily="Gilroy"
  //         fontSize={15}
  //         fontWeight="bold"
  //         letterSpacing="0em"
  //         style={{
  //           whiteSpace: "pre",
  //         }}>
  //         <tspan x={220.45} y={143.108}>
  //           {"98"}
  //         </tspan>
  //       </text>
  //     </g>
  //     <defs>
  //       <linearGradient
  //         id="paint0_linear_298_1106"
  //         x1={0}
  //         x2={799}
  //         y1={164.5}
  //         y2={164.5}
  //         gradientUnits="userSpaceOnUse">
  //         <stop offset={0.799} />
  //         <stop offset={1} stopOpacity={0} />
  //       </linearGradient>
  //       <linearGradient
  //         id="paint1_linear_298_1106"
  //         x1={400}
  //         x2={400}
  //         y1={43}
  //         y2={285}
  //         gradientUnits="userSpaceOnUse">
  //         <stop offset={0.515} />
  //         <stop offset={1} stopOpacity={0} />
  //       </linearGradient>
  //       <linearGradient
  //         id="paint2_linear_298_1106"
  //         x1={45.992}
  //         x2={268.949}
  //         y1={243.944}
  //         y2={243.944}
  //         gradientUnits="userSpaceOnUse">
  //         <stop stopColor="#F0F0F0" />
  //         <stop offset={1} stopColor="#F0F0F0" stopOpacity={0.4} />
  //       </linearGradient>
  //       <linearGradient
  //         id="paint3_linear_298_1106"
  //         x1={191.762}
  //         x2={191.762}
  //         y1={263}
  //         y2={84}
  //         gradientUnits="userSpaceOnUse">
  //         <stop stopColor="#67CE67" stopOpacity={0} />
  //         <stop offset={1} stopColor="#67CE67" />
  //       </linearGradient>
  //       <clipPath id="clip0_298_1106">
  //         <path fill="#fff" d="M0 0h360v202H0z" transform="translate(16 69)" />
  //       </clipPath>
  //       <clipPath id="clip1_298_1106">
  //         <path fill="#fff" d="M0 0h290v477H0z" transform="translate(46 75)" />
  //       </clipPath>
  //       <clipPath id="clip2_298_1106">
  //         <path fill="#fff" d="M0 0h430v202H0z" transform="translate(16 69)" />
  //       </clipPath>
  //       <filter
  //         id="filter0_d_298_1106"
  //         width={344}
  //         height={250}
  //         x={-4}
  //         y={43}
  //         colorInterpolationFilters="sRGB"
  //         filterUnits="userSpaceOnUse">
  //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
  //         <feColorMatrix
  //           in="SourceAlpha"
  //           result="hardAlpha"
  //           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  //         />
  //         <feOffset dy={4} />
  //         <feGaussianBlur stdDeviation={2} />
  //         <feComposite in2="hardAlpha" operator="out" />
  //         <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
  //         <feBlend
  //           in2="BackgroundImageFix"
  //           result="effect1_dropShadow_298_1106"
  //         />
  //         <feBlend
  //           in="SourceGraphic"
  //           in2="effect1_dropShadow_298_1106"
  //           result="shape"
  //         />
  //       </filter>
  //       <filter
  //         id="filter1_f_298_1106"
  //         width={276}
  //         height={278}
  //         x={91.446}
  //         y={0}
  //         colorInterpolationFilters="sRGB"
  //         filterUnits="userSpaceOnUse">
  //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
  //         <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
  //         <feGaussianBlur
  //           result="effect1_foregroundBlur_298_1106"
  //           stdDeviation={40}
  //         />
  //       </filter>
  //       <filter
  //         id="filter2_d_298_1106"
  //         width={162}
  //         height={156}
  //         x={147.5}
  //         y={84}
  //         colorInterpolationFilters="sRGB"
  //         filterUnits="userSpaceOnUse">
  //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
  //         <feColorMatrix
  //           in="SourceAlpha"
  //           result="hardAlpha"
  //           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  //         />
  //         <feMorphology
  //           in="SourceAlpha"
  //           radius={8}
  //           result="effect1_dropShadow_298_1106"
  //         />
  //         <feOffset dy={24} />
  //         <feGaussianBlur stdDeviation={16} />
  //         <feComposite in2="hardAlpha" operator="out" />
  //         <feColorMatrix values="0 0 0 0 0.0705882 0 0 0 0 0.0705882 0 0 0 0 0.0705882 0 0 0 0.05 0" />
  //         <feBlend
  //           in2="BackgroundImageFix"
  //           mode="multiply"
  //           result="effect1_dropShadow_298_1106"
  //         />
  //         <feBlend
  //           in="SourceGraphic"
  //           in2="effect1_dropShadow_298_1106"
  //           result="shape"
  //         />
  //       </filter>
  //       <clipPath id="revealClip">
  //         <animated.rect
  //           x="0"
  //           y="0"
  //           width="100%"
  //           height="100%"
  //           style={{ transform: clipPathY.to((y) => `translateY(${y}%)`) }}
  //         />
  //       </clipPath>
  //     </defs>
  //   </svg>
  // );

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 336 285"
      {...props}>
      <path
        fill="#fff"
        d="M0 59c0-8.837 7.163-16 16-16h320v242H16c-8.837 0-16-7.163-16-16V59Z"
      />
      <mask
        id="mask0_298_1106"
        width={800}
        height={242}
        x={0}
        y={43}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}>
        <path
          fill="url(#paint0_linear_298_1106)"
          d="M0 68.6c0-8.96 0-13.441 1.744-16.864a16 16 0 0 1 6.992-6.992C12.16 43 16.64 43 25.6 43H800v242H25.6c-8.96 0-13.441 0-16.864-1.744a16.003 16.003 0 0 1-6.992-6.992C0 272.841 0 268.361 0 259.4V68.6Z"
        />
      </mask>
      <g clipPath="url(#clip0_298_1106)">
        <g clipPath="url(#clip1_298_1106)">
          <path
            fill="url(#paint1_linear_298_1106)"
            fillRule="evenodd"
            d="M45.992 76H336v-1.582H45.992V76Zm0 46H336v-1H45.992v1ZM336 170.73H45.992v-1H336v1ZM45.992 266.043H336v-1H45.992v1ZM336 297.816H45.992v-1H336v1ZM45.992 329.59H336v-1H45.992v1ZM336 361.355H45.992v-1H336v1ZM45.992 393.129H336v-1H45.992v1ZM336 424.902H45.992v-1H336v1ZM45.992 456.676H336v-1H45.992v1ZM336 488.441H45.992v-1H336v1ZM45.992 520.215H336v-1H45.992v1Zm0 31.773H336v-1H45.992v1ZM336 219H45.992v-1H336v1ZM45.992 43.644H336v-1H45.992v1ZM336 11.871H45.992v-1H336v1ZM45.992-19.902H336v-1H45.992v1ZM336-51.676H45.992v-1H336v1ZM45.992-83.44H336v-1H45.992v1ZM336-115.215H45.992v-1H336v1ZM45.992-146.988H336v-1H45.992v1Z"
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
            <tspan x={15} y={266.864}>
              {"0"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}>
            <tspan x={15} y={173.864}>
              {"50"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}>
            <tspan x={15} y={222.864}>
              {"25"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}>
            <tspan x={15} y={124.864}>
              {"75"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              whiteSpace: "pre",
            }}>
            <tspan x={15} y={79.864}>
              {"100"}
            </tspan>
          </text>
        </g>
      </g>
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
        fill="url(#paint2_linear_298_1106)"
        fillOpacity={0.2}
        d="M139.797 106.97c-38.259-6.886-57.56 31.166-93.797 28.53V263h290V78c-45.146 6.886-62.977 48-114.336 32.5-45.646-21.293-43.608 3.356-81.867-3.53Z"
      />
      <ellipse
        cx={303.496}
        cy={89}
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
          y={80}
          fill="#F4F5F6"
          rx={16}
        />
      </g>
      <g filter="url(#filter1_d_298_1106)">
        <rect width={114} height={108} x={171.5} y={84} fill="#fff" rx={12} />
        <path
          fill="#F4F5F6"
          d="M263 138c0 18.778-15.222 34-34 34s-34-15.222-34-34 15.222-34 34-34 34 15.222 34 34Zm-61.2 0c0 15.022 12.178 27.2 27.2 27.2 15.022 0 27.2-12.178 27.2-27.2 0-15.022-12.178-27.2-27.2-27.2-15.022 0-27.2 12.178-27.2 27.2Z"
        />
        <path
          fill="#67CE67"
          d="M229 107.4c0-1.878 1.526-3.418 3.395-3.23a33.995 33.995 0 0 1 30.5 31.162 33.994 33.994 0 0 1-28.576 36.249 33.997 33.997 0 0 1-38.38-25.644 34.003 34.003 0 0 1 19.379-39.062c1.719-.756 3.646.237 4.226 2.023.58 1.786-.409 3.685-2.109 4.483a27.202 27.202 0 0 0 15.82 51.484 27.2 27.2 0 0 0-.864-53.853c-1.863-.234-3.391-1.734-3.391-3.612Z"
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
          <tspan x={220.45} y={143.108}>
            {"93"}
          </tspan>
        </text>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_298_1106"
          x1={400}
          x2={400}
          y1={43}
          y2={285}
          gradientUnits="userSpaceOnUse">
          <stop offset={0.515} />
          <stop offset={1} stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_298_1106"
          x1={45.992}
          x2={268.949}
          y1={243.944}
          y2={243.944}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#F0F0F0" />
          <stop offset={1} stopColor="#F0F0F0" stopOpacity={0.4} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_298_1106"
          x1={191.762}
          x2={191.762}
          y1={263}
          y2={84}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#67CE67" stopOpacity={0} />
          <stop offset={1} stopColor="#67CE67" />
        </linearGradient>
        <clipPath id="clip0_298_1106">
          <path fill="#fff" d="M0 0h360v202H0z" transform="translate(16 69)" />
        </clipPath>
        <clipPath id="clip1_298_1106">
          <path fill="#fff" d="M0 0h290v477H0z" transform="translate(46 75)" />
        </clipPath>
        <clipPath id="clip2_298_1106">
          <path fill="#fff" d="M0 0h430v202H0z" transform="translate(16 69)" />
        </clipPath>
        <filter
          id="filter0_f_298_1106"
          width={276}
          height={278}
          x={91.446}
          y={0}
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
          y={84}
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
      </defs>
    </svg>
  );
};
export default CheckoutExperience;
