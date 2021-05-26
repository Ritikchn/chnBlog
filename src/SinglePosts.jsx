import React from "react";

function SinglePost(props){
    return(
        <div>
            <img src={props.img} alt="some-pic" />
            <h1>{props.heading}</h1>
            <p>{props.par}</p>
        </div>
    )
}
export default SinglePost;