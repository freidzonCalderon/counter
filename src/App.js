import React, { useState } from 'react';
import './App.css';

function App() {
	const [counter, setCounter] = useState(0);

	const incrementCounter = () => {
		setCounter((previousCounter) => previousCounter + 1);
	};
	const decrementCounter = () => {
		setCounter((previousCounter) => previousCounter - 1);
	};

	return (
		<div className='App'>
			<h1>Counter App</h1>

			<div className='counter'>
				<button onClick={decrementCounter}>-</button>
				<h2>{counter}</h2>
				<button onClick={incrementCounter}>+</button>
			</div>
		</div>
	);
}

export default App;
