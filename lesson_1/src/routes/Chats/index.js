import { Switch, Route } from "react-router-dom";
import { MessageList } from '../../components/MessageList';
import { ChatList } from '../../components/ListChat';
import { CHATS } from '../../helpers/mock';



export const Chats = () => {

	return (
		<div className='chat__wrap'>
			<ChatList list={CHATS} />
			<div>
				<Switch>
					<Route component={MessageList} path="/chats"></Route>
				</Switch>
			</div>
		</div>
	)
}