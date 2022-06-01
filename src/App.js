import Stars from "./components/UI/Stars";
import { Fragment } from "react";
import AllRoutes from './routes/AllRoutes';

function App () {
    return (
        <Fragment>
            <Stars numberOfStars="500" maxDimension="6" />
            <AllRoutes />
        </Fragment>
    );
}

export default App;
