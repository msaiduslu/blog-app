import { Grid } from "@mui/material";
import React from "react";
import PostCard from "../components/PostCard";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import usePostCall from "../hooks/usePostCall";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

const Home = () => {
  const { getPostList } = usePostCall();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <>
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((post) => (
          <Grid key={post.id} item xs={12} sm={6} md={4} lg={3}>
            <PostCard post={post} />
          </Grid>
        ))
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            justifyItems: "center",
            height: "100vh",
          }}
        >
          <Typography
            component="div"
            align="center"
            variant="body2"
            color="text.secondary"
          >
            {" "}
            No Blog Is Available
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Home;
