// App.js

import './App.css';
import Sidebar from './Components/Sidebar';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Bookchapter from './Components/Bookchapter';
import Journal from './Components/Journal';
import Conference from './Components/Conference';
import AdministrationDevProg from './Components/AministrationDevProg';
import FacultyDevProg from './Components/FacultyDevProg';
import InvitedTalks from './Components/InvitedTalks';
import ExpertTalks from './Components/ExpertTalks';
import PaperReviews from './Components/PaperReviews';
import WorkshopSeminar from './Components/WorkshopSeminar';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp'; 
import { onAuthStateChanged } from 'firebase/auth';
import { app, analytics, auth } from './firebaseConfig'; // Update the import statement

const App = () => {
  const [toRender, setToRender] = useState('Home');
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
    Conference: <Conference numberOfFields={numberOfFields} setNumberOfFields={setNumberOfFields} />,
    ExpertTalks: <ExpertTalks numberOfFields={numberOfFields} setNumberOfFields={setNumberOfFields}/>,
    InvitedTalks: <InvitedTalks numberOfFields={numberOfFields} setNumberOfFields={setNumberOfFields} />,
    WorkshopSeminar: <WorkshopSeminar numberOfFields={numberOfFields} setNumberOfFields={setNumberOfFields}/>,
    FacultyDevProg: <FacultyDevProg numberOfFields={numberOfFields} setNumberOfFields={setNumberOfFields}/>,
    AdministrationDevProg: <AdministrationDevProg numberOfFields={numberOfFields} setNumberOfFields={setNumberOfFields}/>,
    PaperReviews: <PaperReviews numberOfFields={numberOfFields} setNumberOfFields={setNumberOfFields}/>,
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <div className="App">
                <div className="container">
                  <Sidebar toRender={toRender} setToRender={setToRender} />
                  {myMap[toRender]}
                </div>
              </div>
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> 
      </Routes>
    </Router>
  );
};

export default App;
