import React from "react";
import {
 
  Typography,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import { Book, Code, Lightbulb } from "@mui/icons-material";
// import Header from "../Header/Header"


const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
  },
});

export default function Homepage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <Header/> */}

        <Container component="main" sx={{ mt: 8, mb: 2, flexGrow: 1 }}>
          <Box sx={{ my: 4, textAlign: "center" }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Master Design Patterns
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
              Learn, implement and excel in software architecture
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mt: 2 }}
            >
              START LEARNING
            </Button>
          </Box>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader
                  title={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Book sx={{ mr: 1 }} />
                      23 Design Patterns
                    </Box>
                  }
                />
                <CardContent>
                  <Typography variant="body1">
                    Explore a new design pattern every day, from creational to
                    behavioral patterns.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader
                  title={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Code sx={{ mr: 1 }} />
                      Practical Examples
                    </Box>
                  }
                />
                <CardContent>
                  <Typography variant="body1">
                    See real-world implementations and coding examples for each
                    pattern.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader
                  title={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Lightbulb sx={{ mr: 1 }} />
                      Case Studies
                    </Box>
                  }
                />
                <CardContent>
                  <Typography variant="body1">
                    Learn how to apply design patterns to solve common software
                    design challenges.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ my: 4, textAlign: "center" }}>
            <Typography variant="h4" component="h3" gutterBottom>
              Why Learn Design Patterns?
            </Typography>
            <Typography
              variant="body1"
              sx={{ maxWidth: "800px", margin: "auto" }}
            >
              Design patterns are essential tools for creating scalable,
              maintainable, and efficient software. They provide proven
              solutions to common problems in software design, helping you write
              better code faster.
            </Typography>
          </Box>
        </Container>

      
        
      </Box>
    </ThemeProvider>
  );
}
