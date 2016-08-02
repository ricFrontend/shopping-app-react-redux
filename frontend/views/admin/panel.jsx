import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'

import AddProductForm from './addProduct.jsx'
import ProductsList from './productList.jsx'


const PanelAdmin = () => {
	return (
		<div>
			<AddProductForm></AddProductForm>	
			<ProductsList></ProductsList>		
		</div>
	)
}

module.exports = PanelAdmin