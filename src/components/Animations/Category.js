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
      style={{
        ...imageAnimation,
        width: width,
        height: height,
      }}
    />
  );
}

// Create a modal dialog with the react spring animation
const ModalDialog = ({ children }) => {
  const modalAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div
      style={modalAnimation}
      className="absolute inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      {children}
    </animated.div>
  );
};
const Category = ({ children }) => {
  return (
    <div className="w-full h-64 pl-6 pt-6 pb-4 bg-white rounded-tl-2xl rounded-bl-2xl justify-start items-center inline-flex">
      <div className="self-stretch flex-col justify-start items-start gap-6 inline-flex w-full">
        <div className="self-stretch justify-between items-center inline-flex w-full pr-6">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
            <div className="self-stretch justify-start items-center gap-3 inline-flex">
              <div className="w-2.5 h-2.5 bg-[#00764a] rounded-full" />
              <div className="text-[#686f82] text-sm font-medium leading-none">
                Category Name
              </div>
            </div>
            <div className="self-stretch px-6 justify-start items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 text-[#101828] text-base font-semibold leading-normal">
                Man
              </div>
            </div>
          </div>
          <div className="ml-auto flex items-center p-1 bg-[#F4F5F6] rounded-[16px] border border-gray-200 shadow-sm font-medium">
            <button className="ml-auto flex items-center px-3 py-2 bg-white rounded-[12px] border border-gray-200 shadow-sm font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.3963 2.12867C14.6934 2.34607 14.7581 2.7632 14.5407 3.06035L6.73675 13.727C6.62964 13.8734 6.4675 13.9699 6.28773 13.9941C6.10795 14.0183 5.92607 13.9682 5.78403 13.8554L1.58795 10.522C1.29966 10.293 1.25161 9.87366 1.48063 9.58537C1.70965 9.29707 2.12901 9.24902 2.41731 9.47804L6.07025 12.3799L13.4646 2.27307C13.682 1.97592 14.0991 1.91127 14.3963 2.12867Z"
                  fill="#00764A"
                />
              </svg>
              <span className="pl-1 text-sm font-medium">Add product</span>
            </button>
          </div>
        </div>
        <div className="self-stretch h-36 flex-col justify-start items-start gap-5 flex">
          <div className="self-stretch justify-start items-center gap-3 inline-flex">
            <div className="flex-col justify-center items-start gap-4 inline-flex">
              <SlidingImage
                src="/img/category-one.webp"
                alt="Category One"
                width="112px"
                height="112px"
                delay={500}
              />
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="w-24 h-1.5 opacity-10 bg-[#686f82] rounded-sm" />
                <div className="w-12 h-1.5 opacity-10 bg-[#686f82] rounded-sm" />
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-4 inline-flex">
              <SlidingImage
                src="/img/category-two.webp"
                alt="Category Two"
                width="112px"
                height="112px"
                delay={800}
              />
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="w-24 h-1.5 opacity-10 bg-[#686f82] rounded-sm" />
                <div className="w-12 h-1.5 opacity-10 bg-[#686f82] rounded-sm" />
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-4 inline-flex">
              <SlidingImage
                src="/img/category-three.webp"
                alt="Category Three"
                width="112px"
                height="112px"
                delay={1200}
              />
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="w-24 h-1.5 opacity-10 bg-[#686f82] rounded-sm" />
                <div className="w-12 h-1.5 opacity-10 bg-[#686f82] rounded-sm" />
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-4 inline-flex">
              <SlidingImage
                src="/img/category-four.webp"
                alt="Category Four"
                width="112px"
                height="112px"
                delay={1500}
              />
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="w-24 h-1.5 opacity-10 bg-[#686f82] rounded-sm" />
                <div className="w-12 h-1.5 opacity-10 bg-[#686f82] rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
