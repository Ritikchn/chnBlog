import React, { useContext, useState } from "react";
import { userInfoContext } from "../ContextApi";

const CommentForm = (props) => {
  const [comment, setComment] = useState("");
  var { Data } = useContext(userInfoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeof Data.name == "undefined") alert("please log in");
    else {
      props.function({ writer: Data.name, content: comment, img: Data.img });
      setComment("");
    }
  };

  return (
    <div className="commentform-container">
      <input
        onChange={(e) => setComment(e.target.value)}
        type="text"
        name="comment"
        placeholder="Type your Comment"
        autoComplete="off"
        value={comment}
      />
      <div onClick={handleSubmit}>
        <i className="fa fa-telegram-plane fa-2x"></i>
      </div>
    </div>
  );
};
export default CommentForm;
