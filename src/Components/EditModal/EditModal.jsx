import React , {useEffect} from "react";
import './EditModal.css'
function EditModal({children , onClose , onSubmit }) {

    useEffect(() => {
        const checkKey = (event) => {
            if (event.key === "Escape") {
                onClose()
            }
        }
        window.addEventListener('keydown', checkKey)
        
        // پاکسازی event listener
        return () => {
            window.removeEventListener('keydown', checkKey)
        }
    }, [onClose])
    return ( 
        <>
        <div className="modals_parent active">
            <form action="#" className="edit_modal_form">
                <h1>اطلاعات را وارد کنید</h1>
                {children}

                <button  className="edit_form_submit" onClick={onSubmit}> ارسال</button>
            </form>
        </div>
        </>
     );
}

export default EditModal;