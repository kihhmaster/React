import { useState, useEffect,} from "react";
import { useParams, Redirect} from "react-router";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";
import { CHATS } from ".././helpers/mock";

export const Messages = () => {
	const { chatId } = useParams();
	const [mesageList, setMessageList] = useState([]);

	const sendMessage = (author, text) => {
		const newMesageList = [...mesageList]
		const newMesage = {
			author,
			text
		}
		newMesageList.push(newMesage)
		setMessageList(newMesageList)
	}

	const onSendMessage = (value) => {
		sendMessage("user", value)
	}


	useEffect(()=>{
		if (mesageList.length === 0) {
			return
		}
		const lastMasseg = mesageList[mesageList.length -1]
		if (lastMasseg.author === "bot") {
			return
		}

		sendMessage("bot", "авто ответ");
	},[mesageList])
  
		if (!CHATS.find(({ id }) => id === chatId)) {
		return <Redirect to="/chats" />
		
	};


	return (<div className="massege__wrapp">  
		<MessageList massegeList={mesageList} />
		<MessageInput onSend={onSendMessage} />
	</div>

	)
}