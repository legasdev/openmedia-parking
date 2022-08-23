import { derived } from "svelte/store";
import userInformation from "./userInformation";

function statusMaker(informationByUser) {
  return !!informationByUser;
}

const userIsLoggedIn = derived(userInformation, statusMaker, false);

export default userIsLoggedIn;