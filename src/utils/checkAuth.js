import { navigate } from "svelte-navigator";
import { ROUTES } from "@settings";

function checkAuth(token=undefined) {
    if ( !token ) {
        navigate(ROUTES.singIn);
        return;
    }

    navigate(ROUTES.home);
}

export default checkAuth;