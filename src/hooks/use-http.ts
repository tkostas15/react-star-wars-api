// imports
import { useCallback, useState } from "react";

const useHttp = () => {
  // states
  const [httpError, setHttpError] = useState("");
  const [httpIsSending, setHttpIsSending] = useState(true);

  // constants
  const msToWait = 6000;

  // request type
  interface RequestType {
    timeout?: number;
    url: string;
    method?: string;
    headers?: HeadersInit;
    body?: BodyInit | null;
    signal?: AbortSignal;
  }

  // request handler type

  // request function to be used outside
  const httpSendRequest = useCallback(
    async (requestConfig: RequestType, dataHandler: any) => {
      try {
        // init states at the start of sending request
        setHttpIsSending(true);
        setHttpError("");

        // fetch timeout
        const msToTimeout = requestConfig.timeout
          ? requestConfig.timeout
          : msToWait;
        const abortController = new AbortController();
        const timeoutId = setTimeout(() => {
          abortController.abort();
        }, msToTimeout);

        // send request
        const httpResponse = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? requestConfig.body : null,
          signal: abortController.signal,
        });
        clearTimeout(timeoutId);

        // if error then throw
        if (!httpResponse.ok) throw new Error("Request failed!");

        // else collect data returned in json format
        const responseData = await httpResponse.json();
        dataHandler(responseData);
      } catch (error) {
        if (error instanceof Error) {
          const errorMessageToReturn =
            error.name === "AbortError" ? "abort" : "error";
          setHttpError(errorMessageToReturn);
        }
        setHttpError("error");
      }
      setHttpIsSending(false);
    },
    [msToWait]
  );

  return {
    httpIsSending,
    httpError,
    httpSendRequest,
  };
};

export default useHttp;
