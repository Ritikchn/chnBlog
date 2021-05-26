import React, { useContext, useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { dbDataContext } from "../ContextApi";
import "../css/CommentBox.css";
import axios from "axios";

const CommentBox = (props) => {
  
  const [loading, setLoading] = useState(true);
  const { DbData, updateDb } = useContext(dbDataContext);

  var post = props.postNo;

  // if (typeof DbData === "undefined") return <div />;

  var result = DbData.find(({ id }) => id === parseInt(post));
  const [newComment, setNewComment] = useState(result);
  const AddnewComment = (data) => {
    axios.post("https://blog-appserver.herokuapp.com/addComment", { post, data });

    // setNewComment((prev) => prev + 1);
    result.comments.unshift(data);

    axios
      .get("https://blog-appserver.herokuapp.com/getData")
      .then((res) => res.data.test)
      .then((res) => {
        updateDb(res);
      }).then(setNewComment(DbData.find(({ id }) => id === parseInt(post))))
      .finally(setLoading(false));
  };

  return (
    <div className="commentbox-container">
      <CommentForm function={AddnewComment} />

      <CommentList
        postNo={props.postNo}
        Data={newComment.comments}
        render={newComment}
      />
    </div>
  );
};
export default CommentBox;
