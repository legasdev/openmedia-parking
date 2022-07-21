import { SETTINGS, FIREBASE_ENDPOINTS } from "@settings";

/**
 * Send request to firebase
 *
 * @param {string} endpoint
 * @param {array<{name:string, value:string}>} [data=[]]
 * @param {string} [method='POST']
 * @param {object} [headers={}]
 * @returns {Promise<Response>}
 */
async function sendRequest(endpoint, data=[], method='POST', headers={}) {
    return fetch(endpoint, {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        body: JSON.stringify({
            ...data.reduce((info, field) => ({
                ...info,
                [field.name]: field.value,
            }), {}),
        }),
    });
}

const authAPI = {

    /**
     * SignIn request
     *
     * @param {Object} data
     * @param {string} data.login
     * @param {string} data.password
     * @returns {Promise<Response>}
     */
    signIn: async function signIn(data) {
        const endpointUrl = `${SETTINGS.firebaseAPI}${FIREBASE_ENDPOINTS.signIn}?key=${SETTINGS.firebaseKey}`;
        const requestData = [
            ...data,
            {
                name: 'returnSecureToken',
                value: true,
            }
        ];
        return sendRequest(endpointUrl, requestData);
    },

    /**
     * Get user data from backend
     *
     * @param {string} token
     * @returns {Promise<Response>}
     */
    getUserData: function getUserData(token) {
        const endpointUrl = `${SETTINGS.firebaseAPI}${FIREBASE_ENDPOINTS.getUserData}?key=${SETTINGS.firebaseKey}`;
        const data = [{
            name: 'idToken',
            value: token,
        }];
        return sendRequest(endpointUrl, data);
    },
};

export default authAPI;