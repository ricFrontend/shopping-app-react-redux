import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import ItemList from './itemList.jsx'

const App = ({ posts, dispatch }) => {
	// let items = posts.map(function(post, i){
	//                 return <div key={i} >{post.name}</div>
	//             })
	let items = posts.map(function(post, i) {
            //return <itemList key={i} >{post.name}</itemList>
            return <ItemList key={i} product={post} dispatch={dispatch}/>
	})

	return (<div>
			<div className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div className="navbar-header pull-left">     
						<ul className="nav navbar-nav">
				            <li><Link to="/">Productos</Link></li>
				            <li><Link to="/">Producto recomendado</Link></li>
				        </ul>
			        </div>
				</div>
			</div><br /><br /><br />
			<div>
				{items}
			</div>
			
		</div>)
}

// Conectar un componente a store
function mapStateToProps(state) {
	return {
		loaded: state.productsReducer.loading,
		posts:state.productsReducer.products
	}
}
const AppView = connect(mapStateToProps)(App)

module.exports = AppView