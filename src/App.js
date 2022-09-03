import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Success } from './components/Success';
import { Users } from './components/Users';
import { fetchUsersData } from './redux/userSlice';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const dispatch = useDispatch()
  const { successOnSend } = useSelector(state => state.users)

  useEffect(() => {
    dispatch(fetchUsersData())
  }, []);

  return (
    <div className="App">
      {successOnSend ? <Success /> : <Users />}
    </div>
  );
}

export default App;
