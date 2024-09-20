import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  TablePagination,
  Checkbox,
  Typography,
  Box,
  Chip,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
} from "@mui/material";
import {
  Code as CodeIcon,
  InsertPhoto as DiagramIcon,
  PlayCircle as ExampleIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import observerimage from "../../../src/classdiagram/observer.png";
import factoryimage from "../../../src/classdiagram/factory.png";
import abstractimage from "../../../src/classdiagram/abstractfactory.png";
import builder from "../../../src/classdiagram/builder.png";
import prototype from "../../../src/classdiagram/prototype.png";
import singleton from "../../../src/classdiagram/singleton.png";
import adapter from "../../../src/classdiagram/adapter.png";
import bridge from "../../../src/classdiagram/bridge.png";
import composite from "../../../src/classdiagram/composite.png";
import decorator from "../../../src/classdiagram/decorator.png";
import facade from "../../../src/classdiagram/facade.png";
import flyweight from "../../../src/classdiagram/flyweight.png";
import proxy from "../../../src/classdiagram/proxy.png";
import chainofresponsibility from "../../../src/classdiagram/chainofresponsibility.png";
import command from "../../../src/classdiagram/command.png";
import interpreter from "../../../src/classdiagram/interpreter.png";
import iterator from "../../../src/classdiagram/iteratordesign.png";
import mediator from "../../../src/classdiagram/mediator.png";
import memento from "../../../src/classdiagram/memento.png";
import state from "../../../src/classdiagram/state.png";
import strategy from "../../../src/classdiagram/strategy.png";
import template from "../../../src/classdiagram/template.png";
import visitor from "../../../src/classdiagram/visitor.png";
import facimple from "../../../src/implementation/facimple.png";
import absimple from "../../../src/implementation/absimple.png";
import builderpatt from "../../../src/implementation/builderpatt.png";
import protoimple from "../../../src/implementation/protoimple.png";
import singimple from "../../../src/implementation/singimple.png";
import adapimple from "../../../src/implementation/adapimple.png";
import bridgeimple from "../../../src/implementation/bridgeimple.png";
import compimple from "../../../src/implementation/compimple.png";
import decimple from "../../../src/implementation/decimple.png";
import facadeimple from "../../../src/implementation/facadeimple.png";
import flyweightimple from "../../../src/implementation/flyweightimple.png";
import proxyimple from "../../../src/implementation/proxyimple.png";
import chainrepoimple from "../../../src/implementation/chainrepoimple.png";
import commandimple from "../../../src/implementation/commandimple.png";
import interpreterimple from "../../../src/implementation/interpreterimple.png";
import iteratorimple from "../../../src/implementation/iteratorimple.png";
import mediatorimple from "../../../src/implementation/mediatorimple.png";
import mementoimple from "../../../src/implementation/mementoimple.png";
import observerimple from "../../../src/implementation/observerimple.png";
import stateimple from "../../../src/implementation/stateimple.png";
import strategyimple from "../../../src/implementation/strategyimple.png";
import templateimpli from "../../../src/implementation/templateimpli.png";
import visitorimpli from "../../../src/implementation/visitorimpli.png";

import axios from "axios";

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f5f5f5",
    },
  },
});

const DesignPatternTable = () => {
  const [page, setPage] = useState(0);
  const [selectedPatterns, setSelectedPatterns] = useState([]);
  const [openExampleModal, setOpenExampleModal] = useState(false);
  const [currentExample, setCurrentExample] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [openDiagram, setOpenDiagram] = useState(false);
  const [currentDiagram, setCurrentDiagram] = useState("");
  const [openCodeModal, setOpenCodeModal] = useState(false);
  const [codeContent, setCodeContent] = useState("");
  const [loadingCode, setLoadingCode] = useState(false);
  const [checkedDays, setCheckedDays] = useState({});

  const rowsPerPage = 5;

  useEffect(() => {
    // Fetch favorite patterns when the component mounts
    // Fetch initial checked days from the server
    const fetchCheckedDays = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/checkedDays"
        );
        setCheckedDays(response.data);
      } catch (error) {
        console.error("Error fetching checked days", error);
      }
    };

    fetchCheckedDays();
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/favoritess"
        );
        setFavorites(response.data.map((fav) => fav.pattern));
      } catch (error) {
        console.error("Error fetching favorites", error);
      }
    };

    fetchFavorites();
    fetchCheckedDays();
  }, []);

  const rows = [
    {
      day: "Day1",
      pattern: "Factory",
      category: "Creational",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/CreationalDesignPattern/FactoryDesignPattern/factorydesignpatt.py",
      diagramLink: factoryimage,
      exampleLink: facimple,
    },
    {
      day: "Day2",
      pattern: "Abstract Factory",
      category: "Creational",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/CreationalDesignPattern/AbstractFactory/HouseBuilding.py",
      diagramLink: abstractimage,
      exampleLink: absimple,
    },
    {
      day: "Day3",
      pattern: "Builder",
      category: "Creational",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/CreationalDesignPattern/Builder/example3.py",
      diagramLink: builder,
      exampleLink: builderpatt,
    },
    {
      day: "Day4",
      pattern: "Prototype",
      category: "Creational",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/CreationalDesignPattern/PrototypeDesignPattern/example1.py",
      diagramLink: prototype,
      exampleLink: protoimple,
    },
    {
      day: "Day5",
      pattern: "Singleton",
      category: "Creational",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/CreationalDesignPattern/Singleton/example1.py",
      diagramLink: singleton,
      exampleLink: singimple,
    },
    {
      day: "Day6",
      pattern: "Adapter",
      category: "Structural",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/StructuralDesignPattern/Adapter/example3.py",
      diagramLink: adapter,
      exampleLink: adapimple,
    },
    {
      day: "Day7",
      pattern: "Bridge",
      category: "Structural",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/StructuralDesignPattern/Bridge/example1.py",
      diagramLink: bridge,
      exampleLink: bridgeimple,
    },
    {
      day: "Day8",
      pattern: "Composite",
      category: "Structural",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/StructuralDesignPattern/Composite/example1.py",
      diagramLink: composite,
      exampleLink: compimple,
    },
    {
      day: "Day9",
      pattern: "Decorator",
      category: "Structural",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/StructuralDesignPattern/Decorator/example2.py",
      diagramLink: decorator,
      exampleLink: decimple,
    },
    {
      day: "Day10",
      pattern: "Facade",
      category: "Structural",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/StructuralDesignPattern/Facade/example1.py",
      diagramLink: facade,
      exampleLink: facadeimple,
    },
    {
      day: "Day11",
      pattern: "Flyweight",
      category: "Structural",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/StructuralDesignPattern/Flyweight/example1.py",
      diagramLink: flyweight,
      exampleLink: flyweightimple,
    },
    {
      day: "Day12",
      pattern: "Proxy",
      category: "Structural",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/StructuralDesignPattern/Proxy/example1.py",
      diagramLink: proxy,
      exampleLink: proxyimple,
    },
    {
      day: "Day13",
      pattern: "Chain of Responsibility",
      category: "Behavioral",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/BehavioralDesignPatterns/ChainOfResponsibility/example1.py",
      diagramLink: chainofresponsibility,
      exampleLink: chainrepoimple,
    },
    {
      day: "Day14",
      pattern: "Command",
      category: "Behavioral",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/BehavioralDesignPatterns/CommandDesignPattern/example1.py",
      diagramLink: command,
      exampleLink: commandimple,
    },
    {
      day: "Day15",
      pattern: "Interpreter",
      category: "Behavioral",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/BehavioralDesignPatterns/InterpreterDesignPattern/example1.py",
      diagramLink: interpreter,
      exampleLink: interpreterimple,
    },
    {
      day: "Day16",
      pattern: "Iterator",
      category: "Behavioral",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/BehavioralDesignPatterns/IteratorDesignPattern/example1.py",
      diagramLink: iterator,
      exampleLink: iteratorimple,
    },
    {
      day: "Day17",
      pattern: "Mediator",
      category: "Behavioral",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/BehavioralDesignPatterns/Mediator/example2.py",
      diagramLink: mediator,
      exampleLink: mediatorimple,
    },
    {
      day: "Day18",
      pattern: "Memento",
      category: "Behavioral",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/BehavioralDesignPatterns/MementoDesignPattern/example1.py",
      diagramLink: memento,
      exampleLink: mementoimple,
    },
    {
      day: "Day19",
      pattern: "Observer",
      category: "Behavioral",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/BehavioralDesignPatterns/ObserverDesignPattern/example3.py",
      diagramLink: observerimage,
      exampleLink: observerimple,
    },
    {
      day: "Day20",
      pattern: "State",
      category: "Behavioral",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/BehavioralDesignPatterns/StateDesignPattern/example3.py",
      diagramLink: state,
      exampleLink: stateimple,
    },
    {
      day: "Day21",
      pattern: "Strategy",
      category: "Behavioral",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/BehavioralDesignPatterns/StrategyDesignPattern/example1.py",
      diagramLink: strategy,
      exampleLink: strategyimple,
    },
    {
      day: "Day22",
      pattern: "Template Method",
      category: "Behavioral",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/BehavioralDesignPatterns/TemplateDesignPattern/example2.py",
      diagramLink: template,
      exampleLink: templateimpli,
    },
    {
      day: "Day23",
      pattern: "Visitor",
      category: "Behavioral",
      codeLink:
        "https://raw.githubusercontent.com/shalini47ch/Design-Pattern-Python/main/BehavioralDesignPatterns/VisitorDesignPattern/example1.py",
      diagramLink: visitor,
      exampleLink: visitorimpli,
    },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // const handleSelectPattern = (pattern) => {
  //   setSelectedPatterns((prev) =>
  //     prev.includes(pattern)
  //       ? prev.filter((p) => p !== pattern)
  //       : [...prev, pattern]
  //   );
  // };
  const handleSelectPattern = async (day, isChecked) => {
    try {
      await axios.post("http://localhost:8080/api/checkedDays", {
        day,
        checked: isChecked,
      });

      setCheckedDays((prev) => ({
        ...prev,
        [day]: isChecked,
      }));
    } catch (error) {
      console.error("Error updating checked day", error);
    }
  };
  const handleToggleFavorite = async (pattern) => {
    if (!favorites.includes(pattern)) {
      // Update the UI
      setFavorites((prev) => [...prev, pattern]);

      // Make API call to add the favorite to the backend
      try {
        await axios.post("http://localhost:8080/api/favoritess", {
          pattern: pattern,
        });
      } catch (error) {
        console.error("Error adding favorite", error);
      }
    }
  };

  const handleOpenDiagram = (diagramLink) => {
    setCurrentDiagram(diagramLink);
    setOpenDiagram(true);
  };

  const handleCloseDiagram = () => {
    setOpenDiagram(false);
  };

  const handleOpenCodeModal = async (codeLink) => {
    setLoadingCode(true);
    setOpenCodeModal(true);

    try {
      const response = await fetch(codeLink);
      const text = await response.text();
      setCodeContent(text);
    } catch (error) {
      setCodeContent("Error loading code. Please try again.");
    } finally {
      setLoadingCode(false);
    }
  };

  const handleCloseCodeModal = () => {
    setOpenCodeModal(false);
    setCodeContent("");
  };
  const handleOpenExampleModal = (exampleLink) => {
    setCurrentExample(exampleLink);
    setOpenExampleModal(true);
  };

  const handleCloseExampleModal = () => {
    setOpenExampleModal(false);
  };

  const paginatedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const getCategoryColor = (category) => {
    switch (category) {
      case "Creational":
        return theme.palette.primary.main;
      case "Structural":
        return theme.palette.secondary.main;
      case "Behavioral":
        return theme.palette.success.main;
      default:
        return theme.palette.info.main;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Design Patterns Journey
        </Typography>
        <TableContainer component={Paper} elevation={4} sx={{ mt: 2 }}>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={
                      selectedPatterns.length > 0 &&
                      selectedPatterns.length < rows.length
                    }
                    checked={selectedPatterns.length === rows.length}
                    onChange={() =>
                      setSelectedPatterns(
                        selectedPatterns.length === rows.length
                          ? []
                          : rows.map((row) => row.pattern)
                      )
                    }
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1">Day</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1">Design Pattern</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1">Category</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1">Resources</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1">Favorite</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row, index) => (
                <TableRow key={index} hover sx={{ cursor: "pointer" }}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={checkedDays[row.day] || false}
                      onChange={(event) =>
                        handleSelectPattern(row.day, event.target.checked)
                      }
                    />
                  </TableCell>
                  <TableCell>{row.day}</TableCell>
                  <TableCell>{row.pattern}</TableCell>
                  <TableCell>
                    <Chip
                      label={row.category}
                      size="small"
                      sx={{
                        backgroundColor: getCategoryColor(row.category),
                        color: "white",
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Tooltip title="View Code">
                      <IconButton
                        color="primary"
                        onClick={() => handleOpenCodeModal(row.codeLink)}
                      >
                        <CodeIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="View Class Diagram">
                      <IconButton
                        color="secondary"
                        onClick={() => handleOpenDiagram(row.diagramLink)}
                      >
                        <DiagramIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="View Example">
                      <IconButton
                        color="success"
                        onClick={() => handleOpenExampleModal(row.exampleLink)}
                      >
                        <ExampleIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleToggleFavorite(row.pattern)}
                      color={
                        favorites.includes(row.pattern) ? "error" : "default"
                      }
                    >
                      {favorites.includes(row.pattern) ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={rows.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[]}
          />
        </TableContainer>
      </Box>

      {/* Code Modal */}
      <Dialog
        open={openCodeModal}
        onClose={handleCloseCodeModal}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          Code
          <IconButton
            aria-label="close"
            onClick={handleCloseCodeModal}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {loadingCode ? (
            <CircularProgress />
          ) : (
            <pre
              style={{
                whiteSpace: "pre-wrap",
                color: "white",
                backgroundColor: "black",
                padding: "16px",
              }}
            >
              {codeContent}
            </pre>
          )}
        </DialogContent>
      </Dialog>

      {/* Diagram Modal */}
      <Dialog
        open={openDiagram}
        onClose={handleCloseDiagram}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          Class Diagram
          <IconButton
            aria-label="close"
            onClick={handleCloseDiagram}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <img
            src={currentDiagram}
            alt="Class Diagram"
            style={{ width: "100%" }}
          />
        </DialogContent>
      </Dialog>

      {/* Example Modal */}
      <Dialog
        open={openExampleModal}
        onClose={handleCloseExampleModal}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          Example
          <IconButton
            aria-label="close"
            onClick={handleCloseExampleModal}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <iframe
            src={currentExample}
            title="Design Pattern Example"
            style={{ width: "100%", height: "500px", border: "none" }}
          />
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};

export default DesignPatternTable;
