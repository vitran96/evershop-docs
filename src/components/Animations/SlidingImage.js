import React from "react";
import { useSpring, animated } from "@react-spring/web";

function SlidingImage({ src, alt, width, height, delay = 0 }) {
  const [inView, setInView] = React.useState(false);
  const imageRef = React.useRef();

  React.useEffect(() => {
    let timeout = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeout = setTimeout(() => {
            setInView(true);
          }, delay);
          observer.unobserve(entry.target); // Stop observing after it's in view
        }
      },
      { threshold: 1 } // Trigger when 10% of the element is visible
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  // Define the animation for "back in left" effect
  const imageAnimation = useSpring({
    from: { transform: "translateY(-100%)", opacity: 0 },
    to: {
      transform: inView ? "translateY(0%)" : "translateY(-100%)",
      opacity: inView ? 1 : 0,
    },
    config: { tension: 300, friction: 20 }, // Customize for a "back in" feel
  });

  return (
    <animated.img
      ref={imageRef} // Attach the ref to the image for Intersection Observer
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{
        ...imageAnimation,
        width: `{width}px`,
        height: "auto !important",
      }}
    />
  );
}

export default SlidingImage;
