import "./App.css";
import Sidebar from "./Components/Sidebar";
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Bookchapter from "./Components/Bookchapter";
import Journal from "./Components/Journal";
import Conference from "./Components/Conference";
import AdministrationDevProg from "./Components/AministrationDevProg";
import FacultyDevProg from "./Components/FacultyDevProg";
import InvitedTalks from "./Components/InvitedTalks";
import ExpertTalks from "./Components/ExpertTalks";
import PaperReviews from "./Components/PaperReviews";
import WorkshopSeminar from "./Components/WorkshopSeminar";
import Home from "./Components/Home";

const App = () => {
  const [toRender, setToRender] = useState("Home");
  const [numberOfFields, setNumberOfFields] = useState({
    Journal: [1],
    Bookchapter: [1, 1],
    Conference: [1],
    ExpertTalks: [1],
    InvitedTalks: [1],
    WorkshopSeminar: [1],
    FacultyDevProg: [1],
  });

  const myMap = {
    Home: <Home />,
    Journal: <Journal numberOfFields={numberOfFields} setNumberOfFields={setNumberOfFields} />,
    Bookchapter: (
      <Bookchapter numberOfFields={numberOfFields} setNumberOfFields={setNumberOfFields} />
    ),
    Conference: <Conference />,
    ExpertTalks: <ExpertTalks />,
    InvitedTalks: <InvitedTalks />,
    WorkshopSeminar: <WorkshopSeminar />,
    FacultyDevProg: <FacultyDevProg />,
    AdministrationDevProg: <AdministrationDevProg />,
    PaperReviews: <PaperReviews />,
  };
  return (
    <div className="App">
      <div className="container">
        <Sidebar toRender={toRender} setToRender={setToRender} />
        {myMap[toRender]}
      </div>
    </div>
  );
};

export default App;
