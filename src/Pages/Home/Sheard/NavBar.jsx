import { Link, NavLink } from "react-router-dom";
import userDefaultLogo from '../../../assets/user.png'

const NavBar = () => {
    const navLinks = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/about'}>Home</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 mb-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-8 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={userDefaultLogo} />
                    </div>
                </div>

                <Link><button className="bg-slate-800 px-5 py-1 text-white ml-2">Login</button></Link>
            </div>
        </div>
    );
};

export default NavBar;