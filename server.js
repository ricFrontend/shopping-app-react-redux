var express = require('express'),
	swig = require('swig'),
	bodyParser = require('body-parser'),
	_ = require('underscore');

var app = express()

// Configurar de swig!
app.engine('html', swig.renderFile)
app.set('view engine', 'html')
app.set('views', __dirname + '/views')
swig.setDefaults({cache:false})

// Static files
app.use('/assets', express.static(__dirname + '/public'))

// Body parser
app.use(bodyParser.json())

const Order = require('./models/order')
const Product = require('./models/product')

app.use(function(req, res, next){
	console.log('=>', req.method, req.path)

	next()
})


app.get('/env-vars', function (req, res) {
	res.render('env-vars')
})

app.get('/input', function (req, res) {
	res.render('input')
})

app.get('/ajax', function (req, res) {
	res.render('ajax')
})

app.get('/products', function(req, res){
	Product.find(function(err, products){
		if(err){return res.send(500, err)}

		res.send(products)
	})
})

app.post('/products', function(req, res){
	console.log('body',req.body)
	Product.create(req.body,function(err, product){
		if(err){return res.send(500, err)}

		res.send(product)
	})
})

app.get('/products/:uuid', function(req, res){
	Product.findOne({uuid: req.params.uuid},function(err, product){
		if(err){return res.send(500, err)}

		if(product){return res.send(404)}

		res.send(product)
	})
})

app.put('/products/:uuid', function(req, res){
	console.log({uuid: req.params.uuid})
	Product.findOne({uuid: req.params.uuid},function(err, product){
		console.log(err, product)
		if(err){return res.send(500, err)}

		if(!product){return res.send(404)}

		product.name = req.body.name
		product.description = req.body.description

		product.save(function(err){
			if(err){return res.send(500, err)}

			res.send(product)
		})
	})
})

app.delete('/products/:uuid', function(req, res){
	console.log({uuid: req.params.uuid})
	Product.findOne({uuid: req.params.uuid},function(err, product){
		console.log(err, product)
		if(err){return res.send(500, err)}

		if(!product){return res.send(404)}

		product.remove(function(err){
			if(err){return res.send(500, err)}

			res.send({success:true})
		})
	})
})

app.get('/orders', function(req, res){
	Order.find({}).populate('products.product').exec(function(err, orders){
		if(err){return res.send(500, err)}

		res.send(orders)
	})
})

app.post('/orders', function(req, res){
	var productIds = _.map(req.body.products, function(product){
		return product.product
	})

	Product.find({uuid:{$in:productIds}}, function(err, products){
		if(err){return res.send(500, err)}

		var order = {}
		order.products = req.body.products.map(function(data){
			var product = _.findWhere(products, {uuid:data.product})

			return {
				quantity: data.quantity,
				product: product._id,
				name: product.name,
				description: product.description
			}
		})

		Order.create(order,function(err, order){
			if(err){return res.send(500, err)}

			res.send(order)
		})
	})
})

app.get('/orders/:uuid', function(req, res){
	Order.findOne({uuid: req.params.uuid},function(err, order){
		if(err){return res.send(500, err)}

		if(order){return res.send(404)}

		res.send(order)
	})
})

app.delete('/orders/:uuid', function(req, res){
	Order.findOne({uuid: req.params.uuid},function(err, order){
		console.log(err, order)
		if(err){return res.send(500, err)}

		if(!order){return res.send(404)}

		order.remove(function(err){
			if(err){return res.send(500, err)}

			res.send({success:true})
		})
	})
})

app.get('/*', function (req, res) {
	res.render('app')
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})