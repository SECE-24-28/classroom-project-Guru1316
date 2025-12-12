
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <>
        <header className='header'>
            <img src='/image.png' alt='logo'/>
            <div className='links'>
                <NavLink to={"/"} >Home</NavLink>
                <NavLink to={"/users"} >Users</NavLink>
                <NavLink to={"/register"} >Register</NavLink>
            </div>
        </header>
        </>
    )
}

export default Header;