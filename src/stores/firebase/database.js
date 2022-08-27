import { derived } from "svelte/store";
import { getDatabase } from "firebase/database";

import fbApp from "./app";

function createFBDatabase(app) {
  return getDatabase(app);
}

const fbDatabase = derived(fbApp, createFBDatabase);

export default fbDatabase;
