import React from 'react';
import './ListChat.css'
import { List } from '@mui/material';
import { Chat } from "./Chat"


export const ChatList = ({list}) => {
	

	return <>
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			{
				list.map((item) => (
					<Chat to="/chats" key={item.id}{...item}></Chat>
				))
				
			}
    </List>
	</>
}
 

