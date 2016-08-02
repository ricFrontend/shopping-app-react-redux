import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'


const AddProductForm = () => {
	return (
		<div>
			<form className="form-horizontal">
				<div className="form-group">
					<label className="col-sm-2 control-label">Product Name</label>
					<div className="col-sm-10">
						<input type="text" className="form-control product-name" id="product-name" placeholder="Product name" />
					</div>
				</div>
				<div className="form-group">
					<label className="col-sm-2 control-label">Description</label>
					<div className="col-sm-10">
						<textarea className="form-control description" id="description" placeholder="Description for product"></textarea>
					</div>
				</div>
				<div className="form-group">
					<div className="col-sm-offset-2 col-sm-10">
						<button type="submit" className="btn btn-primary btn-block">Crear</button>
					</div>
				</div>
			</form>				
		</div>
	)
}

module.exports = AddProductForm