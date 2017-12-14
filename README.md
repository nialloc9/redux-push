Helpers
=======

This setup has been tested on Ubuntu 16.04.

For version updates please [see version update documentation.](./docs/UPDATES.md) 
 
### Notes


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
                        message: `hello`,
                        visibility: 'show'
                    }
        });

       
### Testing
- Run the tests
        
        $ npm run test