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

        return sendRequest({
            endpoint: endpointUrl,
            data: requestData,
            method: METHODS.post,
        });
    },

    /**
     * Get user data from backend
     *
     * @param {string} token
     * @returns {Promise<Response>}
     */
    getProfile: async function getProfile(token) {
        const endpointUrl = `${SETTINGS.firebaseDB}${FIREBASE_DB.users}.json?auth=${token}`;
        return sendRequest({
            endpoint: endpointUrl,
        });
    },
};

export default authAPI;