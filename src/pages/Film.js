// imports
import { useNavigate, useParams }        from "react-router-dom";
import FilmInfo                          from '../components/FilmInfo/FilmInfo';
import { Fragment, useEffect, useState } from "react";
import Spinner                           from "../components/UI/Spinner";
import loadSpinner                       from "../icons/darth_vader_loader.png";
import Header                            from "../components/Header/Header";
import Modal                             from "../components/UI/Modal";
import Footer                            from "../components/Footer/Footer";
import { useDispatch, useSelector }      from "react-redux";
import { fetchFilmInfoStart }            from '../store/filmSlice';

const Film = (props) => {
    // get router parameters
    const routerParams = useParams();
    
    // retrieve slice states
    const fetchedInfo        = useSelector((state) => state.filmReducer.fetchedInfo);
    const httpIsSending      = useSelector((state) => state.filmReducer.sending);
    const httpError          = useSelector((state) => state.filmReducer.error);
    const httpAlreadyFetched = useSelector((state) => state.filmReducer.atLeastOneFetch);
    
    // states
    const [retry, setRetry] = useState(false);
    
    // film id
    const filmId = routerParams.filmId;
    
    // history
    const history = useNavigate();
    
    // dispatch action
    const dispatchAction = useDispatch();
    
    // fetch movie's info
    useEffect(() => {
        const apiToUse = {api: 'https://swapi.dev/api/films/' + filmId + '/'};
        dispatchAction(fetchFilmInfoStart(apiToUse));
    }, [dispatchAction, retry, filmId]);
    
    // error values
    let errorDescription;
    if (httpError) {
        errorDescription = (httpError === 'abort') ?
                           <div>Spacecraft could not land on this inhabited land</div> :
                           <div>Error on landing!</div>;
    }
    
    // retry
    const retryHandler = () => {setRetry(true)};
    
    // back handler
    const goBackHandler = () => { history(-1); };
    
    // return info at last
    return <Fragment>
        <Header hasBack={1} onClickBack={goBackHandler} />
        <main>
            {!httpIsSending && !httpError && httpAlreadyFetched && <FilmInfo info={fetchedInfo} />}
            {!httpIsSending && httpError && <Modal description={errorDescription} button='retry' onClick={retryHandler} />}
            {httpIsSending && <Spinner icon={loadSpinner} ms="1500" />}
        </main>
        <Footer />
    </Fragment>;
};

export default Film;