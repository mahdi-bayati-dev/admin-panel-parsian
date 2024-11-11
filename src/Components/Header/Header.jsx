import React from "react";
import { CiBellOn } from "react-icons/ci";
import { BsBrightnessHigh } from "react-icons/bs";
import './Header.css'
function Header() {
  return (
    <>
      <div className="header_container">
        <div className="header_admin">
            <img src='../img_header/person.webp' alt="img-admin" />
            <div >
                <h1>مهدی  بیاتی</h1>
                <h3>توسعه دهنده فرانت اند</h3>
            </div>
        </div>
        <div className="section_left">
            <div className="search_box">
                <input pattern="جست و جو کنید..." type="search" />
                <button>جستجو </button>

            </div>
          <button className="btn_header"><CiBellOn className="btn_header_icon" /></button>
          <button className="btn_header"><BsBrightnessHigh className="btn_header_icon" /></button>
        </div>
      </div>
    </>
  );
}

export default Header;
