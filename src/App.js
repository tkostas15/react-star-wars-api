import Stars from "./components/UI/Stars";
import { Fragment } from "react";
import AllRoutes from './routes/AllRoutes';
import {dispatchSaga} from "./store/store";

function App () {
    dispatchSaga({type: 'HELLO'});
    
    return (
        <Fragment>
            <Stars numberOfStars="500" maxDimension="6" />
            <AllRoutes />
        </Fragment>
    );
}

export default App;
