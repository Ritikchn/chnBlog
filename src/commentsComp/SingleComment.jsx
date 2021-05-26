import React from "react";
const SingleComment=(props)=>{
    return(
        <div className="singlecomment-container">
        <div className="singlecomment-img">
            <img alt="dp" width="50px" height="50px" src={props.dp}/>
        </div>
        <div className="singlecomment-text">
            <h3>{props.writer}</h3>
            <p>{props.content}</p>
        </div>

        </div>
    )
}
export default SingleComment;