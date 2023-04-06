import { Paper, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Paper
      component="footer"
      square
      variant="outlined"
      sx={{
        position: "fixed",
        bottom: 5,
        right: 0,
        left: 0,
        width: "100%",
        bgcolor: "#1976D2",
        color: "white",
        p: 1,
      }}
    >
      <Typography margin={"auto"} variant="body1" align="center" gutterBottom>
        Copyright © MsaidUSLU 2023
      </Typography>
    </Paper>
  );
};

export default Footer;
