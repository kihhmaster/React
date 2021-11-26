import React, {useState} from 'react';
import './message.css'
const  Message = (props) => {
	const [isChange, setIsChange] = useState(false);
	const toggle = () => {
		setIsChange(!isChange)
	}

return <div className="massege__wrapp">
	<div style={{
		fontSize: isChange ? '25px' : '60px',
		color: isChange ?  '#3F92D2' : '#033E6B',
	}}>
		{props.text}
	</div>
	<button onClick={toggle} className="massege__button">Изменить</button>
</div>
}

export default Message;
