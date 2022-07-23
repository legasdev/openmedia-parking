import {
    SETTINGS,
    FIREBASE_ENDPOINTS,
    FIREBASE_DB
} from "@settings";
import {METHODS, sendRequest} from "./utils";

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

        try {
            return await sendRequest({
                endpoint: endpointUrl,
                data: requestData,
                method: METHODS.post,
            });
        } catch(error) {
            throw new Error('Incorrect login or password.');
        }
    },

    /**
     * Exchange a refresh token for an ID token
     *
     * @param {string} refreshToken
     * @returns {Promise<any>}
     */
    exchangeToken: function exchangeToken(refreshToken) {
        const endpointUrl = `${SETTINGS.firebaseSecure}token?key=${SETTINGS.firebaseKey}`;
        const requestData = [
            {
                name: 'refresh_token',
                value: refreshToken,
            },
            {
                name: 'grant_type',
                value: 'refresh_token',
            }
        ];
        return sendRequest({
            endpoint: endpointUrl,
            data: requestData,
            method: METHODS.post,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }, true);
    },
};

export default authAPI;