import React, { useState } from 'react'
import Foods from './components/Foods';
import Cart from './components/Cart';
import { Alert, AlertTitle } from '@material-ui/lab';

const App = () => {
	const [foodsList, setFoodsList] = useState([]);
	const [errorDisplay, setErrorDisplay] = useState("none");
	const [successDisplay, setSuccessDisplay] = useState("none");

	const addFood = (name, price, plates) => {
		// setFoodsList(oldList => oldList.filter(val => val.name === name));
		setFoodsList(oldList => [{name: name, price: price, plates: plates}, ...oldList]);

		// // if(foodsList.length === 0) {
		// // 	setFoodsList(oldList => [{name: name, price: price}, ...oldList]);
		// // }
		// // else {
		// // 	setFoodsList("Found something similar")
		// // }
	}

	const overWriteFood = (price, plates, index) => {
		setFoodsList(oldList => [(oldList[index].plates += plates) && (oldList[index].price += price), ...oldList]);
		setFoodsList(oldList => oldList.filter(val => val.name !== undefined))

		setErrorDisplay("block");

		setInterval(() => setErrorDisplay("none"), 5000);
	}

	const removeCart = (id) => {
		setFoodsList(oldList => oldList.filter((val, index) => index !== id));
	}

	const orderFood = () => {
		setSuccessDisplay("block");

		setInterval(() => setSuccessDisplay("none"), 5000);
	}

	return (
		<div>
			<div align="center" id="msgs">
				<Alert variant="filled" severity="Error" style={{width: '100%', display: errorDisplay, position: 'fixed'}}>
					<AlertTitle>Error</AlertTitle>
					There is already that food in the Cart
				</Alert>

				<Alert variant="filled" severity="Success" style={{width: '100%', display: successDisplay, position: 'fixed'}}>
					<AlertTitle>Food Ordered</AlertTitle>
					Your Food will be delivered to you soon!
				</Alert>
			</div>

			<br/>

			<h1>Cart</h1>
			<br/>
			{foodsList.length === 0 ? <p>Nothing in cart. Why not add some?</p> : foodsList.map((val, id) => <Cart key={id} name={val.name} price={val.price} plates={val.plates} id={id} removeCart={removeCart} orderFood={orderFood} />)}

			<br/><br/><br/>

			<h1>Order Food</h1>
			<br/>
			<Foods foodsList={foodsList} addFood={addFood} overWriteFood={overWriteFood} />
		</div>
	)
}

export default App