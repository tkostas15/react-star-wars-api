// imports
import Header from "../components/Header/Header";
import { useState, useEffect, Fragment } from "react";
import FilmsTable from "../components/FilmsTable/FilmsTable";
import Spinner from "../components/UI/Spinner";
import loadSpinner from "../icons/darth_vader_loader.png";
import useHttp from '../hooks/use-http';
import Modal from "../components/UI/Modal";
import Footer from "../components/Footer/Footer";

const Films = () => {
    // States
    const [films, setFilms] = useState([]);
    const [retry, setRetry] = useState(false);
    
    // set up (initialize) http hook to fetch data
    const {httpIsSending, httpError, httpSendRequest} = useHttp();
    
    // fetch data with useEffect
    useEffect(() => {
        setRetry(false);
        
        // fetch data handler
        const fetchDataHandler = (films) => {
            const tempFilms = films.results.map((film) => {
                return {
                    id           : film.episode_id,
                    title        : film.title,
                    opening_crawl: film.opening_crawl,
                    director     : film.director,
                    producer     : film.producer,
                    release_date : film.release_date,
                    url          : film.url,
                };
            });
            setFilms(tempFilms);
        };
        
        // send the request
        httpSendRequest({url: "https://swapi.dev/api/films/"}, fetchDataHandler);
    }, [httpSendRequest, retry]);
    
    // error values
    let errorDescription;
    if (httpError) {
        errorDescription = (httpError === 'abort') ?
                           <div>
                               <p>We have been waiting for an eternity to reach the star.</p>
                               <p>Captain aborted the mission!</p>
                           </div> :
                           <div>
                               <p>Spacecraft's electronics crashed :(</p>
                           </div>;
    }
    
    // retry
    const retryHandler = () => {setRetry(true)};
    
    // return
    return <Fragment>
        <Header hasBack={0} />
        <main className="main">
            {!httpIsSending && !httpError &&
             <FilmsTable films={films} />}
            {!httpIsSending && httpError &&
             <Modal description={errorDescription} button='Retry' onClick={retryHandler} />}
            {httpIsSending &&
             <Spinner icon={loadSpinner} ms="1500" />}
        </main>
        <Footer />
    </Fragment>;
};

export default Films;
