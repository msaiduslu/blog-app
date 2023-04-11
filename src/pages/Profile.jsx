import {
  Box,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import profile from "../assets/profile.jpg";
import { useSelector } from "react-redux";

const Profile = () => {
  const profileStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 600,
    bgcolor: "background.paper",
    border: "2px solid #1e2cee8b",
    boxShadow: 24,
    p: 0,
    boxShadow: "21px 16px 26px 2px rgba(89 109 222 / 0.45)",
    borderRadius: 3,
    // width: "40%",
    margin: "auto",
  };
  const { userEmail, currentUser } = useSelector((state) => state.auth);
  return (
    <Container maxWidth="md" sx={{ marginTop: 3 }}>
      <Box sx={profileStyle}>
        <CardMedia
          sx={{
            margin: "auto",
            height: 300,
            maxWidth: "100%",
            objectFit: "contain",
          }}
          image={profile}
          title="Profile"
          component="img"
        />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography gutterBottom variant="h5" component="div" color="primary">
            {currentUser}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
            color="primary"
          >
            {userEmail}
          </Typography>
        </CardContent>
      </Box>
    </Container>
  );
};

export default Profile;
