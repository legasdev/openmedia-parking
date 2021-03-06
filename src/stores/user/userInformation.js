import { derived } from "svelte/store";
import { authInformation } from "@stores/auth";
import { userAPI } from "@api";

/**
 *
 * @param {Object} $authInfo
 * @param {string} $authInfo.idToken A Firebase Auth ID token for the authenticated auth.
 * @param {string} $authInfo.email The email for the authenticated auth.
 * @param {string} $authInfo.refreshToken A Firebase Auth refresh token for the authenticated auth.
 * @param {string} $authInfo.expiresIn The number of seconds in which the ID token expires.
 * @param {string} $authInfo.localId The uid of the authenticated auth.
 * @param {boolean} $authInfo.registered Whether the email is for an existing account.
 * @param {function} set
 */
async function makeUserInformation($authInfo, set) {
    if (!$authInfo) {
        return;
    }

    const usersList = await userAPI.getProfileData($authInfo.idToken);
    const userId = $authInfo.localId;
    set(usersList[userId]);
}

const userInformation = derived(authInformation, makeUserInformation,undefined);

export default userInformation;