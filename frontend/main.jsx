import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import { Provider} from 'react-redux'
import { createStore } from 'redux'

import { Router, Route, browserHistory, Link } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import request from 'browser-request'
import AppView from './views/app.jsx'
import Reducers from './reducers/index.jsx'


let fetchProductData = function() {
	let producto = store.getState()

	store.dispatch({
		type: 'LOADING_PRODUCTS'
	})

	request.get({
		uri: '/products',
		json: true
	}, function(err, res, body){
		if(err){return console.log('Couldn\'t load ', err)}
		
		const posts = body
		store.dispatch({
			type: 'LOADED_PRODUCTS',
			posts
		})
	})
}

// Creamos un store
let store = createStore(Reducers)

const history = syncHistoryWithStore(browserHistory, store)

history.listen(location => {
	const app = location.pathname.replace('/','')
	fetchProductData()
})

// Rendereamos
render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={AppView}></Route>
		</Router>
	</Provider>,
	document.getElementById('root')
)
