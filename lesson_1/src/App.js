import './App.css';
import Message from './Message.js';

const App = (props) => {
	const text = "передавал ему пропсом текст (константу)."
	
	return <div className='App'>
		<Message text={text}/>
	</div>
}

export default App;
