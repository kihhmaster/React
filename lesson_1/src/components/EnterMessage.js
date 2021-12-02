import { useState, useEffect} from "react";

export const EnterMessage = () => {
	const [mesageList, setMessageList] = useState([]);
	const [inputValue, setInputValue] = useState("");


	const onChangeInputvalue = (event) => {
		setInputValue(event.target.value)
	}

	const resetForm = ()=>{
		setInputValue("");
	}



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

	return <div>
		<form onSubmit={onSubmitMassage}>
			<input 
			onChange={onChangeInputvalue}
			placeholder="Введите сообщение"
			></input>
			<button>Отправить</button>
		</form>
		<div>

			{
				mesageList.map((item, index)=> <div key={index}>{item.author}---{item.value}</div>)
			}
		</div>
	</div>
}