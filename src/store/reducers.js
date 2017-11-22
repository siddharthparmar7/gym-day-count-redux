import C from '../constants'
import { combineReducers } from 'redux'

export const allGymDays = (state=[], action) => {
    switch(action.type){
        case C.ADD_DAY:
            const hasDayAlready = state.some((gymDay) => gymDay.date === action.payload.date)
            return (hasDayAlready) ? state:
                [
                    ...state,
                    gymDay(null, action)
                ]
        
        case C.REMOVE_DAY:
            return state.filter((gymDay) => gymDay.date !== action.payload)
        default:
            return state
    }
}

export const goal = (state = 10, action) => 
    (action.type === C.SET_GOAL) ? parseInt(action.payload) : state

export const gymDay = (state = null, action) =>
    (action.type === C.ADD_DAY) ? action.payload : state

export const fetching = (state = false, action) => {
    switch(action.type){

        case C.FETCH_LOCATION_NAME:
            return true

        case C.CANCEL_FETCHING:
            return false

        case C.CHANGE_SUGGESTIONS:
            return false

        default:
            return state
    }
}

export const suggestions = (state = [], action) => {
    switch(action.type){

        case C.CLEAR_SUGGESTIONS:
            return []

        case C.CHANGE_SUGGESTIONS:
            return action.payload

        default:
            return state
    }
}

export const errors = (state = [], action) => {
    switch(action.type){

        case C.ADD_ERROR: 
            return [
                ...state, 
                action.payload
            ]

        case C.CLEAR_ERROR:
            return state.filter((msg, index) => index !== action.payload)

        default: 
            return state
    }
}

// exporting one reducer using Redux
export default combineReducers({
    allGymDays,
    goal,
    errors,
    locations: combineReducers({
        suggestions,
        fetching
    })
})