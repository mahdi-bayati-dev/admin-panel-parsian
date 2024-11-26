import React, { useState, useEffect } from "react";
import "./Users.css";
import ErrorBox from "../Error/ErrorBox";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import DetailsModal from "../DetailsModal/DetailsModal";

function Users() {
  const [users, setUsers] = useState([]);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [mainUserId, setMainUserId] = useState(null);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [mainUserInfos, setMainUserInfos] = useState({});
  const [isShowDeitiesModal, setIsShowDeitiesModal] = useState(false);

  const [userNewFirstName, setUserNewFisrtName] = useState("");
  const [userNewLastName, setUserNewLastName] = useState("");
  const [userNewUsername, setUserNewUsername] = useState("");
  const [userNewPassword, setUserNewPassword] = useState("");
  const [userNewPhone, setUserNewPhone] = useState("");
  const [userNewCity, setUserNewCity] = useState("");
  const [userNewEmail, setUserNewEmail] = useState("");
  const [userNewAddress, setUserNewAddress] = useState("");
  const [userNewBuy, setUserNewBuy] = useState("");
  const [userNewScore, setUserNewScore] = useState("");

  function getAllUsers() {
    fetch("http://localhost:8000/api/users")
      .then((res) => {
        if (!res.ok) throw new Error("خطا در دریافت کاربران");
        return res.json();
      })
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  const closeDeleteModal = () => {
    setIsShowDeleteModal(false);
  };

  const removeUser = () => {
    console.log(mainUserId);

    fetch(`http://localhost:8000/api/users/${mainUserId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("خطا در حذف کاربر");
        return res.json();
      })
      .then(() => {
        console.log("کاربر حذف شد");
        setIsShowDeleteModal(false);
        getAllUsers(); // به‌روزرسانی لیست کاربران
      })
      .catch((error) => {
        console.error(error);
        setIsShowDeleteModal(false); // بستن مودال حتی در صورت خطا
      });
  };

  const closeEditModal = () => {
    setIsShowEditModal(false);
    setMainUserId(null);
  };
  const closeDeitiesModal = () => {
    setIsShowDeitiesModal(false);
    setMainUserId(null);
  };

  const updateUser = (event) => {
    event.preventDefault();
    console.log(mainUserId);
    const userNewInfos = {
      firsname: userNewFirstName,
      lastname: userNewLastName,
      username: userNewUsername,
      password: userNewPassword,
      phone: userNewPhone,
      city: userNewCity,
      email: userNewEmail,
      address: userNewAddress,
      score: userNewScore,
      buy: userNewBuy,
    };
    fetch(`http://localhost:8000/api/users/${mainUserId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userNewInfos),
    })
      .then((res) => {
        if (!res.ok) throw new Error("خطا در ویرایش کاربر");
        return res.json();
      })
      .then(() => {
        setIsShowEditModal(false);
        getAllUsers(); // به‌روزرسانی لیست کاربران
      })
      .catch((error) => {
        console.error(error);
        setIsShowEditModal(false); // بستن مودال حتی در صورت خطا
      });
  };

  return (
    <div className="cms_main">
      {users.length ? (
        <>
          <h1>لیست کاربران</h1>
          <table className="cms-table">
            <thead>
              <tr>
                <th>نام و نام خانوادگی</th>
                <th>نام کاربری</th>
                <th>رمز عبور</th>
                <th>شماره تماس</th>
                <th>ایمیل</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    {user.firsname} {user.lastname}
                  </td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="comment_show_btn"
                      onClick={() => {
                        setIsShowDeleteModal(true);
                        setMainUserId(user.id);
                      }}
                    >
                      حذف
                    </button>
                    <button
                      className="comment_show_btn"
                      onClick={() => {
                        setMainUserInfos(user);
                        setIsShowDeitiesModal(true);
                      }}
                    >
                      جزییات
                    </button>
                    <button
                      className="comment_show_btn"
                      onClick={() => {
                        setIsShowEditModal(true);
                        setMainUserId(user.id);
                        setUserNewFisrtName(user.firsname);
                        setUserNewLastName(user.lastname);
                        setUserNewUsername(user.username);
                        setUserNewPassword(user.password);
                        setUserNewPhone(user.phone);
                        setUserNewCity(user.city);
                        setUserNewEmail(user.email);
                        setUserNewAddress(user.address);
                        setUserNewBuy(user.buy);
                        setUserNewScore(user.score);
                      }}
                    >
                      ویرایش
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <ErrorBox msg={"هیچ کاربری یافت نشد"} />
      )}
      {isShowDeleteModal && (
        <DeleteModal
          title={"آیا از حذف اطمینان دارید؟"}
          cancelModal={closeDeleteModal}
          submitModal={removeUser}
        />
      )}
      {isShowEditModal && (
        <EditModal onClose={closeEditModal} onSubmit={updateUser}>
          <div className="edit_product_form_group">
            <span></span>
            <input
              type="text"
              className="edit_product_input"
              placeholder="مقدار جدید را وارد نمایید:"
              value={userNewFirstName}
              onChange={(event) => {
                setUserNewFisrtName(event.target.value);
              }}
            />
          </div>
          <div className="edit_product_form_group">
            <span></span>
            <input
              type="text"
              className="edit_product_input"
              placeholder="مقدار جدید را وارد نمایید:"
              value={userNewLastName}
              onChange={(event) => {
                setUserNewLastName(event.target.value);
              }}
            />
          </div>{" "}
          <div className="edit_product_form_group">
            <span></span>
            <input
              type="text"
              className="edit_product_input"
              placeholder="مقدار جدید را وارد نمایید:"
              value={userNewUsername}
              onChange={(event) => {
                setUserNewUsername(event.target.value);
              }}
            />
          </div>{" "}
          <div className="edit_product_form_group">
            <span></span>
            <input
              type="text"
              className="edit_product_input"
              placeholder="مقدار جدید را وارد نمایید:"
              value={userNewPassword}
              onChange={(event) => {
                setUserNewPassword(event.target.value);
              }}
            />
          </div>{" "}
          <div className="edit_product_form_group">
            <span></span>
            <input
              type="text"
              className="edit_product_input"
              placeholder="مقدار جدید را وارد نمایید:"
              value={userNewPhone}
              onChange={(event) => {
                setUserNewPhone(event.target.value);
              }}
            />
          </div>{" "}
          <div className="edit_product_form_group">
            <span></span>
            <input
              type="text"
              className="edit_product_input"
              placeholder="مقدار جدید را وارد نمایید:"
              value={userNewCity}
              onChange={(event) => {
                setUserNewCity(event.target.value);
              }}
            />
          </div>{" "}
          <div className="edit_product_form_group">
            <span></span>
            <input
              type="text"
              className="edit_product_input"
              placeholder="مقدار جدید را وارد نمایید:"
              value={userNewEmail}
              onChange={(event) => {
                setUserNewEmail(event.target.value);
              }}
            />
          </div>{" "}
          <div className="edit_product_form_group">
            <span></span>
            <input
              type="text"
              className="edit_product_input"
              placeholder="مقدار جدید را وارد نمایید:"
              value={userNewAddress}
              onChange={(event) => {
                setUserNewAddress(event.target.value);
              }}
            />
          </div>{" "}
          <div className="edit_product_form_group">
            <span></span>
            <input
              type="text"
              className="edit_product_input"
              placeholder="مقدار جدید را وارد نمایید:"
              value={userNewBuy}
              onChange={(event) => {
                setUserNewBuy(event.target.value);
              }}
            />
          </div>
          <div className="edit_product_form_group">
            <span></span>
            <input
              type="text"
              className="edit_product_input"
              placeholder="مقدار جدید را وارد نمایید:"
              value={userNewScore}
              onChange={(event) => {
                setUserNewScore(event.target.value);
              }}
            />
          </div>
        </EditModal>
      )}
      {isShowDeitiesModal && (
        <DetailsModal onHide={closeDeitiesModal}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>شهر</th>
                <th>آدریس</th>
                <th>میزان فروش</th>
                <th>امتیاز</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{mainUserInfos.city}</td>
                <td>{mainUserInfos.address}</td>
                <td>{mainUserInfos.score}</td>
                <td>{mainUserInfos.buy}</td>
              </tr>
            </tbody>
          </table>
        </DetailsModal>
      )}
    </div>
  );
}

export default Users;
