import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row justify-around items-center my-5">
        <div>
          <h1 className="font-bold text-xl">ResultManager</h1>
        </div>
        <div>
            <ul className="flex flex-row gap-3">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
