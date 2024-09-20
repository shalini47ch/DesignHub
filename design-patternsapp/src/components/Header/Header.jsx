import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DesignPattern Hub
          </Typography>
          <Button color="inherit" component={Link} to="/">
            HOME
          </Button>
          <Button color="inherit" component={Link} to="/patterns">
            PATTERNS
          </Button>
          <Button color="inherit" component={Link} to="/casestudy">
            CASE STUDIES
          </Button>
          <Button color="inherit" component={Link} to="/quiz">
            Quiz
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
