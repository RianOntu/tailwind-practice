import React, { useState } from "react";
import Layout from "../layout";

function Navbar() {
  console.log("Navbar component rendered");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Layout>
        <div className="flex justify-between items-center text-white mt-3">
          <img src="/assets/logo.png" alt="" />
          <button className="block xl:hidden" onClick={() => console.log("clicked")}>
            <i className="text-white fa-solid fa-bars cursor-pointer"></i>
          </button>
          {isOpen && (
            <div className="menu_items_mobile block md:hidden p-3">
              <ul className="">
                <li>Home</li>
                <li className="ml-5">Listings</li>
                <li className="ml-5">Members</li>
                <li className="ml-5">Blog</li>
                <li className="ml-5">Pages</li>
                <li className="ml-5">Contact</li>
              </ul>
              <div className="">
                <i className="fa-solid fa-phone"></i>
                <p className="ml-1">+68 685 88888</p>
                <i className="fa-solid fa-user ml-4 mr-4"></i>
                <button className="border rounded-[20px] px-2 p-1 ml-2">
                  Add Property
                </button>
              </div>
            </div>
          )}

          <div className="menu_items hidden xl:block">
            <ul className="hidden md:flex items-center">
              <li>Home</li>
              <li className="ml-5">Listings</li>
              <li className="ml-5">Members</li>
              <li className="ml-5">Blog</li>
              <li className="ml-5">Pages</li>
              <li className="ml-5">Contact</li>
            </ul>
          </div>

          <div className="xl:flex items-center hidden">
            <i className="fa-solid fa-phone"></i>
            <p className="ml-1">+68 685 88888</p>
            <i className="fa-solid fa-user ml-4 mr-4"></i>
            <button className="border rounded-[20px] px-2 p-1 ml-2">
              Add Property
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Navbar;
