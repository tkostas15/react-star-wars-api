// imports
import { useNavigate, useParams } from "react-router-dom";
import FilmInfo from '../components/FilmInfo/FilmInfo';
import { Fragment, useEffect, useState } from "react";
import useHttp from "../hooks/use-http";
import Spinner from "../components/UI/Spinner";
import loadSpinner from "../icons/darth_vader_loader.png";
import Header from "../components/Header/Header";
import Modal from "../components/UI/Modal";
import Footer from "../components/Footer/Footer";

const Film = (props) => {
    // get router parameters
    const routerParams = useParams();
    
    // states
    const [filmInfo, setFilmInfo] = useState(null);
    const [retry, setRetry]       = useState(false);
    
    // film id
    const filmId = routerParams.filmId;
    
    // history
    const history = useNavigate();
    
    // set up (initialize) http hook to fetch data
    const {httpIsSending, httpError, httpSendRequest} = useHttp();
    
    // fetch data with useEffect
    useEffect(() => {
        setRetry(false);
        
        // film info handler
        const filmInfoHandler = (data) => {
            const tempInfo = [{
                id           : filmId,
                episode      : data.episode_id,
                title        : data.title,
                director     : data.director,
                release_date : data.release_date,
                created      : data.created,
                opening_crawl: data.opening_crawl,
                producer     : data.producer,
                starships    : data.starships,
                vehicles     : data.vehicles,
                characters   : data.characters,
                species      : data.species,
                planets      : data.planets,
                edited       : data.edited,
            }];
            setFilmInfo(tempInfo);
        };
        
        // send request
        httpSendRequest({url: 'https://swapi.dev/api/films/' + filmId}, filmInfoHandler);
    }, [httpSendRequest, retry, filmId]);
    
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
            {!httpIsSending && !httpError &&
             <FilmInfo info={filmInfo} />}
            {!httpIsSending && httpError &&
             <Modal description={errorDescription} button='retry' onClick={retryHandler} />}
            {httpIsSending &&
             <Spinner icon={loadSpinner} ms="1500" />}
        </main>
        <Footer />
    </Fragment>;
};

export default Film;