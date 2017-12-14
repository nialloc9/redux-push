Redux Push
=======

Redux middleware for push notifications.

### Usage
    
- install package

        $ npm i --save redux-push
        
- import middleware
        
        import reduxPush from 'redux-push';
        
- add to middleware

        import { applyMiddleware } from "redux";
        const middleware = applyMiddleware([reduxPush])
    
- dispatch push requests from actions
        
        import  { PUSH_SET } from 'redux-push';
        
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

### Notes
Push notifications will not work on http on chrome:
https://www.chromestatus.com/feature/5759967025954816

Sample logo in assets created using: https://logomakr.com/

### Testing
- Run the tests
        
        $ npm run test