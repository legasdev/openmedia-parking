import { writable } from "svelte/store";

const LS_TOKEN_NAME = 'om-parking-auth';

function createAuthInformation() {
    const authFromSave = JSON.parse(localStorage.getItem(LS_TOKEN_NAME)) || undefined;
    const { subscribe, set, update } = writable(authFromSave);

    /**
     *
     * @param {Object} authInfo
     * @param {string} authInfo.idToken A Firebase Auth ID token for the authenticated auth.
     * @param {string} authInfo.email The email for the authenticated auth.
     * @param {string} authInfo.refreshToken A Firebase Auth refresh token for the authenticated auth.
     * @param {string} authInfo.expiresIn The number of seconds in which the ID token expires.
     * @param {string} authInfo.localId The uid of the authenticated auth.
     * @param {boolean} authInfo.registered Whether the email is for an existing account.
     */
    function authInfoSet(authInfo) {
        localStorage.removeItem(LS_TOKEN_NAME);
        set(authInfo);

        if ( !authInfo ) {
            return;
        }

        localStorage.setItem(LS_TOKEN_NAME, JSON.stringify(authInfo));
    }

    return {
        subscribe,
        set: authInfoSet,
        update,
    };
}

const authInformation = createAuthInformation();

export default authInformation;