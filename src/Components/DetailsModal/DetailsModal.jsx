import React,{Children, useEffect} from "react";
import "./DetailsModal.css";

function DetailsModal({onHide,children}) {

  useEffect(() => {
    const checkKey = (event) => {
        if (event.key === "Escape") {
            onHide()
        }
    }
    window.addEventListener('keydown', checkKey)
    
    // پاکسازی event listener
    return () => {
        window.removeEventListener('keydown', checkKey)
    }
}, [onHide])

  return (
    <div className=" modals_parent active">
      <div className="detailsModal">
        {children}
      </div>
    </div>
  );
}

export default DetailsModal;
