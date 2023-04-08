import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import usePostCall from "../hooks/usePostCall";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";

const NewPostForm = ({ categories }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [content, setContent] = useState("");

  const { postCreate } = usePostCall();
  const { loading } = useSelector((state) => state.posts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      title: title,
      image: image,
      category: category,
      status: status,
      content: content,
    };

    postCreate(info);
    setTitle("");
    setImage("");
    setCategory("");
    setStatus("");
    setContent("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        boxShadow: "21px 16px 26px 2px rgba(89 109 222 / 0.45)",
        borderRadius: 3,
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Typography variant="h6" color="primary">
        New Post
      </Typography>
      <TextField
        label="Title"
        name="title"
        id="title"
        type="text"
        variant="outlined"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Image URL"
        name="image"
        id="image"
        type="url"
        variant="outlined"
        required
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          labelId="category"
          id="category"
          name="category"
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          {categories.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="status"
          id="status"
          name="status"
          value={status}
          label="Status"
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <MenuItem value="d">Draft</MenuItem>
          <MenuItem value="p">Published</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Content"
        name="content"
        id="content"
        type="text"
        variant="outlined"
        required
        value={content}
        multiline
        minRows={3}
        onChange={(e) => setContent(e.target.value)}
      />
      <LoadingButton
        loading={loading}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 2, mb: 1 }}
      >
        NEW POST
      </LoadingButton>
    </Box>
  );
};

const NewPost = () => {
  const { getCategoryList } = usePostCall();

  const { categories } = useSelector((state) => state.posts);

  useEffect(() => {
    getCategoryList();
  }, []);

  if (!categories) return null;

  return (
    <Container maxWidth="xs" sx={{ marginTop: "2rem" }}>
      {/* <Paper elevation={6} sx={{ p: 2 }}> */}
      <NewPostForm categories={categories} />
      {/* </Paper> */}
    </Container>
  );
};

export default NewPost;
