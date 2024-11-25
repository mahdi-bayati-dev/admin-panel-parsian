import React, { useState, useEffect } from "react";
import ErrorBox from "../Error/ErrorBox";
import "./Comments.css";
import DetailsModal from "../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";

function Comment() {
  const [allComments, setAllComments] = useState([]);
  const [isShowDeitiesModal, setShowDeitiesModal] = useState(false);
  const [isShowDeleteModal, setShowDeleteModal] = useState(false);
  const [isShowEditModal, setShowEditModal] = useState(false);
  const [mainCommentBody, setMainCommentBody] = useState("");
  const [commentId, setCommentId] = useState(null);
  const [isShowAcceptModal, setIsShowAcceptModal] = useState(false);


  const closeDeitiesModal = () => setShowDeitiesModal(false);
  const closeDeleteModal = () => setShowDeleteModal(false);
  const closeEditModal = () => setShowEditModal(false);

  const closeAcceptModal = () => setIsShowAcceptModal(false);

  const AcceptComment = () => {
    fetch(`http://localhost:8000/api/comments/accept/${commentId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data =>{ 
            console.log('Comment accepted:', data)
            setIsShowAcceptModal(false)
            getAllComments()
            console.log(commentId);
            
        })
        .catch(error => console.error('Error:', error));
    
  };
  
  
  useEffect(() => {
    getAllComments();
  }, []);

  function getAllComments() {
    fetch("http://localhost:8000/api/comments")
      .then((res) => res.json())
      .then((comments) => setAllComments(comments));
  }

  const deleteComment = () => {
    fetch(`http://localhost:8000/api/comments/${commentId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setShowDeleteModal(false);
        getAllComments();
      })
      .catch((error) => {
        console.error("Error deleting comment:", error);
      });
  };
  const updateComments = (event) => {
    event.preventDefault()
    fetch(`http://localhost:8000/api/comments/${commentId}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
    },
      body: JSON.stringify({
        body: mainCommentBody
    })
    })
      .then((res) => res.json())
      .then((result) => {
        getAllComments()
        setShowEditModal(false)
        console.log(result);
        
    })
}
  return (
    <div className="cms_main">
      {allComments.length ? (
        <table className="cms-table">
          <thead>
            <tr>
              <th>اسم کابرد</th>
              <th>محصول</th>
              <th>کامنت</th>
              <th>تاریخ</th>
              <th>ساعت</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {allComments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.userID}</td>
                <td>{comment.productID}</td>
                <td>
                  <button
                    onClick={() => {
                      setShowDeitiesModal(true);
                      setMainCommentBody(comment.body);
                    }}
                    className="comment_show_btn"
                  >
                    متن کامنت
                  </button>
                </td>
                <td>{comment.date}</td>
                <td>{comment.hour}</td>
                <td>
                  <button
                    className="comment_show_btn"
                    onClick={() => {
                      setShowDeleteModal(true);
                      setCommentId(comment.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    className="comment_show_btn"
                    onClick={() => {
                      setShowEditModal(true);
                      setMainCommentBody(comment.body);
                      setCommentId(comment.id);
                    }}
                  >
                    ویرایش
                  </button>
                  <button className="comment_show_btn">پاسخ</button>
                  <button className="comment_show_btn" onClick={()=>{
                     setIsShowAcceptModal(true)
                     setCommentId(comment.id)
                     }}>تایید</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg={"هیچ کامنتی یافت نشد"} />
      )}
      {isShowDeitiesModal && (
        <DetailsModal onHide={closeDeitiesModal}>
          <p className="text_modal">{mainCommentBody}</p>
          <button
            className="text_modal_close_btn"
            onClick={() => setShowDeitiesModal(false)}
          >
            بستن
          </button>
        </DetailsModal>
      )}
      {isShowDeleteModal && (
        <DeleteModal
          cancelModal={closeDeleteModal}
          submitModal={deleteComment}
          title={'آیا از حذف اطمینان دارید؟'}
        ></DeleteModal>
      )}
      {isShowEditModal && (
        <EditModal onClose={closeEditModal} onSubmit={updateComments}>
          <textarea
            value={mainCommentBody}
            onChange={(event) => {
              setMainCommentBody(event.target.value);
            }}
          ></textarea>
        </EditModal>
      )}
      {
        isShowAcceptModal && (
            <DeleteModal
            title={'ایا از تایید اطمینان دارید؟'}
            cancelModal={closeAcceptModal}
            submitModal={AcceptComment}
            />

          
        )
      }
    </div>
  );
}

export default Comment
