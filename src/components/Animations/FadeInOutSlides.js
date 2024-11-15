import { useTransition, animated } from "@react-spring/web";
import React, { useEffect, useState } from "react";

function FadeInOutSlides({
  slides,
  loop = false,
  full = false,
  interval = 5000,
}) {
  const [showSlide, setShowSlide] = useState(0);

  const transitions = useTransition(showSlide, {
    key: showSlide,
    from: {
      opacity: 0,
      gridRowStart: 1,
      gridColumnStart: 1,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  });

  useEffect(() => {
    if (loop) {
      const intervalVar = setInterval(() => {
        setShowSlide((prev) => (prev + 1) % slides.length);
      }, interval);
      return () => clearInterval(intervalVar);
    }
  }, [loop, slides.length]);

  return (
    <div
      className="grid grid-cols-1"
      style={{ width: full ? "100%" : "auto", height: "fit-content" }}>
      {transitions((style, item) => {
        const SlideComponent = slides[item]["content"]; // Get the component to render
        return (
          <animated.div style={style} className={"fade__in__out__slide"}>
            <SlideComponent
              startSlide={() => {
                setShowSlide((prev) => (prev + 1) % slides.length);
              }}
            />
          </animated.div>
        );
      })}
    </div>
  );
}

export default FadeInOutSlides;
