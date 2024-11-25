import DetailsModal from "../DetailsModal/DetailsModal";
import React, { useState, useEffect } from "react";
import "./ProductTables.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import { AiOutlineDollar } from "react-icons/ai";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { PiListNumbersLight } from "react-icons/pi";
import ErrorBox from "../Error/ErrorBox";
import { ToastContainer, toast } from "react-toastify";
import { GiEternalLove } from "react-icons/gi";
import { RiNumbersLine } from "react-icons/ri";
import "react-toastify/dist/ReactToastify.css";

function ProductsTables() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [allproducts, setAllProducts] = useState([]);
  const [productId, setProductId] = useState(null);
  const [mainProductInfos, setMainProductInfos] = useState({});

  const [TitleNew, setTitleNew] = useState("");
  const [priceNew, setPriceNew] = useState("");
  const [countNew, setCountNew] = useState("");
  const [popularityNew, setPopularityNew] = useState("");
  const [saleNew, setSaleNew] = useState("");

  const getAllProducts = () => {
    fetch("http://localhost:8000/api/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("خطا در دریافت محصولات از سرور");
        }
        return res.json();
      })
      .then((data) => {
        console.log("محصولات دریافت شدند:", data);
        setAllProducts(data);
      })
      .catch((err) => {
        console.error("خطا در دریافت محصولات:", err);
        setAllProducts([]); // در صورت خطا، لیست محصولات را خالی کنید
        toast.error("خطا در دریافت محصولات از سرور");
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const DeleteModalCancelAction = () => {
    console.log("مودال کنسل شد");
    setIsShowDeleteModal(false);
  };
  

  const DeleteModalSubmitAction = () => {
    // اطمینان از اینکه productId به درستی تنظیم شده است
    console.log("حذف محصول با ID:", productId);

    fetch(`http://localhost:8000/api/products/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Response status:", response.status); // بررسی وضعیت پاسخ
        if (!response.ok) {
          throw new Error("خطا در حذف محصول");
        }
        return response.json(); // اگر پاسخ JSON است، آن را تجزیه کنید
      })
      .then((data) => {
        console.log("Response data:", data); // نمایش داده‌های پاسخ
        getAllProducts(); // بروزرسانی لیست محصولات پس از حذف موفق
        setIsShowDeleteModal(false); // بستن مودال
        toast.success("محصول با موفقیت حذف شد");
      })
      .catch((err) => {
        console.error("خطا در حذف محصول:", err);
        toast.error("حذف محصول با خطا مواجه شد");
      });
  };

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };
  const updateProductInfos = (event) => {
    event.preventDefault();

    const productNewInfos = {
      title: TitleNew,
      price: priceNew,
      count: countNew,
      popularity: popularityNew,
      sale: saleNew,
    };

    fetch(`http://localhost:8000/api/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productNewInfos),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("خطا در ویرایش محصول");
        }
        return res.json(); // بررسی اینکه آیا پاسخ JSON است
      })
      .then((result) => {
        console.log("نتیجه ویرایش محصول:", result);
        getAllProducts(); // بروزرسانی لیست محصولات
        toast.success("محصول با موفقیت ویرایش شد");
      })
      .catch((err) => {
        console.error("خطا در ویرایش محصول:", err);
        toast.error("ویرایش محصول با خطا مواجه شد");
      });
  };

  return (
    <>
      <ToastContainer position="top-right" rtl={true} />
      <div className="product-tables-container">
        {allproducts.length ? (
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
              {allproducts.map((product) => (
                <tr key={product.id} className="product-tables-tr">
                  <td>
                    <img
                      src={product.img}
                      alt={product.title}
                      className="product-tables-img"
                    />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.price} تومان</td>
                  <td>{product.count}</td>

                  <td>
                    <button
                      className="product-btn"
                      onClick={() => {
                        setIsShowDetailsModal(true);
                        setMainProductInfos(product);
                      }}
                    >
                      جزئیات
                    </button>
                    <button
                      className="product-btn"
                      onClick={() => {
                        setIsShowDeleteModal(true);
                        setProductId(product.id);
                      }}
                    >
                      حذف
                    </button>
                    <button
                      className="product-btn"
                      onClick={() => {
                        setIsShowEditModal(true);
                        setProductId(product.id);
                        setTitleNew(product.title);
                        setPriceNew(product.price);
                        setCountNew(product.count);
                        setPopularityNew(product.popularity);
                        setSaleNew(product.sale);
                      }}
                    >
                      ویرایش
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <ErrorBox msg={"هیچ محصولی یافت نشد"} />
        )}
      </div>
      {isShowDeleteModal && (
        <DeleteModal
          submitModal={DeleteModalSubmitAction}
          cancelModal={DeleteModalCancelAction}
          title={'آیا از حذف اطمینان داری؟'}
        />
      )}
      {isShowDetailsModal && (
        <DetailsModal onHide={closeDetailsModal}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>اسم</th>
                <th>قیمت</th>
                <th>محبوبیت</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{mainProductInfos.title}</td>
                <td>{mainProductInfos.price}</td>
                <td>{mainProductInfos.popularity}</td>
              </tr>
            </tbody>
          </table>
        </DetailsModal>
      )}

      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={updateProductInfos}
        >
          <div className="edit_product_form_group">
            <span>
              <MdDriveFileRenameOutline />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit_product_input"
              value={TitleNew}
              onChange={(e) => {
                setTitleNew(e.target.value);
              }}
            />
          </div>
          <div className="edit_product_form_group">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="قیمت جدید"
              className="edit_product_input"
              value={priceNew}
              onChange={(e) => {
                setPriceNew(e.target.value);
              }}
            />
          </div>
          <div className="edit_product_form_group">
            <span>
              <PiListNumbersLight />
            </span>
            <input
              type="text"
              placeholder=" موجودی"
              className="edit_product_input"
              value={countNew}
              onChange={(e) => {
                setCountNew(e.target.value);
              }}
            />
          </div>
          <div className="edit_product_form_group">
            <span>
              <GiEternalLove />
            </span>
            <input
              type="text"
              placeholder="محبوبیت"
              className="edit_product_input"
              value={popularityNew}
              onChange={(e) => {
                setPopularityNew(e.target.value);
              }}
            />
          </div>
          <div className="edit_product_form_group">
            <span>
              <RiNumbersLine />
            </span>
            <input
              type="text"
              placeholder=" میزان فروش"
              className="edit_product_input"
              value={saleNew}
              onChange={(e) => {
                setSaleNew(e.target.value);
              }}
            />
          </div>
        </EditModal>
      )}
    </>
  );
}

export default ProductsTables;
