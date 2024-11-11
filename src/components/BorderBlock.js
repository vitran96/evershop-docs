import React from "react";

export default function BorderBlock({
  children,
  backgroundColor,
  bigRadius = true,
  className = "",
}) {
  const blockClassName = bigRadius
    ? `rounded-[40px] ${className}`
    : `rounded-[20px] ${className}`;
  return (
    <div
      className={`border ${blockClassName} p-2 border-[#E6E8EC]`}
      style={{
        backgroundColor: backgroundColor || "#fff",
      }}>
      {children}
    </div>
  );
}
