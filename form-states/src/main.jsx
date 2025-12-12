import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/HomePage.jsx';
import Users from './pages/UserPage.jsx';
import Register from './pages/RegistrationPage.jsx';

const routerVariables = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Home></Home>,
    },
    {
      path:"/users/:id",
      element: <Users></Users>,
    },
    {
      path:"/register",
      element:<Register></Register>
    },
    {
      path:"*",
      element: <h1>Page Not Found Please Check Your URL</h1>
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerVariables}></RouterProvider>
  </StrictMode>,
)