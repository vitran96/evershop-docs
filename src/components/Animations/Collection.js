import React from "react";
import FadeInOutSlides from "./FadeInOutSlides";
import CollectionOne from "./CollectionOne";
import CollectionTwo from "./CollectionTwo";

const Collection = () => {
  return (
    <div className="h-64 w-full rounded-l-2xl p-6 bg-white ">
      <FadeInOutSlides
        slides={[{ content: CollectionTwo }, { content: CollectionOne }]}
        loop={true}
      />
    </div>
  );
};

export default Collection;
