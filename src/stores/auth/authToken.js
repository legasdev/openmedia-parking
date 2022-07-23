import { derived } from "svelte/store";
import authInformation from "./authInformation";

/**
 *
 * @param {Object} $authInfo
 * @param {string} $authInfo.idToken A Firebase Auth ID token for the authenticated auth.
 * @param {string} $authInfo.email The email for the authenticated auth.
 * @param {string} $authInfo.refreshToken A Firebase Auth refresh token for the authenticated auth.
 * @param {string} $authInfo.expiresIn The number of seconds in which the ID token expires.
 * @param {string} $authInfo.localId The uid of the authenticated auth.
 * @param {boolean} $authInfo.registered Whether the email is for an existing account.
 */
function returnAuthToken($authInfo) {
    if ( !$authInfo ) {
        return;
    }

    return $authInfo.idToken;
}

const authToken = derived(authInformation, returnAuthToken, undefined);

export default authToken;
