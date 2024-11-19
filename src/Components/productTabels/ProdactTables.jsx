import DetailsModal from "../DetailsModal/DetailsModal";
import React, { useState } from "react";
import './ProductTables.css';
import DeleteModal from "../DeleteModal/DeleteModal";

function ProductsTables() {
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [isShowDetailsModal, setIsShowDetailsModal] = useState(false)

    const DeleteModalCancelAction = () => {
        console.log('مودال کنسل شد');
        setIsShowDeleteModal(false)
    }

    const DeleteModalSubmitAction = () => {
        console.log('مودال تایید شد');
        setIsShowDeleteModal(false)
    }

    const closeDetailsModal=()=>{
        setIsShowDetailsModal(false)
    }

    return (
        <>
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
                                <button className="product-btn" onClick={() => setIsShowDetailsModal(true)}>جزئیات</button>
                                <button className="product-btn" onClick={() => setIsShowDeleteModal(true)}>حذف</button>
                                <button className="product-btn">ویرایش</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {isShowDeleteModal && <DeleteModal submitModal={DeleteModalSubmitAction} cancelModal={DeleteModalCancelAction}/>}
            {isShowDetailsModal && <DetailsModal onHide={closeDetailsModal} />}
        </>
    );
}

export default ProductsTables;
