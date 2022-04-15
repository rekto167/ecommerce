import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-teal-700 text-white w-full">
      <div className="container flex flex-wrap p-3 justify-between">
        <div className="flex justify-between">
          <span>Ki-Store</span>
        </div>
        <div className="items-center ">
          <ul className="flex m-auto">
            <li className="m-auto">Keranjang</li>
            <li className="m-auto">Pesanan Anda</li>
            <li className="m-auto">Login</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
