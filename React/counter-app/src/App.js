import { useState } from 'react';
import './App.css';
// import { useState } from 'react';
import Counter from './Counter';
// import Component4, { Component2, Component3 } from './Component2';
// import Component1 from './Component1';
// import Compo1 from './Compo1';
// import Compo2 from './Compo2';
// import Compo3 from './Compo3';
// import Compo4 from './Compo4';
// import Compo5 from './Compo5';
import { useEffect } from 'react';
import TableRow from './TableRow';
import List from './List';
// import Component5 from './Component5';
// import GrandFather from './GrandFather';

function App() {
  // let val = 0;
  let [val, setVal] = useState(0);
  let [data, setData] = useState([]);
  let [dat, setDat] = useState([]);
  const handleIncrement = () => {
    console.log("Increment button clicked");
    // val = val + 1;
    setVal(val + 1);
  }
  const handleDecrement = () => {
    console.log("Decrement button clicked");
    // val = val - 1;
    setVal(val - 1);
  }
  // useEffect(() => {
  //   document.body.style.backgroundColor = 'black';
  //   document.body.style.color = 'white';
  //  });
  // let myw = "Bless You Grandson By GrandFather";
  //  let msg = "Most Important Rule";
  //  let total = 10;
  //  let heading = "Rules For Sigma Males";
  // Side Effects
  // 1) Callback Function 2) Array Of Dependencies (Props And States) 
  // 1. With Empty Array of dependencies
  // 2. With dependencies
  // 3. Without Array of dependencies

// useEffect(() => {
//   console.log("Run Once After Initial Render");
// }, [])
// useEffect(() => {
//   console.log("With Array of dependencies");
// },[val])
// useEffect(() => {
//   console.log("Without array");
// })

// // Debouncing
// useEffect(() => {
//   if(val<0)
//   {
//     let timer = setTimeout(() => {
//       setVal(0);
//     }, 2000);

//     // cleanup Function
//     return() => { 
//       clearTimeout(timer);
//     };
//   }
// }, [val])

useEffect(() => {
  const FetchApi = async() => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const fetchData = await response.json();
      setData(fetchData);
    }
    catch(err)
    {
      console.log("err:",err);
    }
  };
  FetchApi();
}, []);
console.log({data});

useEffect(() => {
  const FetchApi2 = async() => {
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const fetchDat = await res.json();
      setDat(fetchDat);
    }
    catch(err)
    {
      console.log(err);
    }
  }
  FetchApi2();
}, [])
console.log({dat});

  return (
    <div className="App">
      <div className="MainContainer">
      {/* <h1>10 Sigma Rules</h1>
      <Component1 s={total} r={heading}></Component1>
      <Component2></Component2>
      <Component3></Component3>
      <Component4></Component4>
      <Component5></Component5>
      <Compo1></Compo1>
      <Compo2></Compo2>
      <Compo3 q={msg}></Compo3>
      <Compo4></Compo4>
      <Compo5></Compo5> */}
      {/* <GrandFather myWill = {myw}></GrandFather> */}
      <h1>Counter - App</h1>
      <Counter val = {val} handleIncrement = {handleIncrement} handleDecrement = {handleDecrement}></Counter>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) =>{
            return(
              <TableRow item={item} key={item.id}></TableRow>
            );
          } )}
        </tbody>
      </table>
      <h1>Titles</h1>
      <ul>
        {dat.map((item) => {
          return(
            <List item={item.title} key={item.id} ></List>
          )
        })}
      </ul>
      <br></br>
      <br></br>
      <h1>Body</h1>
      <ul>
        {dat.map((item) => {
          return(
            <List item={item.body} key={item.id} ></List>
          )
        })}
        {/* {dat.map((item) => {
          return(
            <List item={item.name} key={item.id} ></List>
          )
        })} */}
      </ul>
      </div>
    </div>
    
  );
}

export default App;


// import { useState, useEffect } from 'react';
// import './App.css';
// import Guess from './Number_Guessing_Website/Guess.js';

// function App() {
//   let [ran, setRam] = useState(Math.trunc(Math.random() * 20) + 1);;

//   let [bg, setBg] = useState("#222")
//   let [enable, setEnable] = useState(false);
//   let [qm, setQm] = useState("?");
//   let [gv, setGv] = useState("");
//   let [msg, setMsg] = useState("Start guessing...")
//   let [scr, setScr] = useState(20);
//   let [hscr, setHscr] = useState(0);

//   console.log(ran);

//   useEffect(() =>
//     {
//       document.body.style.backgroundColor = bg;
//     } , [bg]
//   )

//   const calRand = (e) => 
//   {
//     setRam(Number(Math.trunc(Math.random() * 20) + 1));
//   }

//   const handleReset = () =>
//   {
//     calRand();
//     setEnable(false);
//     setScr(20);
//     setBg("#222")
//     setMsg("Start guessing...");
//     setQm("?")
//     setGv("");
//   }

//   const handleCheck = () =>
//   {
//     if(gv === "")
//     {
//       alert("Please Enter A Number...");
//     }
//     else if(gv <= 0 || gv > 20)
//     {
//         setMsg("Invalid Value");
//     }
//     else if(gv === ran)
//     {
//         if(scr > hscr)
//         {
//             setHscr(scr);
//         }
//         setBg("green");
//         setMsg("Correct Value");
//         setQm(ran);
//         setScr(scr);
//         setEnable(true);
//     }
//     else if(gv > ran)
//     {
//         setScr(scr - 1);
//         setMsg("Too High");
//     }
//     else if(gv < ran)
//     {
//         setScr(scr - 1);
//         setMsg("Too Low");
//     }
//   }
//   return (
//     <div className="App">
//       <Guess enable = {enable} qm = {qm} msg = {msg} handleReset = {handleReset} handleCheck = {handleCheck} gv = {gv}
//        setGv = {setGv} scr={scr} hscr={hscr}></Guess>
//     </div>
//   );
// }

// export default App;