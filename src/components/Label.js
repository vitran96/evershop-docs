import React from "react";

export default function Label({ label }) {
  return (
    <div className="text-base text-primary leading-6 text-center flex justify-center">
      <div className="px-4 py-1 bg-primary-02 rounded-2xl ">{label}</div>
    </div>
  );
}
