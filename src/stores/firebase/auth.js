import { writable } from "svelte/store";
import { getAuth } from "firebase/auth";

function createAuth() {
  const { subscribe } = writable(getAuth());

  return {
    subscribe,
  };
}

const fbAuth = createAuth();

export default fbAuth;