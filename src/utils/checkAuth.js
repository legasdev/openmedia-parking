import { navigate } from "svelte-navigator";
import { ROUTES } from "@settings";

function checkAuth(userIsLoggedIn=false) {
    if ( !userIsLoggedIn ) {
        navigate(ROUTES.singIn);
        return;
    }

    navigate(ROUTES.home);
}

export default checkAuth;