import '../App.css';
import { NavLink } from 'react-router-dom';

const Header  = () => {
    return(
        <>
        <header className='header'>
        <img src="/image.png" alt="logo"/>
        <div className='links'>
          <NavLink to={"/"} >Home</NavLink>
          <NavLink to={"/diary"} >Diary</NavLink>
          <NavLink to={"/episode"} >Episode</NavLink>
          <NavLink to={"/login"} >Login</NavLink>
          <NavLink to={"/register"} >Register</NavLink>
          <NavLink to={"/profile"} >Profile</NavLink>
          <NavLink to={"/reviews"} >Reviews</NavLink>
          <NavLink to={"/season"} >Season</NavLink>
          {/* <NavLink to={"/series"} >Series</NavLink> */}
          <NavLink to={"/settings"} >Settings</NavLink>
          <NavLink to={"/watchlist"} >Watchlist</NavLink>
        </div>
      </header>
        </>
    )
}

export default Header;