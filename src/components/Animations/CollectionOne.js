import * as React from "react";
import { useSpring, animated } from "@react-spring/web";

const TypingAnimation = ({ text }) => {
  const [displayedText, setDisplayedText] = React.useState("");
  const [index, setIndex] = React.useState(0);

  // Spring animation for the opacity or other visual effects
  const springProps = useSpring({
    opacity: displayedText ? 1 : 0,
    x: 16,
    y: 120.091,
    config: { tension: 170, friction: 20 },
  });

  // Typing effect - adds one character at a time
  React.useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100); // Adjust delay here for typing speed
      return () => clearTimeout(timeout);
    }
  }, []);

  return <animated.tspan style={springProps}>{displayedText}</animated.tspan>;
};

const CollectionOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 492 206"
    {...props}>
    <text
      xmlSpace="preserve"
      fill="#101828"
      fontFamily="Inter"
      fontSize={16}
      fontWeight={600}
      letterSpacing="0em"
      style={{
        whiteSpace: "pre",
      }}>
      <tspan x={0} y={27.818}>
        {"Collection"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      fill="#343946"
      fontFamily="Inter"
      fontSize={13}
      letterSpacing="0em"
      style={{
        whiteSpace: "pre",
      }}>
      <tspan x={0} y={80.727}>
        {"Name"}
      </tspan>
    </text>
    <rect width={236} height={51} y={90} fill="#F4F5F6" rx={12} />
    <text
      xmlSpace="preserve"
      fill="#101828"
      fontFamily="Inter"
      fontSize={14}
      fontWeight={500}
      letterSpacing="0em"
      style={{
        whiteSpace: "pre",
      }}>
      <TypingAnimation text="New Arrivals" />
    </text>
    <text
      xmlSpace="preserve"
      fill="#343946"
      fontFamily="Inter"
      fontSize={13}
      letterSpacing="0em"
      style={{
        whiteSpace: "pre",
      }}>
      <tspan x={256} y={80.727}>
        {"Unique ID"}
      </tspan>
    </text>
    <rect width={236} height={51} x={256} y={90} fill="#F4F5F6" rx={12} />
    <text
      xmlSpace="preserve"
      fill="#101828"
      fontFamily="Inter"
      fontSize={14}
      fontWeight={500}
      letterSpacing="0em"
      style={{
        whiteSpace: "pre",
      }}>
      <tspan x={272} y={120.091}>
        {"new_arrivals"}
      </tspan>
    </text>
    <rect
      width={79.5}
      height={42.5}
      x={314.75}
      y={162.75}
      stroke="#F4F5F6"
      strokeWidth={1.5}
      rx={11.25}
    />
    <text
      xmlSpace="preserve"
      fill="#343946"
      fontFamily="Inter"
      fontSize={14}
      fontWeight={600}
      letterSpacing="0em"
      style={{
        whiteSpace: "pre",
      }}>
      <tspan x={330.5} y={189.091}>
        {"Cancel"}
      </tspan>
    </text>
    <rect width={81} height={44} x={411} y={162} fill="#008060" rx={12} />
    <text
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Inter"
      fontSize={14}
      fontWeight={600}
      letterSpacing="0em"
      style={{
        whiteSpace: "pre",
      }}>
      <tspan x={435} y={189.091}>
        {"Save"}
      </tspan>
    </text>
  </svg>
);
export default CollectionOne;
