import { Outlet } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import Header from './components/Header';

function App() {
  let [data, setData] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      try{
        const response = await fetch("http://localhost:5173/Data.json");
        const fetchData = await response.json();
        setData(fetchData);
      }
      catch(err)
      {
        console.log(err);
      }
    };
    fetchUserData();
  },[])
  return (
    <>
      <Header></Header>
      <Outlet context={{data, setData}}></Outlet>
    </>
  )
}

export default App;