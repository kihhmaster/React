import { ListItem,  ListItemAvatar, Avatar} from '@mui/material';
import {  Link } from "react-router-dom";

import propTypes from "prop-types"

export const Chat = (props) => {
	return (
			<ListItem to={`/chats/${props.id}`}  component={Link} key={props.id}>
				<ListItemAvatar>
					<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
				</ListItemAvatar>
				<div className="ChatTitle__wrap">
					<div className="ChatTitle">{props.name}</div>
					<div className="ChatText">{props.text}</div>
				</div>
			</ListItem>
	)
}


Chat.propTypes = {
	text: propTypes.string,
	id: propTypes.string,
	name: propTypes.string
}