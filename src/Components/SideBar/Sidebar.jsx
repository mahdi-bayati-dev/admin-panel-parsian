import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";
import { MdOutlineComment } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiBadgeDollar } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";

import "./Sidebar.css";
function SideBar() {
  return (
    <>
      <div className="Sidebar_container">
        <h1 className="sidebar_title">به پنل کاربری خوش آمدید</h1>
        <ul className="sidebar_links">
          <li>
            <a href="#"> <IoHomeOutline className="sidebar_icon" />صفحه اصلی</a>
          </li>
          <li className="active">
            <a href="#"> <CiShoppingBasket className="sidebar_icon" />محصولات </a>
          </li>
          <li>
            <a href="#"> <MdOutlineComment className="sidebar_icon"/>کامنت ها</a>
          </li>
          <li>
            <a href="#"> <FiUsers className="sidebar_icon" />کاربران</a>
          </li>
          <li>
            <a href="#"> <IoBagCheckOutline className="sidebar_icon" />سفارشات</a>
          </li>
          <li>
            <a href="#"><CiBadgeDollar className="sidebar_icon" />تخفیف ها</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
