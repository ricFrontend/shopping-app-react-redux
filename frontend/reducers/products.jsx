let productsReducer = (state = {products:[],loading:false}, action) => {

	if(action.type === 'LOADING_PRODUCTS'){
		return {loading:true, products:[]}
	}else if(action.type === 'LOADED_PRODUCTS'){
		return {loading:false, products:action.posts}
	}else{
		return {loading:false, products:state.products}
	}
}

let shoppingCartReducer = (state = {}, action) => {
	return state;
}
let orderReducer = (state = {products:[], loaded:false}, action) => {
	return state;
}

let ProductReducers = {
	productsReducer,
	shoppingCartReducer,
	orderReducer
}

module.exports = ProductReducers