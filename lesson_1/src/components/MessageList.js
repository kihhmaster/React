import { useState, useEffect, useRef } from "react";
import { nanoid } from 'nanoid';
import "./MessageList.css"


export const MessageList = () => {
	const [mesageList, setMessageList] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const inputRef = useRef(null);

	const onChangeInputvalue = (event) => {
		setInputValue(event.target.value)
	}

	const resetForm = ()=>{
		setInputValue("");
	}

	
	useEffect(() => {
		inputRef.current.focus();
	})

	const sendMessage = (author, value) => {
		const newMesageList = [...mesageList]
		const newMesage = {
			author,
			value
		}
		newMesageList.push(newMesage);
		setMessageList(newMesageList)
	}

	const onSubmitMassage = (event) => {
		event.preventDefault();
		if(inputValue === "") {
			return;
		}
		sendMessage("user", inputValue);
		resetForm();
	}

	useEffect(()=>{
		if (mesageList.length === 0) {
			return;
		}
		const lastMasseg = mesageList[mesageList.length -1]
		if (lastMasseg.author === "bot") {
			return;
		}

		sendMessage("bot", "авто ответ");
	},[mesageList])

	return <div className="massege__wrapp">
		<div  className="massege">
			{
				mesageList.map((item, index)=> <div key={nanoid()}>{item.author}---{item.value}</div>)
			}
		</div>
		<form onSubmit={onSubmitMassage} className="massege__form">
			<input 
			className="massege__input"
			ref={ inputRef }
			onChange={onChangeInputvalue}
			placeholder="Введите сообщение"
			type="text"
			></input>
			<button className="massege__button">Отправить</button>
		</form>

	</div>
}