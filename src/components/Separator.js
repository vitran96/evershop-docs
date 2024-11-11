import React from "react";

export default function Separator({ isFirst = false }) {
  return (
    <div
      className={
        isFirst ? "separator mx-16 mb-20" : "separator mx-16 my-20"
      }></div>
  );
}
