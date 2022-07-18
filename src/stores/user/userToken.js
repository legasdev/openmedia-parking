import { writable } from "svelte/store";

const LS_TOKEN_NAME = 'om-parking-user-token';

function createUserToken() {
    const tokenFromSave = localStorage.getItem(LS_TOKEN_NAME) || undefined;
    const { subscribe, set, update } = writable(tokenFromSave);

    function tokenSet(token) {
        localStorage.removeItem(LS_TOKEN_NAME);
        localStorage.setItem(LS_TOKEN_NAME, token);
        set(token);
    }

    return {
        subscribe,
        set: tokenSet,
        update,
    };
}

const userToken = createUserToken();

export default userToken;