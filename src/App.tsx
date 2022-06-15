import Stars from "./components/UI/Stars";
import { Fragment } from "react";
import AllRoutes from "./routes/AllRoutes";
import { ReactElement } from "react";

function App(): ReactElement {
  return (
    <Fragment>
      <Stars numberOfStars={500} maxDimension={6} />
      <AllRoutes />
    </Fragment>
  );
}

export default App;
