import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";
import { MdOutlineComment } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiBadgeDollar } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";


function SideBar() {
  return (
    <div className="Sidebar_container">
      <h1 className="sidebar_title">به پنل کاربری خوش آمدید</h1>
      <ul className="sidebar_links">
        <li>
          <NavLink to="/product" className={({ isActive }) => (isActive ? "active" : "")}>
            <IoHomeOutline className="sidebar_icon" />
            صفحه اصلی
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" className={({ isActive }) => (isActive ? "active" : "")}>
            <CiShoppingBasket className="sidebar_icon" />
            محصولات
          </NavLink>
        </li>
        <li>
          <NavLink to="/comment" className={({ isActive }) => (isActive ? "active" : "")}>
            <MdOutlineComment className="sidebar_icon" />
            کامنت‌ها
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className={({ isActive }) => (isActive ? "active" : "")}>
            <FiUsers className="sidebar_icon" />
            کاربران
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" className={({ isActive }) => (isActive ? "active" : "")}>
            <IoBagCheckOutline className="sidebar_icon" />
            سفارشات
          </NavLink>
        </li>
        <li>
          <NavLink to="/offs" className={({ isActive }) => (isActive ? "active" : "")}>
            <CiBadgeDollar className="sidebar_icon" />
            تخفیف‌ها
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
