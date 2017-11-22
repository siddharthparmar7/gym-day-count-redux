// middleware
import C from '../constants'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = (store) => (next) => (action) => {

    let result

    console.groupCollapsed(`Dispatching action => ${action.type}`)
    console.log('gym days', store.getState().allGymDays.length)

    result = next(action)

    let { allGymDays, errors, goal, locations} = store.getState()

    console.log(`
        Gym days: ${allGymDays.length}
        goal: ${goal}
        fetching: ${locations.fetching}
        suggestions: ${locations.suggestions}
        errors: ${errors.length}
    `)

    console.groupEnd()

    return result
}

export default (initialState = {}) => {
    return applyMiddleware(thunk, consoleMessages) (createStore) (appReducer, initialState)
}