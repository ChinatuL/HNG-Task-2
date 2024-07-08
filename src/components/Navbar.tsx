import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Navlinks from "./NavbarLinks";
import cartIcon from "../assets/icons/cart.svg";
import yellowCartIcon from "../assets/icons/cart-yellow.svg";
import userIcon from "../assets/icons/user.svg";
import searchIcon from "../assets/icons/search.svg";

const Navbar = () => {
    const { pathname } = useLocation();
    return (
        <nav className='flex justify-between items-center w-full'>
            <Logo />
            <Navlinks />
            <div className='flex gap-4'>
                <div className='hidden lg:block'>
                    <img src={searchIcon} alt='search' className='nav-icon' />
                </div>
                <div className='hidden lg:block'>
                    <img src={userIcon} alt='user' className='nav-icon' />
                </div>
                <div>
                    <Link to='/cart'>
                        {pathname === "/cart" ? (
                            <img
                                src={yellowCartIcon}
                                alt='cart'
                                className='nav-icon'
                            />
                        ) : (
                            <img
                                src={cartIcon}
                                alt='cart'
                                className='nav-icon'
                            />
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
