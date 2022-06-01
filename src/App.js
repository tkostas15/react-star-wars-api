import Stars from "./components/UI/Stars";
import { Fragment, useEffect } from "react";
import AllRoutes from "./routes/AllRoutes";
import { uiInitializationStart } from "./store/uiInitialization";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiInitializationStart());
  }, [dispatch]);

  return (
    <Fragment>
      <Stars numberOfStars="500" maxDimension="6" />
      <AllRoutes />
    </Fragment>
  );
}

export default App;
