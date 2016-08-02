import React, { PropTypes } from 'react'
import { render } from 'react-dom'

let ItemList = ({product, dispatch}) => {

	return <div>
			<div >
				<h4 onClick={e => {
					dispatch({type: "REMOVE_PRODUCT", id: product.uuid})
				}}>{product.name}</h4>
				<form>
					<input type="number" />
					<button>agregar</button>
				</form>
			</div>
	</div>
}

module.exports = ItemList