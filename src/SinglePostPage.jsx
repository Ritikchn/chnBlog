import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/SinglePost.css";
import CommentBox from "./commentsComp/CommentBox";
import { dbDataContext } from "./ContextApi";

function SinglePostPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { DbData } = useContext(dbDataContext);
  var { post } = useParams();

  const result = DbData.find(({ id }) => id === parseInt(post));

  return (
    <div className="singlepost-container">
      <div className="singlepost-img">
        <img src={result.img} alt="some-pic" />
      </div>
      <div className="singlepost-heading">
        <h1>{result.heading}</h1>
      </div>
      <div className="singlepost-paragraph">
        <p> {result.paragraph}</p>
      </div>
      <CommentBox postNo={post} />
    </div>
  );
}
export default SinglePostPage;
