import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react';

function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetchSeriesData = async() => {
      try{
        const response = await fetch("http://localhost:5173/SeriesData.json");
        const fetchData = await response.json();
        setData(fetchData);
      }
      catch(err){
        console.log(err);
      }
    }
    fetchSeriesData();
  }, [])

  return (
    <div className='App'>
      <Header></Header>
      <Outlet context={{data}}></Outlet>
    </div>
  )
}

export default App