import { applyMiddleware, createStore } from 'redux'
import { logger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import { createPromise } from 'redux-promise-middleware'
import reducer from './reducer'
import middleware from './middleware'
export const history = createBrowserHistory()

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history)

const getMiddleware = () => {
    return applyMiddleware(
        myRouterMiddleware,
        thunk,
        createPromise({
            promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'],
        }),
        middleware.auth,
        logger
    )
}

export const store = createStore(reducer(history), getMiddleware())
