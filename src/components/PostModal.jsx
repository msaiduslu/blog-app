import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import usePostCall from "../hooks/usePostCall";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  boxShadow: "21px 16px 26px 2px rgba(89 109 222 / 0.45)",
  borderRadius: 3,
};

export default function PostModal({ open, setOpen, postDetail }) {
  const [title, setTitle] = useState(postDetail.title);
  const [image, setImage] = useState(postDetail.image);
  const [category, setCategory] = useState(postDetail.category);
  const [status, setStatus] = useState(postDetail.status);
  const [content, setContent] = useState(postDetail.content);

  const { postUpdate } = usePostCall();
  const { loading, categories } = useSelector((state) => state.posts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      title: title,
      image: image,
      category: category,
      status: status,
      content: content,
    };

    postUpdate(postDetail.id, info);
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(!open);
    setTitle(postDetail.title);
    setImage(postDetail.image);
    setCategory(postDetail.category);
    setStatus(postDetail.status);
    setContent(postDetail.content);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
            component="form"
            onSubmit={handleSubmit}
          >
            <Typography variant="h6" color="primary">
              Update Post
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
              UPDATE POST
            </LoadingButton>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
