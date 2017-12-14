import PushNote from "push.js/bin/push";
import { PUSH_SET } from "./constants/push";
import defaultConfig from "./config";

/**
 * @param dispatch
 * @param getState
 * @constructor
 */
const push = ({ dispatch, getState }) => next => action => {
    const { type, payload } = action;

    PushNote.Permission.request();

    switch (type) {
        case PUSH_SET:
            const { message, visibility = "show", config } = payload;

            const pushConfig = {
                ...defaultConfig,
                ...config
            };

            //show when user is away
            if (document.visibilityState === "hidden" && visibility === "hidden") {
                PushNote.create(message, pushConfig);
            }

            //show when user is on page
            if (document.visibilityState !== "hidden" && visibility === "onPage") {
                PushNote.create(message, pushConfig);
            }

            //show when user is away or on page
            if (visibility === "show") {
                PushNote.create(message, pushConfig);
            }

            break;
        default:
            return next(action);
    }

    return next(action);
};

export default push;
