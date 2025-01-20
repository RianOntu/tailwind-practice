import React from "react";
import Layout from "../layout";

function Navbar() {
  return (
    <>
      <Layout >
        <div className="flex justify-between items-center text-white mt-3">
          <img src="/assets/logo.png" alt="" />
          <div className="menu_items ">
            <ul className="flex items-center">
              <li>Home</li>
              <li className="ml-2">Listings</li>
              <li className="ml-2">Members</li>
              <li className="ml-2">Blog</li>
              <li className="ml-2">Pages</li>
              <li className="ml-2">Contact</li>
            </ul>
          </div>

          <div className="flex items-center">
            <i class="fa-solid fa-phone"></i>
            <p className="ml-1">+68 685 88888</p>
            <i class="fa-solid fa-user ml-4 mr-4"></i>
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
