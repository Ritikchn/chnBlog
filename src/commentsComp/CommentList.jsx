import React, { useEffect, useState, useContext } from "react";
import SingleComment from "./SingleComment";
import { dbDataContext } from "../ContextApi";
import axios from "axios";

const CommentList = (props) => {
  const [loading, setLoading] = useState(true);
  const { DbData, updateDb } = useContext(dbDataContext);
  useEffect(() => {
    axios
      .get("https://blog-appserver.herokuapp.com/getData")
      .then((res) => res.data.test)
      .then((res) => {
        updateDb(res);
      })
      .finally(setLoading(false));
  }, []);

  if (loading) return "Loading";
  return (
    <div className="commentlist-container">
      {props.Data.map((comment, index) => {
        return (
          <SingleComment
            key={index}
            writer={comment.writer}
            content={comment.content}
            dp={comment.img}
          />
        );
      })}
    </div>
  );
};
export default CommentList;
