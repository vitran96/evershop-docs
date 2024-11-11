import React from "react";
import FadeInOutSlides from "./FadeInOutSlides";
import CollectionOne from "./CollectionOne";
import CollectionTwo from "./CollectionTwo";

const Collection = () => {
  return (
    <div className="h-64 w-full rounded-l-2xl shadow-lg p-6 bg-white">
      <FadeInOutSlides
        slides={[{ content: CollectionOne }, { content: CollectionTwo }]}
        loop={true}
      />
    </div>
  );
};

export default Collection;
