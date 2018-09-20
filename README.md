<img src="https://raw.githubusercontent.com/nialloc9/redux-push/master/assets/images/logo.png" alt='redux-push logo' width="100">

# Redux Push

Redux middleware for push notifications.

### Latest stable release

- 1.1.0

### Usage

- install package

        $ npm i --save redux-push

* import middleware
  import reduxPush from 'redux-push';
* add to middleware

        import { applyMiddleware } from "redux";
        const middleware = applyMiddleware([reduxPush])

* dispatch push requests from actions
  import { PUSH_SET } from 'redux-push';
  dispatch({
  type: PUSH_SET,
  payload: {
  message: `hello world`,
  visibility: 'show'
  }
  });

### Changing config

The configuration can be altered by passing a config object inside the payload object.

        import  { PUSH_SET } from 'redux-push';
        import newIcon from './newIcon.png';

        dispatch({
                    type: PUSH_SET,
                    payload: {
                         message: `hello world`,
                         visibility: 'onPage',
                         config: {
                         icon: newIcon,
                         timeout: 8000,
                         onClick: window.focus()
                            }
                    }
                });

### Visibility

There are 3 types of ways to show the push notification.

- show - when user is on the page or on a different page. This is the default behaviour
- onPage - show only when user is on page.
- hidden - show only when user is on a different page.

### Manuelly request permission

In some circumstances you may wish to manuelly request permission to send notifications. This can be acheived by using the onRequestPermission helper function. This takes 2 callbacks as arguements that will be called if granted or if rejected.

        import  { onRequestPermission } from 'redux-push';

        onRequestPermission(() => console.log('granted'), () => console.log('rejected'))

### Check if user has granted permission to notify

In some circumstances you may wish to know has the user already granted permissions to send notifications. This can be achieved with the onCheckPermission helper function. This returns a boolean representing the users notification permissions. True for granted and
false for rejected.

        import  { onCheckPermission } from 'redux-push';

        onCheckPermission()

### open notication settings (CHROME ONLY)

You may want to allow the users quick access to their browsers notification settings.

        import  { CHROME_SETTINGS_PATH } from 'redux-push';

        <a href={CHROME_SETTINGS_PATH}>click here</a>

### Notes

Push notifications will not work on http on chrome:
https://www.chromestatus.com/feature/5759967025954816

Sample logo in assets created using: https://logomakr.com/

### Testing

- Run the tests
  $ npm run test
