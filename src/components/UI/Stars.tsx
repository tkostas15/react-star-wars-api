import "./Stars.css";
import Star from "./Star";

const Stars = (props: any): any => {
  let starsContent = [];

  // Get random number
  const getRandomNumberWithTopBoundary = (bdr: number): number => {
    return Math.floor(Math.random() * bdr) + 1;
  };

  // For the number of stars wanted, create them
  let dimensionOfStar, opacityOfStar, positionOfStar;
  for (let counter = 1; counter <= props.numberOfStars; counter++) {
    // Calculate each star's options (dimensions, opacity, position)
    dimensionOfStar = getRandomNumberWithTopBoundary(props.maxDimension);
    opacityOfStar = Math.random();
    positionOfStar = {
      posX: getRandomNumberWithTopBoundary(window.innerWidth),
      posY: getRandomNumberWithTopBoundary(window.innerHeight),
    };

    // Store each star in an array
    starsContent.push(
      <Star
        key={counter}
        dimension={dimensionOfStar}
        opacity={opacityOfStar}
        position={positionOfStar}
      />
    );
  }

  return <div className="stars">{starsContent}</div>;
};

export default Stars;
