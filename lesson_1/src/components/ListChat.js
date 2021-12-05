import React from 'react';
import './ListChat.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


export const ChatList = ({list}) => {

	return <>
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			{
				list.map((item) => (
					<Chat key={item.id}{...item}></Chat>
				))
				
			}



    </List>
	</>
}


const Chat = (props) => {
		return <>
			<ListItem className="ChatItem__wrap">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
				<div className="ChatTitle__wrap">
					<div className="ChatTitle">{props.name}</div>
					<div className="ChatText">{props.text}</div>
				</div>
      </ListItem>
		</>
}