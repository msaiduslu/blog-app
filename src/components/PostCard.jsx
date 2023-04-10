import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import usePostCall from "../hooks/usePostCall";
import { useSelector } from "react-redux";

export default function PostCard({ post }) {
  const navigate = useNavigate();
  const { likesCreate } = usePostCall();

  const { currentUser } = useSelector((state) => state.auth);

  const handleLikes = () => {
    if (currentUser) {
      likesCreate(post.id);
    }
  };

  return (
    <Card elevation={6} sx={{ width: 345, margin: "auto" }}>
      <CardMedia
        sx={{
          height: 250,
          maxWidth: 345,
          objectFit: "contain",
          p: "1em 1em 0 1em",
        }}
        image={post.image}
        title={post.title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center" }}
          color="primary"
        >
          {post.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ height: 58, overflow: "hidden" }}
        >
          {post.content}
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 3,
          marginLeft: 2,
        }}
      >
        <Typography component="div" variant="body2" color="text.secondary">
          {new Date(post.publish_date).toLocaleString()}
        </Typography>
        <Typography component="div" variant="body2" color="primary">
          <IconButton>
            <AccountBoxIcon color="primary" />
          </IconButton>
          {post.author}
        </Typography>
      </Box>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <IconButton onClick={handleLikes}>
            <FavoriteIcon color={post.likes ? "error" : "inherit"} />
            {post.likes}
          </IconButton>
          <IconButton>
            <ChatBubbleOutlineOutlinedIcon />
            {post.comment_count}
          </IconButton>
          <IconButton>
            <VisibilityIcon />
            {post.post_views}
          </IconButton>
        </Box>
        <Button
          onClick={() => navigate(`/post-detail/${post.id}`, post.id)}
          size="small"
          color="primary"
          variant="contained"
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
