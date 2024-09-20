import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Button,
  Typography,
  Box,
  Tabs,
  Tab,
  Grid,
  Chip,
  Zoom,
  Fade,
} from "@mui/material";
import {
  Code as CodeIcon,
  Book as BookIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";

import ElevatorIcon from "@mui/icons-material/Elevator";
import amazonclass from "../../images/amazonclassdiag.png";
import library1 from "../../images/librarary1.png";

const fetchGitHubContent = async (urls) => {
  const files = await Promise.all(
    urls.map((url) =>
      fetch(url)
        .then((response) => (response.ok ? response.text() : "Failed to fetch"))
        .catch((error) => {
          console.error("Failed to fetch:", error);
          return "Failed to fetch";
        })
    )
  );
  return files;
};

const Case = () => {
  const [activeTab, setActiveTab] = useState("classdiagram");
  const [implementations, setImplementations] = useState({});
  const [loading, setLoading] = useState({});

  const caseStudies = [
    {
      title: "Library Management System",
      description: "Low-level design of a library management system",
      classDiagram: library1,
      implementationUrls: [
        {
          title: "Address Class",
          url: "https://raw.githubusercontent.com/shalini47ch/lld-case-studies/main/LibraryManagementSystem/Address.py",
        },
        {
          title: "Book Class",
          url: "https://raw.githubusercontent.com/shalini47ch/lld-case-studies/main/LibraryManagementSystem/Book.py",
        },
        {
          title: "Notification Class",
          url: "https://raw.githubusercontent.com/shalini47ch/lld-case-studies/main/LibraryManagementSystem/Notification.py",
        },
        {
          title: "Book Status Enum",
          url: "https://raw.githubusercontent.com/shalini47ch/lld-case-studies/main/LibraryManagementSystem/enums/BookStatus.py",
        },
        {
          title: "Reservation Status Enum",
          url: "https://raw.githubusercontent.com/shalini47ch/lld-case-studies/main/LibraryManagementSystem/enums/ReservationStatus.py",
        },
        {
          title: "BookFormat Enum",
          url: "https://raw.githubusercontent.com/shalini47ch/lld-case-studies/main/LibraryManagementSystem/enums/format.py",
        },
        {
          title: "Status",
          url: "https://raw.githubusercontent.com/shalini47ch/lld-case-studies/main/LibraryManagementSystem/enums/status.py",
        },
        {
          title: "Person",
          url: "https://raw.githubusercontent.com/shalini47ch/lld-case-studies/main/LibraryManagementSystem/Person.py",
        },
        {
          title: "Book Search Strategy",
          url: "https://raw.githubusercontent.com/shalini47ch/lld-case-studies/main/LibraryManagementSystem/SearchStrategy.py",
        },
        {
          title: "User Management System",
          url: "https://raw.githubusercontent.com/shalini47ch/lld-case-studies/main/LibraryManagementSystem/UserManagement.py",
        },
      ],
      color: "#E3F2FD",
      icon: <BookIcon />,
    },
    {
      title: "Amazon Locker",
      description: "Design and Implementation of Amazon Locker",
      classDiagram: amazonclass,
      implementationUrls: [
        {
          title: "Locker State Enum",
          url: "https://raw.githubusercontent.com/shalini47ch/lld-case-studies/main/AmazonLocker/enums/LockerState.py",
        },
        {
          title: "Package Size Enum",
          url: "https://raw.githubusercontent.com/shalini47ch/lld-case-studies/main/AmazonLocker/enums/PackageSize.py",
        },
        {
          title: "Items",
          url: "https://raw.githubusercontent.com/shalini47ch/lld-case-studies/main/AmazonLocker/Item.py",
        },
        {
          title: "Location",
          url: "https://raw.githubusercontent.com/shalini47ch/lld-case-studies/main/AmazonLocker/Location.py",
        },
        {
          title: "Locker",
          url: "https://raw.githubusercontent.com/shalini47ch/lld-case-studies/main/AmazonLocker/Locker.py",
        },
        {
          title: "Notification",
          url: "https://raw.githubusercontent.com/shalini47ch/lld-case-studies/main/AmazonLocker/Notification.py",
        },
        {
          title: "Orders",
          url: "https://raw.githubusercontent.com/shalini47ch/lld-case-studies/main/AmazonLocker/Order.py",
        },
        {
          title: "Package",
          url: "https://raw.githubusercontent.com/shalini47ch/lld-case-studies/main/AmazonLocker/Package.py",
        },
        {
          title: "Strategy to find the distance",
          url: "https://raw.githubusercontent.com/shalini47ch/lld-case-studies/main/AmazonLocker/Strategylocation.py",
        },
        {
          title: "Amazon Locker",
          url: "https://raw.githubusercontent.com/shalini47ch/lld-case-studies/main/AmazonLocker/AmazonLocker.py",
        },
        {
          title: "Main ",
          url: "https://raw.githubusercontent.com/shalini47ch/lld-case-studies/main/AmazonLocker/main.py",
        },
      ],
      color: "#E8F5E9",
      icon: <ElevatorIcon />,
    },
  ];

  useEffect(() => {
    caseStudies.forEach((study, index) => {
      if (study.implementationUrls && study.implementationUrls.length > 0) {
        setLoading((prev) => ({ ...prev, [index]: true }));
        fetchGitHubContent(study.implementationUrls.map((file) => file.url))
          .then((content) => {
            const contentObj = {};
            study.implementationUrls.forEach((file, i) => {
              contentObj[`${index}-${i}`] = content[i];
            });
            setImplementations((prev) => ({ ...prev, ...contentObj }));
            setLoading((prev) => ({ ...prev, [index]: false }));
          })
          .catch((error) => {
            console.error("Error fetching GitHub content:", error);
            setLoading((prev) => ({ ...prev, [index]: false }));
          });
      }
    });
  }, []);

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)",
        minHeight: "100vh",
        padding: 4,
        width: "100%",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <Grid container spacing={4}>
        {caseStudies.map((study, studyIndex) => (
          <Grid item xs={12} md={6} key={studyIndex}>
            <Zoom
              in={true}
              style={{ transitionDelay: `${studyIndex * 150}ms` }}
            >
              <Card
                elevation={6}
                sx={{
                  backgroundColor: study.color,
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <CardHeader
                  avatar={
                    <Chip
                      icon={study.icon}
                      label={`Case Study ${studyIndex + 1}`}
                      color="primary"
                      variant="outlined"
                    />
                  }
                  title={
                    <Typography
                      variant="h5"
                      sx={{ color: "#1A237E", fontWeight: "bold" }}
                    >
                      {study.title}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="body2" color="textSecondary">
                      {study.description}
                    </Typography>
                  }
                />
                <CardContent sx={{ padding: "16px", overflow: "auto" }}>
                  <Tabs
                    value={activeTab}
                    onChange={(e, newValue) => setActiveTab(newValue)}
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="primary"
                  >
                    <Tab
                      label="Class Diagram"
                      value="classdiagram"
                      icon={<BookIcon />}
                    />
                    <Tab
                      label="Implementation"
                      value="implementation"
                      icon={<CodeIcon />}
                    />
                  </Tabs>
                  <Fade in={activeTab === "classdiagram"}>
                    <Box
                      sx={{
                        mt: 2,
                        display:
                          activeTab === "classdiagram" ? "block" : "none",
                        textAlign: "center", // Centering the image
                      }}
                    >
                      {study.classDiagram.endsWith(".png") ||
                      study.classDiagram.endsWith(".jpg") ? (
                        <img
                          src={study.classDiagram}
                          alt={`${study.title} Class Diagram`}
                          style={{
                            maxWidth: "100%", // Ensure the image doesn't overflow its container
                            height: "auto",
                            borderRadius: "8px", // Optional styling for rounded corners
                          }}
                        />
                      ) : (
                        <pre
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.04)",
                            padding: "16px",
                            borderRadius: "4px",
                            overflowX: "auto",
                            fontSize: "0.875rem",
                            wordBreak: "break-word",
                          }}
                        >
                          <code>{study.classDiagram}</code>
                        </pre>
                      )}
                    </Box>
                  </Fade>
                  {/* <Fade in={activeTab === "classdiagram"}>
                    <Box
                      sx={{
                        mt: 2,
                        display:
                          activeTab === "classdiagram" ? "block" : "none",
                      }}
                    >
                      <pre
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.04)",
                          padding: "16px",
                          borderRadius: "4px",
                          overflowX: "auto",
                          fontSize: "0.875rem",
                          // whiteSpace: "pre-wrap", // Allow text to wrap
                          wordBreak: "break-word",
                        }}
                      >
                        <code>{study.classDiagram}</code>
                      </pre>
                    </Box>
                  </Fade> */}
                  <Fade in={activeTab === "implementation"}>
                    <Box
                      sx={{
                        mt: 2,
                        display:
                          activeTab === "implementation" ? "block" : "none",
                      }}
                    >
                      {study.implementationUrls.map((file, fileIndex) => {
                        const key = `${studyIndex}-${fileIndex}`;
                        return (
                          <div key={fileIndex} className="mb-4">
                            <h3 className="text-lg font-semibold text-blue-600 mb-2">
                              {file.title}
                            </h3>
                            {loading[studyIndex] ? (
                              <div className="flex justify-center items-center h-20">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                              </div>
                            ) : (
                              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                                <code>
                                  {implementations[key] ||
                                    "Implementation not available"}
                                </code>
                              </pre>
                            )}
                          </div>
                        );
                      })}
                    </Box>
                  </Fade>
                </CardContent>
              </Card>
            </Zoom>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Case;
