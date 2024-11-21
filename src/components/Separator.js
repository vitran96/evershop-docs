import React from "react";

export default function Separator({ isFirst = false }) {
  return (
    <div
      className={
        isFirst
          ? "separator mx-3 mb-16 md:mx-16 md:mb-20"
          : "separator mx-3 my-16 md:mx-16 md:my-20"
      }></div>
  );
}
