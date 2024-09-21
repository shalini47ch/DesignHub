import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Box,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import axios from "axios";
const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    axios
      .get("https://design-hub-backend-eight.vercel.app/api/quizzes")
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((err) => {
        console.log("Error fetching the data:", err);
      });
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    } else {
      setFinished(true);
    }
  };

  // Add a check for questions array length before rendering the question
  if (questions.length === 0) {
    return <Typography variant="h6">Loading...</Typography>;
  }
  // console.log(questions)

  return (
    <Container>
      <Card sx={{ maxWidth: 800, margin: "auto", mt: 5 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {finished
              ? "Quiz Completed"
              : `Question ${currentQuestionIndex + 1}`}
            <QuizIcon style={{ color: "red" }} />
          </Typography>
          {!finished ? (
            <Box>
              <Typography variant="h6" gutterBottom>
                {questions[currentQuestionIndex].question}
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  {questions[currentQuestionIndex].options.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>
          ) : (
            <Typography variant="h6" gutterBottom>
              You scored {score} out of {questions.length}{" "}
              <EmojiEmotionsIcon style={{ color: "orange" }} />
            </Typography>
          )}
        </CardContent>
        <CardActions>
          {!finished && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleNextQuestion}
              disabled={!selectedOption}
            >
              {currentQuestionIndex < questions.length - 1 ? "Next" : "Finish"}
            </Button>
          )}
        </CardActions>
      </Card>
    </Container>
  );
};

export default Quiz;

