import React, { useEffect, useState } from "react";
import service from "../../appwirte/service";
import { Container, PostCard } from "../index";
function AllPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    service
      .getAllPosts([])
      .then((posts) => {
        if (posts) setPosts(posts.documents);
      })
      .catch((e) => {
        console.log("error while getting all posts", e);
      });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts?.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
