import "./Star.css";

const Star = (props: any): any => {
  // Create inline styly depended on the props given
  const inlineStyle = {
    width: props.dimension + "px",
    height: props.dimension + "px",
    opacity: props.opacity,
    top: props.position.posY,
    left: props.position.posX,
  };

  return <div className="star" style={inlineStyle}></div>;
};

export default Star;
