import {  Button, InputBase, Paper } from "@mui/material";
import { useState, useEffect, useRef } from "react";



export const MessageInput = (props) =>{
	const [inputValue, setInputValue] = useState("");
	const inputRef = useRef();

	
	const resetForm = ()=>{
		setInputValue("");
	}

	const onSubmitMassage = (event) => {
		event.preventDefault();
		if(inputValue === "") {
			return;
		}
		props.onSend(inputValue)
		resetForm();
	}

	const onChangeInputvalue = (event) => {
		setInputValue(event.target.value)
	}

		
	useEffect(() => {
		inputRef.current.focus();
	})

	return <>
		<Paper
		 className="massege__form"
		 component="form"
		 onSubmit={onSubmitMassage}
		>
			<InputBase
				className="massege__input"
				inputRef={inputRef}
				onChange={onChangeInputvalue}
				placeholder={props.placeholder}
				value={inputValue}
				type="text"

			>
			</InputBase>
			<Button variant="outlined" type="submit">
				Отправить
			</Button>

		</Paper>
	</>
}