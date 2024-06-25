import { useState } from "react";
import logo from "../assets/image/image 1.png";
import Profile from "../assets/image/profile.svg";
import Heart from "../assets/image/heart.svg";
import Cart from "../assets/image/cart.svg";
import { Link } from "react-router-dom";

const Navbar=()=>{
    const [menuOpen, setMenuOpen] = useState(false);
    return(
      
        <>
 
        <nav className="bg-white">
            <div className="max-w-[1280px] mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                       
                        <div>
                            <Link to="/" className="flex items-center py-5 px-2 text-gray-700">
                                <span className="font-bold"><img src={logo} alt="NBT" /></span>
                            </Link>
                        </div>
                    </div>
                    
                   
                    <div className="hidden md:flex items-center gap-14 font-poppin font-medium">
                        <Link to='/' className="py-5 px-3 text-gray-700 hover:text-gray-900">Home</Link>
                        <a href="https://www.nbtindia.gov.in/catalogues__online-index.aspx" target="_black" className="py-5 px-3 text-gray-700 hover:text-gray-900">Shop</a>
                        <a href="https://www.nbtindia.gov.in/aboutus__5__history.nbt" target="_black"  className="py-5 px-3 text-gray-700 hover:text-gray-900">About</a>
                        <a href="https://www.nbtindia.gov.in/popup-contactus.aspx" target="_black"  className="py-5 px-3 text-gray-700 hover:text-gray-900">Contact</a>
                    </div>
                    
                  
                    <div className="hidden md:flex items-center">
                       
                        <Link to="/register" className="py-2 px-9 bg-primary-0 text-white rounded  font-poppin font-normal">Register</Link>
                    </div>

                   
                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

          
            {menuOpen && (
                <div className="md:hidden">
                    <a href="#" className="block py-2 px-4 text-lg text-gray-700 hover:bg-gray-200">Home</a>
                    <a href="https://www.nbtindia.gov.in/catalogues__online-index.aspx" target="_black"  className="block py-2 px-4 text-lg text-gray-700 hover:bg-gray-200">Shop</a>
                    <a href="https://www.nbtindia.gov.in/aboutus__5__history.nbt" target="_black"  className="block py-2 px-4 text-lg text-gray-700 hover:bg-gray-200">About</a>
                    <a href="https://www.nbtindia.gov.in/popup-contactus.aspx" target="_black"  className="block py-2 px-4 text-lg text-gray-700 hover:bg-gray-200">Contact</a>
                    <Link to="/register" className="py-2 px-9 text-lg bg-primary-0 text-white rounded mt-3 mx-2 text-center">Register</Link>
                </div>
            )}
            <hr className="my-0 h-5 bg-primary-0" />
        </nav>
</>

      
    )
}

export default Navbar;