import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesignPatternTable from "./components/Table/Table";
import Case from "./components/CaseStudies/Case";
import Quiz from "./components/Quiz/Quiz";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patterns" element={<DesignPatternTable />} />
        <Route path="/casestudy" element={<Case />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
   
  );
}

export default App;
