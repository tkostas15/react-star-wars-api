const handleResponse = async (request) => {
  // https://github.com/github/fetch/issues/268
  // we use text instead of json. API returns an empty response
  // with 200 http status code that triggers an exception
  // using text fixes this

  // ! keep this for  debugging
  // throw new Error(JSON.stringify({
  //   errors: ['No authorized user. Cookie expired or not exists, please, login again.'],
  //   result: 'test'
  // }));

  if (request.status >= 400 && request.json) {
    let errors = await request.json();

    errors.httpStatus = request.status;
    throw new Error(JSON.stringify(errors));
  } else {
    if (request.text) {
      const reply = await request.text();
      return reply ? JSON.parse(reply) : {};
    }

    return request;
  }
};

export default handleResponse;
