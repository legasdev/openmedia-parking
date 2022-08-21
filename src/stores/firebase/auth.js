import { writable } from "svelte/store";
import { getAuth } from "firebase/auth";

function createAuth() {
  const { update, set, subscribe } = writable(getAuth());

  return {
    update,
    set,
    subscribe,
  };
}

const fbAuth = createAuth();

export default fbAuth;