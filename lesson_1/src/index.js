import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from "./store"
// const CounterView = (props) => {
// 	return <div>
// 		<div>
// 			счет: {props.count}
// 		</div>
// 		<button onClick={props.onDecrement}>-</button>
// 		<button onClick={props.onIncrement}>+</button>
// 	</div>
// }

// const CouterControls = (props) => {
// 	return <div>
// 		<button onClick={props.onDecrement}>-</button>
// 		<button onClick={props.onIncrement}>+</button>
// 	</div>
// }

// const CounterView = (props) => {
// 	return <div>
// 			счет: {props.count}
// 	</div>
// }
// const Counter = (props) =>{
// 	return <div>
// 		<CounterView count={props.count} />
// 		<CouterControls onDecrement={props.onDecrement} onIncrement={props.onIncrement}/>

// 	</div>
// }

// const AppCounter = () => {

// 	const [count, setState] = useState(0);

// 	return <Counter 
// 		count={count}
// 		onDecrement={() => {
// 			console.log('onDecrement')
// 			setState(count - 1)
// 		}}
// 		onIncrement={() => {
// 			console.log('onIncrement')
// 			setState(count + 1)
// 		}}
// 	/>	
// }

// const App = () => {
// 	const [isOpen, setIsOpen] = useState(false);
// 	const toggle = () => {
// 		setIsOpen(!isOpen)
// 	}

// 	return <div>
// 		<AppCounter/>
// 		<button onClick={toggle}
// 			style={{
// 				backgroundColor: isOpen ? 'green' : 'blue'
// 			}}
// 		>
// 			{
// 				isOpen ?  'Open' : 'Close'
// 			}
// 			{
// 				isOpen && <h1>
// 					hello
// 				</h1>
// 			}
// 			{
// 				!isOpen && <h1>
// 					Goodbay
// 				</h1>
// 			}
// 		</button>
// 	</div>
// }

ReactDOM.render(
  <React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
