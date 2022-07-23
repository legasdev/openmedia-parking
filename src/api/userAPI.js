import {sendRequest} from "./utils";
import { SETTINGS, FIREBASE_DB } from "@settings";

const userAPI = {

    getProfileData: function getProfileData(token) {
        const endpointUrl = `${SETTINGS.firebaseDB}${FIREBASE_DB.users}.json?auth=${token}`;
        return sendRequest({
            endpoint: endpointUrl,
        });
    },

};

export default userAPI;