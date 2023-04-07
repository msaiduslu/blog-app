import { Grid } from "@mui/material";
import React from "react";
import PostCard from "../components/PostCard";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import usePostCall from "../hooks/usePostCall";

const Home = () => {
  const { posts } = useSelector((state) => state.posts);
  const { getPostList } = usePostCall();

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <>
      <Grid container spacing={2} marginTop={1} marginBottom={8}>
        {posts.map((post) => (
          <Grid key={post.id} item xs={12} sm={6} md={4} lg={3}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
