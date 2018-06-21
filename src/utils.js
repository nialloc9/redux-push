import PushNote from "push.js/bin/push";

/**
 * requests notification permission from the user
 * @param {func} onGranted
 * @param {fun} onDenied
 * @returns {void}
 */
export const onRequestPermission = PushNote.Permission.request;

/**
 * checks if user has accepted push notificaions
 * @returns {boolean}
 */
export const onCheckPermission = PushNote.Permission.has;
