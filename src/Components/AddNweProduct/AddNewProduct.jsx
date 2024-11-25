import React, { useState } from "react";
import "./AddNewProduct.css";
import { BsCursorText } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { IoIosColorFilter } from "react-icons/io";
import { FaRegChartBar } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";

function AddNewProduct() {
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductCount, setNewProductCount] = useState("");
  const [newProductPopularity, setNewProductPopularity] = useState("");
  const [newProductSale, setNewProductSale] = useState("");
  const [newProductColor, setNewProductColor] = useState("");
  const [newProductImg, setNewProductImg] = useState("");

  const newProductInfos={

      title:newProductName, 
      price:newProductPrice,
      count :newProductCount,
      img :newProductImg,
      popularity:newProductPopularity,
      sale:newProductSale,
      colors:newProductColor
  }

  


  const addNewProduct=(event)=>{
    event.preventDefault()
    fetch('http://localhost:8000/api/Products',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify( newProductInfos)
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result);
      
    })
  }

  return (
    <>
      <div className="add-new-product-container">
        <h1 className="product-title">افزودن محصول جدید</h1>
        <form className="add-product-form">
          <div className="add-new-product-input-container">
            <div className="add-product-form-group">
              <BsCursorText className="add_product_icon" />
              <input
                type="text"
                name="title"
                placeholder="اسم محصول را بنویسید"
                value={newProductName}
                onChange={(event) => {
                  setNewProductName(event.target.value);
                }}
              />
            </div>
            <div className="add-product-form-group">
              <MdOutlineConfirmationNumber className="add_product_icon" />
              <input
                type="number"
                name="count"
                placeholder="موجودی محصول را بنویسید"
                value={newProductCount}
                onChange={(event) => {
                  setNewProductCount(event.target.value);
                }}
              />
            </div>
            <div className="add-product-form-group">
              <CiStar className="add_product_icon" />
              <input
                type="number"
                name="popularity"
                placeholder="میزان محبوبیت محصول را بنویسید"
                value={newProductPopularity}
                onChange={(event) => {
                  setNewProductPopularity(event.target.value);
                }}
              />
            </div>
            <div className="add-product-form-group">
              <IoIosColorFilter className="add_product_icon" />
              <input
                type="text"
                name="colors"
                placeholder="تعداد رنگ بندی محصول را بنویسید"
                value={newProductColor}
                onChange={(event) => {
                  setNewProductColor(event.target.value);
                }}
              />
            </div>
            <div className="add-product-form-group">
              <MdAttachMoney className="add_product_icon" />
              <input
                type="number"
                name="price"
                placeholder="قیمت محصول را بنویسید"
                value={newProductPrice}
                onChange={(event) => {
                  setNewProductPrice(event.target.value);
                }}
              />
            </div>
            <div className="add-product-form-group">
              <CiImageOn className="add_product_icon" />
              <input
                type="text"
                name="img"
                placeholder="ادرس عکس محصول را بنویسید"
                value={newProductImg}
                onChange={(event) => {
                  setNewProductImg(event.target.value);
                }}
              />
            </div>
            <div className="add-product-form-group">
              <FaRegChartBar className="add_product_icon" />
              <input
                type="number"
                name="sale"
                placeholder="میزان فروش محصول را بنویسید"
                value={newProductSale}
                onChange={(event) => {
                  setNewProductSale(event.target.value);
                }}
              />
            </div>
          </div>

          <button onClick={addNewProduct} className="btn-add-new-product" type="submit">
            ثبت محصول
          </button>
        </form>
      </div>
    </>
  );
}

export default AddNewProduct;
