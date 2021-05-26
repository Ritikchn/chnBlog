import React from "react";
import {Link} from "react-router-dom";
function Posts(props){
    var heading=props.heading;
    var paragraph=props.p;
    return(
        <Link to={"/"+props.id}>
        <div className="posts-container">
        <div className="posts-img">
        <img src={props.src} alt="some img"></img>

        </div>
        <div className="posts-heading">
            <h3>{heading}</h3>
        </div>
        <div className="posts-summary">
            <p>{paragraph.substring(1,250)}</p>
        </div>

        </div>
        </Link>
    )
}
export default Posts;