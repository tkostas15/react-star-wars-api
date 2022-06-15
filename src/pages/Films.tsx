// imports
import Header from "../components/Header/Header";
import { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilmsTable from "../components/FilmsTable/FilmsTable";
import Spinner from "../components/UI/Spinner";
import spinnerIcon from "../icons/darth_vader_loader.png";
import Modal from "../components/UI/Modal";
import Footer from "../components/Footer/Footer";
import { fetchFilmsStart } from "../store/filmsSlice";
import {
  getFilms,
  getIsSending,
  getError,
  getFetched,
} from "../store/filmsSlice";
import { FilmObject } from "../types/AllTypes";

const Films = () => {
  // states
  const [retry, setRetry] = useState(false);

  // retrieve slice states
  const fetchedFilms: Array<FilmObject> = useSelector(getFilms);
  const httpIsSending: boolean = useSelector(getIsSending);
  const httpError: string = useSelector(getError);
  const httpAlreadyFetched: boolean = useSelector(getFetched);

  // dispatch slice action
  const dispatchAction = useDispatch();

  // fetch movies
  useEffect(() => {
    const apiToUse = { api: "https://swapi.dev/api/films/" };
    dispatchAction(fetchFilmsStart(apiToUse));
  }, [dispatchAction, retry]);

  // error values
  let errorDescription;
  if (httpError) {
    errorDescription =
      httpError === "abort" ? (
        <div>
          <p>We have been waiting for an eternity to reach the star.</p>
          <p>Captain aborted the mission!</p>
        </div>
      ) : (
        <div>
          <p>Spacecraft's electronics crashed</p>
        </div>
      );
  }

  // retry
  const retryHandler = () => {
    setRetry(!retry);
  };

  // return
  return (
    <Fragment>
      <Header hasBack={0} />
      <main className="main">
        {!httpIsSending && !httpError && httpAlreadyFetched && (
          <FilmsTable films={fetchedFilms} />
        )}
        {!httpIsSending && httpError && (
          <Modal
            description={errorDescription}
            button="Retry"
            onClick={retryHandler}
          />
        )}
        {httpIsSending && <Spinner icon={spinnerIcon} ms="1500" />}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Films;
