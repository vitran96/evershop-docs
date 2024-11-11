import * as React from "react";
import { useSpring, animated } from "@react-spring/web";

const HeroBannerOne = ({ startSlide }) => {
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
    onRest: () => setPathComplete(true),
  });

  const elementAnimation = useSpring({
    from: { transform: "translateY(100%)" }, // Start from below the viewport
    to: { transform: pathComplete ? "translateY(0)" : "translateY(100%)" }, // Slide up after path animation
    config: { duration: 1500 },
    onRest: () => {
      // Wait for 1 second and then start the slide
      setTimeout(() => {
        startSlide();
      }, 1500);
    },
  });

  return (
    <animated.svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      viewBox="0 0 1104 640">
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
          <tspan x={216} y={97.273}>
            {"Dashboard"}
          </tspan>
        </text>
        <path fill="#fff" d="M0 50h192v590H0z" />
        <g filter="url(#b)">
          <rect width={160} height={44} x={16} y={70} fill="#F7F7F7" rx={8} />
          <path
            fill="#008060"
            d="M44.666 97.667v-8.195l1.238.743a.833.833 0 0 0 .858-1.43l-4.185-2.51-3.201-1.93c-.233-.14-.411-.247-.563-.328a1.652 1.652 0 0 0-.107-.055 1.54 1.54 0 0 0-.348-.127 1.667 1.667 0 0 0-.717 0 1.532 1.532 0 0 0-.348.128 1.175 1.175 0 0 0-.106.054c-.151.08-.33.188-.563.329l-3.206 1.931-4.18 2.508a.833.833 0 0 0 .857 1.43l1.238-.743v8.195c0 .933 0 1.4.182 1.756.16.314.415.569.728.729.357.181.823.181 1.757.181h1.5v-5a2.5 2.5 0 0 1 5 0v5H42c.933 0 1.4 0 1.756-.181.314-.16.569-.415.729-.729.181-.356.181-.823.181-1.756Z"
          />
          <text
            xmlSpace="preserve"
            fill="#008060"
            fontFamily="Inter"
            fontSize={13}
            fontWeight={600}
            letterSpacing="-.01em"
            style={{ whiteSpace: "pre" }}>
            <tspan x={60} y={96.727}>
              {"Dashboard"}
            </tspan>
          </text>
        </g>
        <path
          fill="#687082"
          fillRule="evenodd"
          d="M44.667 149v-5.833c0-.921-.746-1.667-1.667-1.667H33c-.92 0-1.666.746-1.666 1.667V149c0 .92.746 1.667 1.666 1.667h10c.92 0 1.667-.747 1.667-1.667ZM33 139.833a3.334 3.334 0 0 0-3.333 3.334V149A3.333 3.333 0 0 0 33 152.333h10A3.333 3.333 0 0 0 46.334 149v-5.833A3.334 3.334 0 0 0 43 139.833H33Z"
          clipRule="evenodd"
        />
        <path
          fill="#687082"
          fillRule="evenodd"
          d="M35.5 137.333a.834.834 0 0 0-.833.834v2.5a.833.833 0 0 1-1.667 0v-2.5a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v2.5a.833.833 0 0 1-1.667 0v-2.5a.834.834 0 0 0-.833-.834h-5Z"
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
          <tspan x={60} y={148.727}>
            {"Products"}
          </tspan>
        </text>
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
        <rect width={630} height={370} x={216} y={122} fill="#fff" rx={8} />
        <g clipPath="url(#i)">
          <text
            xmlSpace="preserve"
            fill="#101828"
            fontFamily="Inter"
            fontSize={15}
            fontWeight={600}
            letterSpacing="-.02em"
            style={{ whiteSpace: "pre" }}>
            <tspan x={236} y={159.455}>
              {"Sale Statistic"}
            </tspan>
          </text>
          <rect
            width={92}
            height={34}
            x={733}
            y={137}
            stroke="#E6E8EC"
            strokeWidth={2}
            rx={11}
          />
          <text
            xmlSpace="preserve"
            fill="#222630"
            fontFamily="Inter"
            fontSize={13}
            fontWeight={600}
            letterSpacing="-.01em"
            style={{ whiteSpace: "pre" }}>
            <tspan x={744} y={158.727}>
              {"Weekly"}
            </tspan>
          </text>
          <path
            stroke="#222630"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m802 152 4 4 4-4"
          />
          <rect
            width={12}
            height={12}
            x={236}
            y={176.5}
            fill="#3E7EFF"
            rx={3}
          />
          <text
            xmlSpace="preserve"
            fill="#222630"
            fontFamily="Inter"
            fontSize={12}
            letterSpacing={0}
            style={{ whiteSpace: "pre" }}>
            <tspan x={256} y={186.864}>
              {"Previous week"}
            </tspan>
          </text>
          <rect
            width={12}
            height={12}
            x={362}
            y={176.5}
            fill="#01A27B"
            rx={3}
          />
          <text
            xmlSpace="preserve"
            fill="#222630"
            fontFamily="Inter"
            fontSize={12}
            letterSpacing={0}
            style={{ whiteSpace: "pre" }}>
            <tspan x={382} y={186.864}>
              {"Current week"}
            </tspan>
          </text>
          <g clipPath="url(#j)">
            <path
              stroke="#E6E8EC"
              strokeLinecap="square"
              d="M236.003 441h751m-717.308 0-.39-298m416.39 298-.39-298m-345.61 298-.39-298m415.39 298-.39-298m-345.61 298-.39-298m415.39 298-.39-298m-345.61 298-.39-298m69.382 298-.374-298m69.382 298-.39-298"
              opacity={0.6}
            />
            <g
              fill="#222630"
              clipPath="url(#k)"
              fontFamily="Inter"
              fontSize={13}
              fontWeight={500}
              letterSpacing={0}>
              <text xmlSpace="preserve" style={{ whiteSpace: "pre" }}>
                <tspan x={258.328} y={464.727}>
                  {"Jan"}
                </tspan>
              </text>
              <text xmlSpace="preserve" style={{ whiteSpace: "pre" }}>
                <tspan x={328.068} y={464.727}>
                  {"Feb"}
                </tspan>
              </text>
              <text xmlSpace="preserve" style={{ whiteSpace: "pre" }}>
                <tspan x={397.471} y={464.727}>
                  {"Mar"}
                </tspan>
              </text>
              <text xmlSpace="preserve" style={{ whiteSpace: "pre" }}>
                <tspan x={467.442} y={464.727}>
                  {"Apr"}
                </tspan>
              </text>
              <text xmlSpace="preserve" style={{ whiteSpace: "pre" }}>
                <tspan x={533.163} y={464.727}>
                  {"Jun"}
                </tspan>
              </text>
              <text xmlSpace="preserve" style={{ whiteSpace: "pre" }}>
                <tspan x={605.429} y={464.727}>
                  {"Jul"}
                </tspan>
              </text>
              <text xmlSpace="preserve" style={{ whiteSpace: "pre" }}>
                <tspan x={672.071} y={464.727}>
                  {"Aug"}
                </tspan>
              </text>
              <text xmlSpace="preserve" style={{ whiteSpace: "pre" }}>
                <tspan x={742.49} y={464.727}>
                  {"Sep"}
                </tspan>
              </text>
              <text xmlSpace="preserve" style={{ whiteSpace: "pre" }}>
                <tspan x={811.398} y={464.727}>
                  {"Oct"}
                </tspan>
              </text>
            </g>
            <animated.path
              fill="url(#l)"
              d="M1167.77 331.614s-38.81 30.174-59.51 18.004c-20.69-12.17-26.99-51.002-83.62-51.002-56.627 0-133.833 76.541-178.129 76.541-44.296 0-90.387-73.581-156.396-37.036-66.008 36.546-53.704 60.136-106.121 60.136-52.417 0-98.046-144.954-157.482-144.254-44.317 0-61.328 137.616-76.104 158.966-14.775 21.35-56.062-37.812-129.017-37.812-64.394 0-125.46-113.903-187.983-113.903-62.522 0-87.92 120.792-143.388 120.792s-54.648-43.925-98.718-43.925c-.313 75.565 0 151.177 0 151.177H1167.77V331.614Z"
              opacity={0.15}
              style={clipPathAnimation}
            />
            <animated.path
              stroke="#3E7EFF"
              strokeWidth={2}
              style={clipPathAnimation}
              d="M1167.77 331.461s-38.81 30.114-59.51 17.968c-20.7-12.146-27-50.901-83.64-50.901-56.63 0-133.844 76.39-178.146 76.39-44.301 0-90.397-73.436-156.413-36.962-66.016 36.473-53.71 60.017-106.133 60.017-52.423 0-98.058-144.668-157.5-143.97-44.322 0-61.335 137.344-76.112 158.652-14.778 21.308-56.069-37.737-129.033-37.737-64.401 0-125.474-113.679-188.003-113.679-62.53 0-87.931 120.554-143.405 120.554-55.474 0-54.654-43.837-98.73-43.837"
            />
            <mask
              id="m"
              width={752}
              height={309}
              x={236}
              y={133}
              maskUnits="userSpaceOnUse"
              style={{ maskType: "luminance" }}>
              <path fill="#fff" d="M236 133.5h752v308H236v-308Z" />
            </mask>
            <g mask="url(#m)" style={clipPathAnimation}>
              <animated.path
                id="animatedClipPathOne"
                fill="url(#n)"
                d="M-243 361.663s33.458.566 54.149-9.65c20.691-10.217 98.59-70.615 155.2-70.615 56.608 0 81.143 48.644 125.426 48.644 44.282 0 77.737 37.779 143.725 68.458 35.5-12 54 0 106.871 3.994 52.402 0 79.038-167.079 138.455-166.492 44.304 0 85.086 98.088 99.857 116.011 14.771 17.922 63.723 59.691 128.097 59.691 64.373 0 121.505-124.219 184.008-124.219 62.503 0 87.894 101.4 143.342 101.4 55.45 0 54.63-36.872 98.69-36.872.36 39.912 0 127.487 0 127.487H-243V361.663Z"
                opacity={0.2}
                style={clipPathAnimation}
              />
              <animated.path
                id="animatedClipPathTwo"
                stroke="#01A27B"
                strokeWidth={2}
                style={clipPathAnimation}
                d="M-243 360.16s33.462.563 54.156-9.612c20.693-10.175 98.603-70.331 155.22-70.331 56.616 0 81.154 48.449 125.442 48.449 44.289 0 63.185 41.605 129.182 72.161 60-13.554 69.04 0 121.448 0 52.408 0 79.047-166.41 138.473-165.825 44.309 0 85.096 97.695 99.869 115.546C595.563 368.399 644.521 410 708.903 410c64.383 0 121.522-123.721 184.033-123.721 62.511 0 87.905 100.994 143.364 100.994 55.46 0 54.64-36.725 98.7-36.725"
              />
            </g>
            <ellipse cx={547.06} cy={293} fill="#fff" rx={9.06} ry={9} />
            <ellipse cx={547.06} cy={293} fill="#01A27B" rx={5.033} ry={5} />
          </g>
          <animated.g filter="url(#o)" style={elementAnimation}>
            <rect
              width={274.924}
              height={107}
              x={551}
              y={178}
              fill="#fff"
              rx={12}
            />
            <text
              xmlSpace="preserve"
              fill="#101828"
              fontFamily="Inter"
              fontSize={12}
              fontWeight={500}
              letterSpacing="0em"
              style={{ whiteSpace: "pre" }}>
              <tspan x={567} y={206.364}>
                {"Total sale"}
              </tspan>
            </text>
            <text
              xmlSpace="preserve"
              fill="#101828"
              fontFamily="Inter"
              fontSize={20}
              fontWeight={600}
              letterSpacing="0em"
              style={{ whiteSpace: "pre" }}>
              <tspan x={567} y={241.273}>
                {"8,493"}
              </tspan>
            </text>
            <text
              xmlSpace="preserve"
              fill="#222630"
              fontFamily="Inter"
              fontSize={11}
              fontWeight={500}
              letterSpacing="0em"
              style={{ whiteSpace: "pre" }}>
              <tspan x={613.346} y={265}>
                {"vs last week"}
              </tspan>
            </text>
            <path
              stroke="#12B76A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.608}
              d="M571.69 265.381V256m0 0-4.69 4.69m4.69-4.69 4.691 4.69"
            />
            <path
              fill="#027A48"
              d="M583.648 263.111v-.999l3.538-5.588h.788v1.471h-.501l-2.53 4.005v.065h4.849v1.046h-6.144Zm3.883 1.6v-1.903l.008-.456v-5.828h1.171v8.187h-1.179Zm6.505.136c-.631-.003-1.171-.169-1.619-.5-.448-.33-.79-.812-1.028-1.443-.237-.631-.355-1.393-.355-2.283 0-.89.118-1.646.355-2.275.238-.628.584-1.108 1.032-1.439.448-.33.989-.495 1.615-.495.627 0 1.164.166 1.611.499.447.333.791.811 1.028 1.439.237.629.36 1.383.36 2.271 0 .893-.118 1.655-.355 2.287-.238.632-.58 1.11-1.028 1.443-.448.334-.987.496-1.616.496Zm0-1.067c.555 0 .988-.271 1.3-.812.312-.542.472-1.323.472-2.347 0-.679-.072-1.253-.216-1.723-.143-.47-.345-.828-.612-1.071a1.351 1.351 0 0 0-.943-.368c-.551 0-.985.272-1.299.816-.315.543-.473 1.326-.476 2.346 0 .683.071 1.259.212 1.731.142.472.348.825.612 1.067.259.238.599.367.95.361Zm8.69-.604v-.432c0-.309.064-.592.192-.848.129-.255.321-.464.568-.619.248-.156.553-.236.907-.236.363 0 .667.077.912.231.245.155.43.362.556.62.125.259.192.543.192.852v.432c0 .309-.065.592-.192.851a1.508 1.508 0 0 1-.564.619c-.248.157-.546.233-.904.233s-.663-.077-.911-.233a1.537 1.537 0 0 1-.564-.619 1.905 1.905 0 0 1-.192-.851Zm.931-.432v.432c0 .229.055.436.164.623.11.186.3.28.572.28.272 0 .458-.094.564-.28a1.24 1.24 0 0 0 .16-.623v-.432c0-.229-.052-.437-.156-.624-.104-.187-.29-.28-.568-.28-.266 0-.456.093-.568.28a1.2 1.2 0 0 0-.168.624Zm-5.048-4.254v-.431c0-.309.063-.593.192-.852a1.51 1.51 0 0 1 .567-.619c.248-.155.554-.233.907-.233.363 0 .667.078.912.233.246.155.43.361.556.619.127.266.191.557.188.852v.431a1.89 1.89 0 0 1-.192.852c-.125.255-.319.47-.56.62-.245.154-.547.231-.904.231-.362 0-.667-.077-.915-.231a1.555 1.555 0 0 1-.559-.62 1.877 1.877 0 0 1-.192-.852Zm.935-.431v.431c0 .23.053.438.16.624.107.187.3.28.571.28.267 0 .454-.093.56-.28.106-.186.164-.394.164-.624v-.431c0-.23-.052-.437-.156-.624-.104-.186-.293-.279-.568-.279-.266 0-.455.093-.567.279a1.186 1.186 0 0 0-.164.624Zm-.556 6.652 5.629-8.187h.955l-5.629 8.187h-.955Z"
            />
            <path
              fill="#fff"
              d="M779.367 228.795a4.02 4.02 0 1 0-8.04 0 4.02 4.02 0 0 0 8.04 0Z"
            />
            <mask
              id="q"
              width={103}
              height={52}
              x={707}
              y={217}
              maskUnits="userSpaceOnUse"
              style={{ maskType: "alpha" }}>
              <path fill="url(#p)" d="M707 217.538h102.924V269H707v-51.462Z" />
            </mask>
            <g mask="url(#q)">
              <path
                fill="#ECFDF3"
                d="M710.704 262.789 707 269h102.924v-51.462l-1.462 8.872h-1.949l-1.755 4.437c-.156 0-1.17 1.775-1.657 2.662l-4.191 2.661-2.436 3.55-3.899-3.55-2.047-2.661-2.924 6.211h-3.021l-2.535-6.211-3.118-2.662c-.156 0-1.43-1.774-2.047-2.662h-1.559l-3.704 2.662-3.216 2.662-1.463 6.211-4.386 2.662-2.241 2.662-2.534 4.436-2.437 5.823h-1.072l-2.924.554-2.827-6.377-2.436-4.436h-1.462l-2.535-2.662-3.605 2.662h-3.412l-3.411 4.436-3.412 5.324-2.533 5.324-2.729 2.661-3.704-2.661-2.925 2.661-2.923 2.662-2.729-2.662Z"
              />
            </g>
            <path
              stroke="#17B26A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.608}
              d="m707 269 3.704-6.211 2.729 2.662 2.923-2.662 2.925-2.661 3.704 2.661 2.729-2.661 2.533-5.324 3.412-5.324 3.411-4.436h3.412l3.605-2.662 2.535 2.662h1.462l2.436 4.436 2.827 6.377 2.924-.554h1.072l2.437-5.823 2.534-4.436 2.241-2.662 4.386-2.662 1.463-6.211 3.216-2.662 3.704-2.662h1.559l2.047 2.662c.155 0 2.144 1.775 3.118 2.662l2.535 6.211h3.021l2.924-6.211 2.047 2.661 3.899 3.55 2.436-3.55 4.191-2.661c.487-.887 1.501-2.662 1.657-2.662.156 0 1.234-2.957 1.755-4.437h1.949l1.462-8.872"
            />
            <path
              stroke="#17B26A"
              strokeWidth={1.608}
              d="M783.388 228.795a8.04 8.04 0 1 0-8.04 8.041c4.44 0 8.04-3.6 8.04-8.041Z"
              opacity={0.2}
            />
            <path
              stroke="#17B26A"
              strokeWidth={1.608}
              d="M779.367 228.795a4.02 4.02 0 1 0-8.04 0 4.02 4.02 0 0 0 8.04 0Z"
            />
          </animated.g>
        </g>
        <rect width={630} height={485} x={216} y={500} fill="#fff" rx={8} />
        <text
          xmlSpace="preserve"
          fill="#101828"
          fontFamily="Inter"
          fontSize={15}
          fontWeight={600}
          letterSpacing="-.02em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={236} y={535.455}>
            {"Best Sellers"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          fill="#008060"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={600}
          letterSpacing="-.02em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={759} y={534.727}>
            {"All Product"}
          </tspan>
        </text>
        <rect width={60} height={60} x={236} y={558} fill="url(#r)" rx={12} />
        <text
          xmlSpace="preserve"
          fill="#101828"
          fontFamily="Inter"
          fontSize={13}
          fontWeight={500}
          letterSpacing="0em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={308} y={592.727}>
            {"Air Force 1 Low EWP"}
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
          <tspan x={630} y={592.727}>
            {"$399.00"}
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
          <tspan x={757.813} y={592.727}>
            {"28192 sold"}
          </tspan>
        </text>
        <rect width={60} height={60} x={236} y={630} fill="url(#s)" rx={12} />
        <rect width={226} height={304} x={854} y={122} fill="#fff" rx={8} />
        <ellipse
          cx={965.861}
          cy={222.758}
          fill="#5FDCB3"
          rx={68.841}
          ry={68.758}
        />
        <path
          fill="#3E7EFF"
          fillRule="evenodd"
          d="M924.152 278.859c22.544 16.996 54.373 18.959 79.608 2.588 32.17-20.863 41.45-63.602 20.74-95.46a68.119 68.119 0 0 0-16.73-17.765l-41.537 55.618-42.081 55.019Z"
          clipRule="evenodd"
        />
        <path
          fill="#3E7EFF"
          fillRule="evenodd"
          d="M949.825 290.4a69.471 69.471 0 0 0 16.51 1.979c38.235 0 69.235-30.977 69.235-69.189 0-38.213-31-69.19-69.235-69.19-.258 0-.516.001-.774.004l1.078 69.186-16.814 67.21Z"
          clipRule="evenodd"
        />
        <path
          fill="#FBB0BF"
          fillRule="evenodd"
          d="M982.653 196.995 963.98 221.91l-72.981-16.325c-4.341 18.953-1.309 39.53 10.099 57.076a73.987 73.987 0 0 0 20.472 20.925l46.723-61.97s6.037-11.282 14.36-24.621Z"
          clipRule="evenodd"
        />
        <ellipse
          cx={966.293}
          cy={223.189}
          fill="#fff"
          rx={48.011}
          ry={47.953}
        />
        <text
          xmlSpace="preserve"
          fill="#101828"
          fontFamily="Inter"
          fontSize={12}
          fontWeight={500}
          letterSpacing="-.02em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={932} y={228.364}>
            {"Lifetime Sale"}
          </tspan>
        </text>
        <path
          fill="#3E7EFF"
          fillRule="evenodd"
          d="M877 340a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-4.667a2.332 2.332 0 1 0 .001-4.665 2.332 2.332 0 0 0-.001 4.665Z"
          clipRule="evenodd"
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={12}
          letterSpacing={0}
          style={{ whiteSpace: "pre" }}>
          <tspan x={892} y={337.364}>
            {"Orders Complete"}
          </tspan>
        </text>
        <path
          fill="#5FDCB3"
          fillRule="evenodd"
          d="M877 368a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-4.667a2.332 2.332 0 1 0 .001-4.665 2.332 2.332 0 0 0-.001 4.665Z"
          clipRule="evenodd"
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={12}
          letterSpacing={0}
          style={{ whiteSpace: "pre" }}>
          <tspan x={892} y={365.364}>
            {"Orders In process"}
          </tspan>
        </text>
        <path
          fill="#FBB0BF"
          fillRule="evenodd"
          d="M877 400a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-4.667a2.332 2.332 0 1 0 .001-4.665 2.332 2.332 0 0 0-.001 4.665Z"
          clipRule="evenodd"
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={12}
          letterSpacing={0}
          style={{ whiteSpace: "pre" }}>
          <tspan x={892} y={397.364}>
            {"Orders Pending"}
          </tspan>
        </text>
        <rect width={226} height={198} x={854} y={434} fill="#fff" rx={8} />
        <text
          xmlSpace="preserve"
          fill="#101828"
          fontFamily="Inter"
          fontSize={15}
          fontWeight={600}
          letterSpacing="-.02em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={870} y={463.455}>
            {"Revenue"}
          </tspan>
        </text>
        <path
          fill="#687082"
          fillRule="evenodd"
          d="M880 496.667a6.667 6.667 0 1 0 0-13.334 6.667 6.667 0 0 0 0 13.334Zm0 1.666a8.333 8.333 0 1 0 .001-16.667 8.333 8.333 0 0 0-.001 16.667Z"
          clipRule="evenodd"
        />
        <path
          fill="#687082"
          d="M879.167 485.833a.833.833 0 0 1 1.667 0 2.5 2.5 0 0 1 2.5 2.5.833.833 0 1 1-1.667 0 .833.833 0 0 0-.833-.833h-1.881a.619.619 0 0 0-.196 1.207l3.013 1.005a2.285 2.285 0 0 1-.723 4.455h-.213a.833.833 0 0 1-1.667 0 2.5 2.5 0 0 1-2.5-2.5.833.833 0 1 1 1.667 0c0 .46.373.833.833.833h1.88a.62.62 0 0 0 .196-1.207l-3.013-1.005a2.285 2.285 0 0 1 .723-4.455h.214Z"
        />
        <text
          xmlSpace="preserve"
          fill="#222630"
          fontFamily="Inter"
          fontSize={14}
          fontWeight={500}
          letterSpacing="-.02em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={894} y={495.091}>
            {"$1.292.000"}
          </tspan>
        </text>
        <rect width={54} height={24} x={980} y={478} fill="#D9FCE8" rx={4} />
        <path
          stroke="#027A48"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="m987 489 5-5 5 5"
        />
        <path
          stroke="#027A48"
          strokeLinecap="round"
          strokeWidth={1.5}
          d="M992 495v-11"
        />
        <text
          xmlSpace="preserve"
          fill="#027A48"
          fontFamily="Inter"
          fontSize={12}
          fontWeight={600}
          letterSpacing="-.01em"
          style={{ whiteSpace: "pre" }}>
          <tspan x={1004} y={494.364}>
            {"33%"}
          </tspan>
        </text>
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
          <path fill="#fff" d="M236 136h590v342H236z" />
        </clipPath>
        <clipPath id="j">
          <path fill="#fff" d="M236 209h590v269H236z" />
        </clipPath>
        <clipPath id="k">
          <path fill="#fff" d="M258 452h709v21H258z" />
        </clipPath>
        <pattern
          id="e"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox">
          <use xlinkHref="#t" transform="scale(.00268 .00234)" />
        </pattern>
        <pattern
          id="h"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox">
          <use xlinkHref="#u" transform="scale(.00208)" />
        </pattern>
        <pattern
          id="r"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox">
          <use xlinkHref="#v" transform="scale(.00169)" />
        </pattern>
        <pattern
          id="s"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox">
          <use xlinkHref="#v" transform="scale(.00169)" />
        </pattern>
        <linearGradient
          id="l"
          x1={1821.45}
          x2={1821.45}
          y1={30.541}
          y2={489.298}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#3E7EFF" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="n"
          x1={-593.693}
          x2={-593.693}
          y1={135.729}
          y2={433}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#01A27B" />
          <stop offset={1} stopColor="#01A27B" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="p"
          x1={758.462}
          x2={758.462}
          y1={217.538}
          y2={269}
          gradientUnits="userSpaceOnUse">
          <stop />
          <stop offset={1} stopOpacity={0} />
        </linearGradient>
        <filter
          id="b"
          width={160}
          height={46}
          x={16}
          y={69}
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
          <feBlend in2="shape" result="effect1_innerShadow_394_1091" />
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
            in2="effect1_innerShadow_394_1091"
            mode="multiply"
            result="effect2_innerShadow_394_1091"
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
          <feBlend in2="shape" result="effect1_innerShadow_394_1091" />
        </filter>
        <filter
          id="o"
          width={318.924}
          height={151}
          x={529}
          y={176}
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
            result="effect1_dropShadow_394_1091"
          />
          <feOffset dy={20} />
          <feGaussianBlur stdDeviation={12} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.0648261 0 0 0 0 0.0733614 0 0 0 0 0.0845229 0 0 0 0.12 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_394_1091"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_394_1091"
            result="shape"
          />
        </filter>
        <image id="t" width={373} height={428} href="/img/logo.svg" />
        <image id="u" width={480} height={480} href="/img/avatar.webp" />
        <image id="v" width={592} height={592} href="/img/shoe-hero.webp" />
      </defs>
    </animated.svg>
  );
};
export default HeroBannerOne;
