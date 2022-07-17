import { FIREBASE_ENDPOINTS } from "@src/firebaseEndpoints";
import { SETTINGS } from "@src/settings";

const authAPI = {

    /**
     * SignIn request
     *
     * @param {Object} data
     * @param {string} data.login
     * @param {string} data.password
     *
     * @returns {Promise<Response>}
     */
    signIn: function signIn(data) {
        const endpointUrl = `${SETTINGS.firebaseAPI}${FIREBASE_ENDPOINTS.signIn}?key=${SETTINGS.firebaseKey}`;
        return fetch(endpointUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...data.reduce((info, field) => ({
                    ...info,
                    [field.name]: field.value,
                }), {}),
                returnSecureToken: true,
            }),
        })
    },

};

export default authAPI;