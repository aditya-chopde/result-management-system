import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row justify-around items-center my-5">
        <div>
          <h1 className="font-bold text-xl">ResultManager</h1>
        </div>
        <div>
            <ul className="flex flex-row gap-3 items-center">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li className="border border-black rounded-full px-8 transition-all hover:bg-black hover:text-white cursor-pointer py-1">
                  <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
