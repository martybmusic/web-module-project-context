import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		// console.log(cart);
		// console.log(item);
		return setCart([...cart, item])
	};

	const removeItem = (id) => {
		const index = cart.findIndex((x) => x.id === id);
		const newArray = [...cart];
		newArray.splice(index, 1);
		setCart(newArray);
	};

	return (
		<div className="App">
		  <ProductContext.Provider value={{ products, addItem, removeItem }}>
		   <CartContext.Provider value={[cart]}>
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
		   </CartContext.Provider>
		  </ProductContext.Provider>
		</div>
	);
}

export default App;
