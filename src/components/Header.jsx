import React from "react";
import SearchIcon from "@mui/icons-material/SearchSharp";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";

function Header() {
  return (
    <header className="flex justify-between px-6 h-16 items-center">
      <Button variant="text">Subscribe</Button>
      <Typography component="div" variant="h5">
        Blog
      </Typography>
      <div>
        <IconButton sx={{ marginRight: 1 }}>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined">sign up</Button>
      </div>
    </header>
  );
}

export default Header;