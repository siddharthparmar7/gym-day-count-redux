import storeFactory from './store'

import { addDay, 
         removeDay, 
         setGoal,
         addError,
         clearError,
         changeSuggestions,
         clearSuggestions,
         randomGoals,
         suggestLocations } from './actions'

const store = storeFactory()

const state = store.getState()
store.dispatch(
    suggestLocations("hea")
)


// const initialState = (localStorage['redux-store']) ?
//                      JSON.parse(localStorage['redux-store']) :
//                      {}
// const saveState = () => {
//     const state = JSON.stringify(store.getState())
//     localStorage['redux-store'] = state
// }

// store.dispatch(
//     randomGoals()
// )

// store.dispatch(
//     randomGoals()
// )

// store.dispatch(
//     addDay('Ontario', '1-1-2018', true, false)
// )

// store.dispatch(
//     removeDay('1-1-2018')
// )

// store.dispatch(
//     setGoal(100)
// )

// store.dispatch(
//     addError('something went wrong')
// )

// expect(store.getState().errors).toEqual(['something went wrong'])

// console.log(`
//     addError() create action works!!
// `)

// store.dispatch(
//     clearError(0)
// )

// expect(store.getState().errors).toEqual([])

// console.log(`
//     clearError() create action works!!
// `)

// store.dispatch(
//     changeSuggestions(['one', 'two', 'three'])
// )

// expect(store.getState().locations.suggestions).toEqual(['one', 'two', 'three'])

// console.log(`
//     changeSuggestions() create action works!!
// `)

// store.dispatch(
//     clearSuggestions()
// )

// expect(store.getState().locations.suggestions).toEqual([])

// console.log(`
//     clearSuggestions() create action works!!
// `)