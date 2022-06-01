// imports
import { useCallback, useState } from "react";

const useHttp = () => {
    // states
    const [httpError, setHttpError]         = useState(null);
    const [httpIsSending, setHttpIsSending] = useState(true);
    
    // constants
    const msToWait = 6000;
    
    // request function to be used outside
    const httpSendRequest = useCallback(async (requestConfig, dataHandler) => {
        try {
            // init states at the start of sending request
            setHttpIsSending(true);
            setHttpError(null);
            
            // fetch timeout
            const msToTimeout     = (requestConfig.timeout) ? requestConfig.timeout : msToWait;
            const abortController = new AbortController();
            const timeoutId       = setTimeout(() => {abortController.abort()}, msToTimeout);
            
            // send request
            const httpResponse = await fetch(requestConfig.url, {
                method : (requestConfig.method) ? requestConfig.method : 'GET',
                headers: (requestConfig.headers) ? requestConfig.headers : {},
                body   : (requestConfig.body) ? requestConfig.body : null,
                signal : abortController.signal,
            });
            clearTimeout(timeoutId);
            
            // if error then throw
            if (!httpResponse.ok) throw new Error('Request failed!');
            
            // else collect data returned in json format
            const responseData = await httpResponse.json();
            dataHandler(responseData);
        } catch (error) {
            const errorMessageToReturn = (error.name === 'AbortError') ? 'abort' : 'error';
            setHttpError(errorMessageToReturn);
        }
        setHttpIsSending(false);
    }, [msToWait]);
    
    return {
        httpIsSending,
        httpError,
        httpSendRequest,
    };
};

export default useHttp;