import React from "react";
import Label from "./Label";

export default function BlockHead({
  label,
  heading,
  subheading,
  alignment = "center",
}) {
  const headingClassName =
    alignment === "center"
      ? `text-center ${heading.className}`
      : `text-left ${heading.className}`;
  const subHeadingClassName =
    alignment === "center"
      ? `text-center ${subheading.className}`
      : `text-left ${subheading.className}`;
  const className =
    alignment === "center"
      ? "flex flex-col gap-3 justify-items-center items-center mb-8 md:mb-[68px]"
      : "flex flex-col gap-3 justify-items-start items-start mb-8 md:mb-[68px]";
  return (
    <div className={className}>
      <div className="text-center">
        <Label label={label} />
      </div>
      <h2 className={`${headingClassName} largest mt-1 max-w-[780px] mb-0`}>
        {heading.text}
      </h2>
      <p className={`${subHeadingClassName} max-w-[790px] text-xl mb-0`}>
        {subheading.text}
      </p>
    </div>
  );
}
