import { createStore ,combineReducers} from "redux"

import  {counterReducer} from '../redux/reducers/counterReducer'

 const rootReducer = combineReducers({
    x:counterReducer
})

export const myStore  = createStore(rootReducer)