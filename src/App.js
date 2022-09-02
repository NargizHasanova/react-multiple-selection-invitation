import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Success } from './components/Success';
import { Users } from './components/Users';
import { fetchUsersData } from './redux/userSlice';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsersData())
  }, []);
  
  return (
    <div className="App">
      <Users />
      {/* <Success /> */}
    </div>
  );
}

export default App;
