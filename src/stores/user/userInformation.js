import { writable } from "svelte/store";

const LS_TOKEN_NAME = 'om-parking-user';

function normalizeUserInformation(userInformation={}) {
  if ( userInformation.email ) {
    return userInformation;
  }

  // TODO: Find user by user_id
  return userInformation;
}

function createUserInformation() {
  const userFromSave = localStorage.getItem(LS_TOKEN_NAME) || undefined;
  const { subscribe, set, update } = writable(userFromSave);

  function informationSet(userInformation) {
    const info = normalizeUserInformation(userInformation);

    localStorage.removeItem(LS_TOKEN_NAME);
    set(userInformation);

    if ( !userInformation ) {
      return;
    }

    localStorage.setItem(LS_TOKEN_NAME, userInformation);
  }

  return {
    subscribe,
    set: informationSet,
    update,
  };
}

const userInformation = createUserInformation();

export default userInformation;