import { Switch, Route } from "react-router-dom";
import { Messages } from '../../components/Messages';
import { ChatList } from '../../components/ListChat';
import { CHATS } from '../../helpers/mock';



export const Chats = () => {

	return (
		<div className='chat__wrap'>			
			<ChatList list={CHATS} />
			<div>
				<Switch>
					<Route component={Messages} path="/chats/:chatId"></Route>
				</Switch>
			</div>
		</div>
	)
}