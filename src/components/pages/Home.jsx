import React, { useEffect, useState } from "react";
import service from "../../appwirte/service";
import { Container, PostCard } from "../index";

export default function Home() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    service
      .getAllPosts()
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      })
      .catch((err) => {
        console.log("error in fetching post at home ", err);
      });
  }, []);

  if (posts && posts.length > 0) {
    return;
    <div className="w-full py-8 mt-4 text-center">
      <div className="flex flex-wrap"></div>
      <Container>
        {posts.map((post) => (
          <PostCard key={post.$id} post={post} />
        ))}
      </Container>
    </div>;
  } else {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <div className="flex flex-wrap">
          <Container>
            <h1 className="text-2xl font-bold text-gray-800">
              Login to view posts
            </h1>
          </Container>
        </div>
      </div>
    );
  }
}
