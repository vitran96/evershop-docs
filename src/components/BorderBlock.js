import React from "react";

export default function BorderBlock({
  children,
  backgroundColor,
  bigRadius = true,
  className = "",
}) {
  const blockClassName = bigRadius
    ? `rounded-[24px] lg:rounded-[40px] ${className}`
    : `rounded-[16px] lg:rounded-[20px] ${className}`;
  return (
    <div
      className={`border ${blockClassName} p-2 border-Neutrals-06`}
      style={{
        backgroundColor: backgroundColor || "#fff",
      }}>
      {children}
    </div>
  );
}
