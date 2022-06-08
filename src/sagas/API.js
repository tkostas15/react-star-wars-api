import handleResponse from "../utils/handleResponse";

export const getFilms = async ({ fetchApi }) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
  };

  // const response = await axios.get(fetchApi);
  const options = { headers };

  const response = await fetch(fetchApi, {
    method: "get",
    options,
  });

  const result = await response.json();

  return result;
};
