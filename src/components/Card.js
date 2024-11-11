import React from "react";

export default function Card({ children, backgroundColor, className }) {
  return (
    <div
      className={`rounded-[32px] ${className}`}
      style={{
        background: backgroundColor || "#fff",
      }}>
      {children}
    </div>
  );
}
