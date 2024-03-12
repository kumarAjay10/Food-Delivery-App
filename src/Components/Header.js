import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
 

  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header rendered");

  const onlinestatus = useOnlineStatus();
  const cartItems = useSelector((store)=>store.cart.items);
  return (
    <div className="flex min-h-16 justify-between sticky top-0 z-50 bg-orange-500 shadow-xl text-white text-lg sm:max-h-24">
      <div className="logo-container ">
        <Link to="/"><img className="w-[96px] rounded-[50%] ml-4" src={LOGO_URL} /></Link>
      </div>
      <div className="flex -ml-12">
        <ul className="flex items-center">
          <li className="px-4">
            Online Status: {onlinestatus ? "🟢" : "🔴"}
          </li>
          <li><Link className="hidden xl:block px-5 hover:bg-white hover:text-black hover:rounded-xl h-10 pt-[6]" to="/" >Home</Link></li>
          <li><Link className="hidden xl:block px-5 hover:bg-white hover:text-black hover:rounded-xl h-10 pt-[6]" to="/about">About Us</Link></li>
          <li><Link className="hidden xl:block px-5 hover:bg-white hover:text-black hover:rounded-xl h-10 pt-[6]" to="/contact">Contact Us</Link></li>
          <li><Link className="px-5 hover:bg-white hover:text-black hover:rounded-xl mr-4 h-10 pt-[6] flex items-center" to="/cart"><FaCartShopping/>-{cartItems.length}</Link></li>
          <button
            className="login bg-gray-600 py-2 px-4 mr-4 rounded-lg"
            onClick={() => {
            

              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;


