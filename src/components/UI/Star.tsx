import "./Star.css";
import { ReactElement } from "react";
import { SingleStarProps } from "../../types/AllTypes";

const Star: React.FC<SingleStarProps> = ({
  dimension,
  opacity,
  position,
}): ReactElement => {
  // Create inline styly depended on the props given
  const inlineStyle = {
    width: dimension + "px",
    height: dimension + "px",
    opacity: opacity,
    top: position.posY,
    left: position.posX,
  };

  return <div className="star" style={inlineStyle}></div>;
};

export default Star;
