import React from "react";
import './AddNewProduct.css';
import { BsCursorText } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { MdOutlineConfirmationNumber } from "react-icons/md"
import { MdAttachMoney } from "react-icons/md";
import { IoIosColorFilter } from "react-icons/io";
import { FaRegChartBar } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";

function AddNewProduct() {
  return (
    <div className="add-new-product-container">
      <h1 className="product-title">افزودن محصول جدید</h1>
      <form className="add-product-form">
        <div className="add-new-product-input-container">
          <div className="add-product-form-group">
          <BsCursorText  className='add_product_icon'/>
            <input type="text" placeholder="اسم محصول را بنویسید"/>
          </div>
          <div className="add-product-form-group">
          <MdOutlineConfirmationNumber  className='add_product_icon'/>
            <input type="text" placeholder="موجودی محصول را بنویسید"/>
          </div>
          <div className="add-product-form-group">
          <CiStar  className='add_product_icon'/>
            <input type="text" placeholder="میزان محبوبیت محصول را بنویسید"/>
          </div>
          <div className="add-product-form-group">
          <IoIosColorFilter className='add_product_icon' />
            <input type="text" placeholder="تعداد رنگ بندی محصول را بنویسید"/>
          </div>
          <div className="add-product-form-group">
          <MdAttachMoney  className='add_product_icon'/>
            <input type="text" placeholder="قیمت محصول را بنویسید"/>
          </div>
          <div className="add-product-form-group">
          <CiImageOn className='add_product_icon' />
            <input type="text" placeholder="ادرس عکس محصول را بنویسید"/>
          </div>
          <div className="add-product-form-group">
          <FaRegChartBar  className='add_product_icon'/>
            <input type="text" placeholder="میزان فروش محصول را بنویسید"/>
          </div>
        </div>
        <button className="btn-add-new-product">ثبت محصول</button>
      </form>
    </div>
  );
}

export default AddNewProduct;
