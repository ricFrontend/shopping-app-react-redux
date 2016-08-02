import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { Router, Route, browserHistory, Link } from 'react-router'

const LoginAdmin = () => {
	return (
		<div className="row">
			<div className="col-xs-offset-4 col-xs-4 text-center login-container">
				<form className="panel panel-default">
					<div className="panel-body">
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Username" />
						</div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Password" />
						</div>
						<div className="form-group">
							<Link to="/admin/panel"><button className="btn btn-primary">Log in</button></Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

module.exports = LoginAdmin