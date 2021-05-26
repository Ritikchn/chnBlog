import React, { useContext, useEffect, useState } from "react";
import Posts from "./Posts";
import { dbDataContext } from "./ContextApi";
function PostArea() {
  const [mount, setMount] = useState(true);
  const [loading, setLoading] = useState(true);
  const { DbData, updateDb } = useContext(dbDataContext);
  useEffect(() => {
    const abortController = new AbortController();
    const signal1 = abortController.signal;
    fetch("/getData", { signal: signal1 })
      .then((res) => res.json())
      .then((res) => updateDb(res.test))
      .finally(() => setLoading(false));
    if (mount && DbData) {
      setLoading(true);
    }
    return () => {
      abortController.abort();
      setMount(false);
    };
  }, []);

  if (loading) return "Loading...";

  return (
    <div>
      <div class="post-area-title">
        <div className="new-posts-title">
          <h2>New Posts</h2>
        </div>
        <span></span>
      </div>
      <div className="various-posts">
        {DbData.map((post, index) => {
          return (
            <Posts
              key={index}
              id={post.id}
              src={post.img}
              heading={post.heading}
              p={post.paragraph}
            />
          );
        })}
      </div>
    </div>
  );
}
export default PostArea;
