// import { useState, useEffect, useRef } from "react";
// import { nanoid } from 'nanoid';
import "./MessageList.css"
// import { Redirect, useParams } from "react-router";
// import { CHATS } from '../helpers/mock';


import propTypes from "prop-types";
import List from '@mui/material/List';
import { Message } from "./Message";

export const MessageList =(props) => {
	// debugger;
	return (
		<List className="massege">
			{props.massegeList.map((item) => (
				<Message key={item.id}{...item}/> 
			))};
		</List>
	)
}

MessageList.propTypes = {
	mesageList: propTypes.arrayOf(
		propTypes.shape({
			id: propTypes.string,
			text: propTypes.string,
			autor: propTypes.string
		})
	)
};

MessageList.defaultProps = {
	mesageList: []
}


// export const MessageList = () => {
	















// 	return <div className="massege__wrapp">
// 		<div  className="massege">
// 			{
// 				mesageList.map((item)=> <div key={nanoid()}>{item.author}---{item.value}</div>)
// 			}
// 		</div>
// 		<form onSubmit={onSubmitMassage} className="massege__form">
// 			<input 
// 			className="massege__input"
// 			ref={ inputRef }
// 			onChange={onChangeInputvalue}
// 			placeholder="Введите сообщение"
// 			type="text"
// 			></input>
// 			<button className="massege__button">Отправить</button>
// 		</form>

// 	</div>
// }