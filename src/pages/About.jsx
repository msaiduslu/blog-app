import {
  Box,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

import about from "../assets/about.jpg";
import { useSelector } from "react-redux";
const About = () => {
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
    margin: "auto",
  };
  const { userEmail, currentUser } = useSelector((state) => state.auth);
  return (
    <Container maxWidth="md" sx={{ marginTop: 3 }}>
      <Box sx={profileStyle}>
        <CardMedia
          sx={{
            margin: "auto",
            height: "20vh",
            maxWidth: "100%",
            objectFit: "contain",
            p: "1em 1em 0 1em",
          }}
          image={about}
          title="Profile"
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            color="primary"
          >
            <IconButton
              href="https://www.linkedin.com/in/muhammed-said-uslu-7b87801b/?originalSubdomain=tr"
              target="true"
            >
              <LinkedInIcon
                sx={{
                  color: "black",
                  "&:hover": { color: "blue" },
                  fontSize: 45,
                }}
              />
            </IconButton>
            <IconButton href="https://github.com/msaiduslu" target="true">
              <GitHubIcon
                sx={{
                  color: "black",
                  "&:hover": { color: "red" },
                  fontSize: 45,
                }}
              />
            </IconButton>
            <IconButton href="https://twitter.com" target="true">
              <TwitterIcon
                sx={{
                  color: "black",
                  "&:hover": { color: "blue" },
                  fontSize: 45,
                }}
              />
            </IconButton>
            <IconButton href="https://instagram.com" target="true">
              <InstagramIcon
                sx={{
                  color: "black",
                  "&:hover": { color: "blue" },
                  fontSize: 45,
                }}
              />
            </IconButton>
            <IconButton href="https://youtube.com" target="true">
              <YouTubeIcon
                sx={{
                  color: "black",
                  "&:hover": { color: "red" },
                  fontSize: 45,
                }}
              />
            </IconButton>
          </Box>
        </CardContent>
      </Box>
    </Container>
  );
};

export default About;
