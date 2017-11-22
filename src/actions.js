import C from './constants'
import fetch from 'isomorphic-fetch'

export function addDay (location, date, freeEx=false, dayOff=false){
    return {
        type: C.ADD_DAY,
        payload: {location, date, freeEx, dayOff}
    }
}

export const removeDay = function(date) {
    return{
        type: C.REMOVE_DAY,
        payload: date
    }
}

export const setGoal = (goal) => ({
    type: C.SET_GOAL,
    payload: goal
})

export const addError = (error) => ({
    type: C.ADD_ERROR,
    payload: error
})

export const clearError = (index) => ({
    type: C.CLEAR_ERROR,
    payload: index
})

export const changeSuggestions = (suggestions) => ({
    type:C.CHANGE_SUGGESTIONS,
    payload: suggestions
})

export const clearSuggestions = () => ({
    type: C.CLEAR_SUGGESTIONS
})

export const randomGoals = () => (dispatch, getState) => {

    if(!getState().locations.fetching) {

        dispatch({
        type: C.FETCH_LOCATION_NAME
        })

        setTimeout(() => {
            dispatch({
                type: C.CANCEL_FETCHING
            }) 
        }, 1500);
    }
}

// if you dont want to use getState you can remove it but 
// good to have since its a thunk
export const suggestLocations = (value) => (dispatch, getState) => {
    dispatch({
        type: C.FETCH_LOCATION_NAME,
    })

    fetch('http://localhost:3333/resorts/' + value)
         .then(response => response.json())
         .then(suggestions => {
             dispatch({
                 type: C.CHANGE_SUGGESTIONS,
                 payload: suggestions
             })
         })
        .catch(error => {
            dispatch(
                addError(error.message)
            )

            dispatch({
                type: C.CANCEL_FETCHING
            })

            console.log(`
                ${getState().errors}
            `)
        })
}