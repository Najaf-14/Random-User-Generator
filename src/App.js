import logo from './logo.svg';
import './App.css';
import UserCard from './Component/Card';
import { use, useEffect, useState, useTransition } from 'react';
import getData from './api/getData';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData().then((user) => setData(user.results[0]))
  }, [])

  const changeUser = () => {
    getData().then((user) => setData(user.results[0]))
    }

  return (
    <div style={{display: 'flex', justifyContent:'center'}}>
      {data && <UserCard data={data} changeUser={changeUser} />}
    </div>
  );
}

export default App;
