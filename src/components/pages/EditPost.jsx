import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../index";
import service from "../../appwirte/service";
import { useNavigate, useParams } from "react-router-dom";
function EditPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (slug) {
      service
        .getPost(slug)
        .then((post) => {
          if (post) {
            setPost(post);
          }
        })
        .catch((error) => {
          console.log("error in getting single post", error);
        });
    } else navigate("/");
  }, [slug, navigate]);
  return post ? (
    <div className="py-8">
      <Container>
        <PostCard post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
