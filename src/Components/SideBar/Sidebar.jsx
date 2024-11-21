import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";
import { MdOutlineComment } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiBadgeDollar } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./Sidebar.css";
function SideBar() {
  return (
    <>
      <div className="Sidebar_container">
        <h1 className="sidebar_title">به پنل کاربری خوش آمدید</h1>
        <ul className="sidebar_links">
          <li>
            <Link to="/product">
              <IoHomeOutline className="sidebar_icon" />
              صفحه اصلی
            </Link>
          </li>
          <li className="active">
            <Link to="/product">
              <CiShoppingBasket className="sidebar_icon" />
              محصولات
            </Link>
          </li>
          <li>
            <Link to="/comment">
              <MdOutlineComment className="sidebar_icon" />
              کامنت ها
            </Link>
          </li>
          <li>
            <Link to="/users">
              <FiUsers className="sidebar_icon" />
              کاربران
            </Link>
          </li>
          <li>
            <Link to="/orders">
              <IoBagCheckOutline className="sidebar_icon" />
              سفارشات
            </Link>
          </li>
          <li>
            <Link to="/offs">
              <CiBadgeDollar className="sidebar_icon" />
              تخفیف ها
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
