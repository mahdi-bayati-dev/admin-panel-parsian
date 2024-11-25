import React, { useState, useEffect } from "react";
import "./Users.css";
import ErrorBox from "../Error/ErrorBox";
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/users")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      });
  }, []);
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
                    <button className="comment_show_btn">حذف</button>
                    <button className="comment_show_btn">جزییات</button>
                    <button className="comment_show_btn">ویرایش</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <ErrorBox msg={"هیچ کاربری یافت نشد"} />
      )}
    </div>
  );
}

export default Users;
