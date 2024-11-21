import ReactDOM from "react-dom";
import "./DeleteModal.css";

 export default  function DeleteModal() {
  return ReactDOM.createPortal(
    <div className={'modals_parent '}>   
      <div className="delete_modal">
        <h1>آیا از حذف اطمینان دارید؟</h1>
        <div className="delete_modal_btn">
          <button 
            className="delete_btn delete_modal_accept_btn"
            
          >
            بله
          </button>
          <button 
            className="delete_btn delete_modal_reject_btn"
            
          >
            خیر
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modals_parent')
  );
}

