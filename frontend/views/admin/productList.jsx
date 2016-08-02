import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'

import ItemList from './itemList.jsx'


const ProductsList = () => {
	return (
		<div>
			<ItemList></ItemList>
			<ItemList></ItemList>
			<ItemList></ItemList>			
		</div>
	)
}

module.exports = ProductsList