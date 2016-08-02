
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { productsReducer } from './products.jsx'

let Reducers = combineReducers({
	productsReducer,
	routing: routerReducer
})

module.exports = Reducers