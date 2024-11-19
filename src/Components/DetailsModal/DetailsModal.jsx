import React,{useEffect} from "react";
import "./DetailsModal.css";

function DetailsModal({onHide}) {

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
        <table>
          <thead className="cms-table">
            <tr>
              <th>اسم</th>
              <th>قیمت</th>
              <th>محبوبیت</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>هدفون</td>
              <td>800000</td>
              <td>92</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DetailsModal;
