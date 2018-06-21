import PushNote from "push.js/bin/push";

const {
    Permission: { request, has }
} = PushNote;

/**
 * requests notification permission from the user
 * @param {func} onGranted
 * @param {fun} onDenied
 * @returns {void}
 */
export const onRequestPermission = (onGranted, onDenied) => request(onGranted, onDenied);

/**
 * checks if user has accepted push notificaions
 * @returns {boolean}
 */
export const onCheckPermission = () => has();
