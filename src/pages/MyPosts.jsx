import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import usePostCall from "../hooks/usePostCall";
import { useEffect } from "react";

const MyPosts = () => {
  const { userId } = useSelector((state) => state.auth);
  const { userPosts } = useSelector((state) => state.posts);
  const { getUserPosts } = usePostCall();
  useEffect(() => {
    getUserPosts(userId);
  }, []);

  return (
    <Grid container spacing={2} marginTop={1} marginBottom={8}>
      {userPosts.map((post) => (
        <Grid key={post.id} item xs={12} sm={6} md={4} lg={3}>
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MyPosts;
