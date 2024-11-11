import React from "react";

const MovingBorder = ({ children }) => {
  const [className, setClassName] = React.useState("moving-border");
  const onRest = () => setClassName("moving-border overflow-hidden");
  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, { onRest: onRest });
  });
  return (
    <div className={className}>
      <div className="inner">{childrenWithProps}</div>
    </div>
  );
};

export default MovingBorder;
