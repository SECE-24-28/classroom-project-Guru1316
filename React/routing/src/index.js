import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Search from './Pages/Search';
import Cart from './Pages/Cart';
// just to create url and on which url and which page should be displayed

const routerVariables = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element: <Home />,
    },
    {
      path:"/about",
      element: <About />
    },
    {
      path:"/search",
      element: <Search />
    },
    {
      path:"/cart",
      element: <Cart />
    },
    {
      path:"*",
      element:<h1>Page Not Found Please Check Your URL</h1>
    }
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerVariables}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
