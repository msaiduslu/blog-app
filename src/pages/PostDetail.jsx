import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import usePostCall from "../hooks/usePostCall";
import { useEffect } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { blueGrey } from "@mui/material/colors";
import PostModal from "../components/PostModal";
import { useNavigate } from "react-router-dom";
import Comments from "../components/Comments";

const PostDetail = () => {
  const navigate = useNavigate();
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState("");
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const { postDetail } = useSelector((state) => state.posts);
  const { getPostDetail, getCategoryList, postDelete, commentCreate } =
    usePostCall();
  const { currentUser } = useSelector((state) => state.auth);

  const handleLikes = () => {
    if (currentUser) {
      likesCreate(postDetail.id);
    }
  };

  useEffect(() => {
    getPostDetail(id);
    getCategoryList();
  }, []);

  const handleDelete = () => {
    postDelete(postDetail.id);
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const infoComment = { post: postDetail.id, content: comment };
    commentCreate(postDetail.id, infoComment);
    setComment("");
  };
  return (
    <Container maxWidth={"md"} sx={{ marginTop: "1rem", marginBottom: "3rem" }}>
      <Box sx={{ width: "100%", margin: "auto" }}>
        <CardMedia
          sx={{
            margin: "auto",
            height: 400,
            maxWidth: "100%",
            objectFit: "contain",
            p: "1em 1em 0 1em",
            component: "img",
          }}
          image={postDetail.image}
          title={postDetail.title}
        />
        <CardContent>
          <Box
            display="flex"
            justifyContent={"start"}
            alignItems={"center"}
            sx={{ gap: 2, marginBottom: 2 }}
          >
            <Avatar sx={{ bgcolor: "#002884" }}>
              {postDetail?.author?.charAt(0).toUpperCase()}
            </Avatar>
            <Box>
              <Typography>{postDetail.author}</Typography>
              <Typography>
                {new Date(postDetail.publish_date).toLocaleString()}
              </Typography>
            </Box>
          </Box>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ textAlign: "start" }}
            color="primary"
          >
            {postDetail.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {postDetail.content}
          </Typography>
        </CardContent>

        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <IconButton onClick={handleLikes}>
              <FavoriteIcon color={postDetail.likes ? "error" : "inherit"} />
              {postDetail.likes}
            </IconButton>
            <IconButton onClick={() => setShowComment(!showComment)}>
              <ChatBubbleOutlineOutlinedIcon />
              {postDetail.comment_count}
            </IconButton>
            <IconButton>
              <VisibilityIcon />
              {postDetail.post_views}
            </IconButton>
          </Box>
        </CardActions>
      </Box>
      {currentUser && currentUser === postDetail.author && (
        <Box display="flex" justifyContent="center" gap={5} marginTop={3}>
          <Button
            color="success"
            variant="contained"
            onClick={() => setOpen(!open)}
          >
            Update Post
          </Button>
          <Button color="error" variant="contained" onClick={handleDelete}>
            Delete Post
          </Button>
          <PostModal postDetail={postDetail} setOpen={setOpen} open={open} />
        </Box>
      )}
      {showComment && (
        <Box>
          <Box>
            {postDetail.comments.map((comment) => (
              <Comments key={comment.id} comment={comment} />
            ))}
          </Box>
          <Box
            component="form"
            marginTop={5}
            sx={{ textAlign: "end" }}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Type your comment here..."
              name="comment"
              id="comment"
              type="text"
              variant="outlined"
              required
              multiline
              fullWidth
              value={comment}
              minRows={3}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: "1rem" }}
            >
              Send
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default PostDetail;
