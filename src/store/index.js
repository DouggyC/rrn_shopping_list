import { createStore, combineReducers } from 'redux'
import shoppingListReducer from '../reducers/shoppingListReducer'

const rootReducer = combineReducers({
  shoppingListReducer
})

const configureStore = () => createStore(rootReducer)

export default configureStore