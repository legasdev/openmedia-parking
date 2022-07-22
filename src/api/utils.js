const METHODS = {
  get: 'GET',
  post: 'POST',
};

/**
 * Send request to firebase
 *
 * @param {object} options
 * @param {string} options.endpoint
 * @param {array<{name:string, value:string}>} [options.data=[]]
 * @param {string} [options.method='POST']
 * @param {object} [options.headers={}]
 * @returns {Promise<Response>}
 */
async function send({
 endpoint,
 data = [],
 method = METHODS.get,
 headers = {}
}) {
  return fetch(
    endpoint,
    initFetchConfig(method, headers, data)
  );
}

function initFetchConfig(method, headers, data) {
  const config = {
    method,
    headers,
  };

  if (method === METHODS.post) {
    config.body = JSON.stringify({
      ...data.reduce((info, field) => ({
        ...info,
        [field.name]: field.value,
      }), {}),
    });
  }

  return config;
}

async function sendRequest(requestData) {
  const response = await send(requestData);
  const responseData = await response.json();
  const responseWithError = !response.ok || responseData.error;

  if ( responseWithError ) {
    throw new Error('Incorrect login or password.');
  }

  return responseData;
}

export {
  sendRequest,
  METHODS,
};