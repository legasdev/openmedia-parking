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
 * @param {boolean} [isFormData=false]
 * @returns {Promise<Response>}
 */
async function send({
 endpoint,
 data = [],
 method = METHODS.get,
 headers = {}
}, isFormData=false) {
  return fetch(
    endpoint,
    initFetchConfig(method, headers, data, isFormData)
  );
}

function initFetchConfig(method, headers, data, isFormData) {
  const config = {
    method,
    headers,
  };

  if (method !== METHODS.post) {
    return config;
  }

  if (isFormData) {
    const formData = new FormData();
    for (let i = data.length - 1; i >= 0; i--) {
      formData.append(data[i].name, data[i].value);
    }
    config.body = formData;

  } else {
    config.body = JSON.stringify({
      ...data.reduce((info, field) => ({
        ...info,
        [field.name]: field.value,
      }), {}),
    });
  }

  return config;
}

/**
 *
 * @param {object} requestData
 * @param {string} requestData.endpoint
 * @param {array<{name:string, value:string}>} [requestData.data=[]]
 * @param {string} [requestData.method='POST']
 * @param {object} [requestData.headers={}]
 * @param {boolean} [isFormData=false]
 * @returns {Promise<any>}
 */
async function sendRequest(requestData, isFormData=false) {
  const response = await send(requestData, isFormData);
  const responseData = await response.json();
  const responseWithError = !response.ok || responseData.error;

  if ( responseWithError ) {
    throw new Error(response.statusText);
  }

  return responseData;
}

export {
  sendRequest,
  METHODS,
};