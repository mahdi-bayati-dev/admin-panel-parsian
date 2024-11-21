import React from "react";
import './ProductTables.css';

function ProductsTables() {
    return (
        <div className="product-tables-container">
            <table className="product-tables">
                <thead>
                    <tr className="product-tables-heading-tr">
                        <th>عکس</th>
                        <th>اسم</th>
                        <th>قیمت</th>
                        <th>موجودی</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="product-tables-tr">
                        <td>
                            <img 
                                src="./img_product/JBL-Tune-720BT-Black-1.jpg" 
                                alt="هدفون" 
                                className="product-tables-img"
                            />
                        </td>
                        <td>هدفون</td>
                        <td>8000000 تومان</td>
                        <td>13</td>
                        <td>
                            <button className="product-btn">جزئیات</button>
                            <button className="product-btn">حذف</button>
                            <button className="product-btn">ویرایش</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ProductsTables;
