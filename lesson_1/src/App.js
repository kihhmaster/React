import './App.css';
// import Message from './Message.js';
import React, {useEffect, useState} from 'react';
import { useUsers } from './hooks/useUsers';
import { EnterMessage } from './components/EnterMessage'
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
      <UserList
        onChange={(users) => {
          console.log('onChange', users);
          setState(users);
        }}
      />
			<EnterMessage/>
    </div>
  );
}
export default App;
