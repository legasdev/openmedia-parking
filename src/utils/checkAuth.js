import { navigate } from "svelte-navigator";

function checkAuth(token) {
    if ( !token ) {
        navigate('signin');
        return;
    }

    navigate('/');
}

export default checkAuth;