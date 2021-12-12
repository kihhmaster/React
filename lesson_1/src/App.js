import './App.css';
// import Message from './Message.js';
import MessageList from './components/MessageList.js';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import { useUsers } from './hooks/useUsers';
import { Toolbar, Button, AppBar } from '@mui/material';

import { Profile } from  "./routes/Profile";
import { Home } from  "./routes/Home";
import { Chats } from  "./routes/Chats";

const UserList = (props) => {
  const [users, {addUser, removeUser}] = useUsers();

  useEffect(() => {
    console.log('update users', users);
    props.onChange(users);

  }, [users])

	useEffect(() => {
    if (users.length === 0) {
      return;
    }

    const timerId = setTimeout(() => {
      console.log('removed -> ', users[0].name)
      removeUser(users[0].name)()
    }, 2000);

    return () => {
      clearTimeout(timerId);
    }
  }, [users])

  return <div>
    <button onClick={addUser}>
      Добавить
    </button>
    <div>
      {
        users.map((item) => <div>{item.name}
          <button onClick={removeUser(item.name)}>-</button>
        </div>)
      }
    </div>
  </div>
}


function App(props) {
  const [state, setState] = useState([])

  useEffect(() => {
    console.log('update');
  })

  useEffect(() => {
    console.log('mount');
  }, [])

  useEffect(() => {
    console.log('update state', state);
  }, [state])

  return (
    <div className="App">
      {/* <UserList
        onChange={(users) => {
          console.log('onChange', users);
          setState(users);
        }}
      /> */}

			<BrowserRouter>
				<div className="top__line">
					<AppBar>
						<Toolbar>
							<Button to="/" component={Link} color="inherit">
								Home
							</Button>
							<Button to="/profile" component={Link} color="inherit">
								Profile
							</Button>
							<Button to="/chats" component={Link} color="inherit">
								chats
							</Button>
							<Button to="/messageList" component={Link} color="inherit">
								MessageList
							</Button>
						</Toolbar>
					</AppBar>
					<Switch>
						<Route component={Chats} path="/chats"></Route>
						<Route component={Profile} path="/profile"></Route>
						<Route component={Home} path="/"></Route>
					</Switch>
				</div>
				
			</BrowserRouter>
			

    </div>
  );
}
export default App;
