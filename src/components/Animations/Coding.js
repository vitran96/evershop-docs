import React, { useState, useEffect, useRef } from "react";
import { useSprings, animated, to } from "@react-spring/web";

const One = () => (
  <div className="flex">
    <img
      src="/img/code_show_one.webp"
      alt="EverShop data fetching"
      width={300}
      height={153}
    />
  </div>
);
const Two = () => (
  <div className="flex">
    <img
      src="/img/code_show_two.webp"
      alt="EverShop file based middleware"
      width={300}
      height={153}
    />
  </div>
);
const Three = () => (
  <div className="flex">
    <img
      src="/img/code_show_three.webp"
      alt="EverShop dynamic layout"
      width={300}
      height={153}
    />
  </div>
);

const layers = [
  {
    id: 1,
    content: <One />,
  },
  {
    id: 2,
    content: <Two />,
  },
  {
    id: 3,
    content: <Three />,
  },
];

const fn = (current) => (index) => {
  if (current.indexOf(index) === 0) {
    return {
      from: {
        zIndex: 3,
        top: "20%",
        opacity: 1,
        width: "100%",
      },
      to: [
        {
          opacity: 0,
          zIndex: 3,
          top: "100%",
          width: "100%",
          duration: 300,
        },
        {
          zIndex: 1,
          top: "100%",
          opacity: 1,
          width: "90%",
        },
        {
          zIndex: 1,
          top: "0%",
          opacity: 1,
          width: "90%",
          duration: 300,
        },
      ],
    };
  } else if (current.indexOf(index) === 1) {
    return {
      from: { width: "95%", zIndex: 2, top: "10%" },
      to: { width: "100%", zIndex: 3, top: "20%" },
    };
  } else {
    return {
      from: {
        width: "90%",
        zIndex: 1,
        top: "0%",
      },
      to: { width: "95%", zIndex: 2, top: "10%" },
    };
  }
};

const LayeredLoopAnimation = () => {
  const current = useRef([0, 1, 2]);

  const [springs, set] = useSprings(layers.length, fn(current.current));

  useEffect(() => {
    const interval = setInterval(() => {
      set(fn(current.current));
      // Rotate the array
      current.current = [
        current.current[1],
        current.current[2],
        current.current[0],
      ];
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 pb-[5px] overflow-hidden">
      <div className="layer-container">
        <div className="invisible pt-16 ">
          <One />
        </div>
        {springs.map((style, index) => {
          const LayerComponent = layers[index]["content"];
          return (
            <animated.div
              className={"layer"}
              key={index}
              style={{
                ...style,
              }}>
              {LayerComponent}
            </animated.div>
          );
        })}
      </div>
    </div>
  );
};

export default LayeredLoopAnimation;
