import '../App.css';
import { NavLink } from 'react-router-dom';

const Header  = () => {
    return(
        <>
        <header className='header'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VegpF5is5X2A4T-tnzhXtXk7zgnUN8Trrw&s" alt="logo"/>
        <div className='links'>
          <NavLink to={"/"} >Home</NavLink>
          <NavLink to={"/about"} >About</NavLink>
          <NavLink to={"/cart"} >Cart</NavLink>
          <NavLink to={"/search"} >Search</NavLink>
        </div>
      </header>
        </>
    )
}

export default Header;