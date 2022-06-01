import Stars from "./components/UI/Stars";
import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Welcome from "./pages/Welcome";
import Film from "./pages/Film";
import Films from "./pages/Films";

function App() {
  return (
    <Fragment>
      <Stars numberOfStars="500" maxDimension="6" />

      <Routes>
        <Route path="/" element={<Navigate to="/welcome" replace/>} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/films" element={<Films />} exact />
        <Route path="/films/:filmId" element={<Film />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
