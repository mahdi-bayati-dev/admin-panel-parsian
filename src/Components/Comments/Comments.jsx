import React from "react";
import ErrorBox from "../Error/ErrorBox";
// import DeleteModal from "../DeleteModal/DeleteModal";
function Comment() {
    return (
         <>
         <ErrorBox msg={'هیچ کامنتی یافت نشد'}/>
         {/* <DeleteModal/> */}

         <h2>comments</h2>

         </> 
        );
}

export default Comment;