import React from "react";
import "../App.css";
// import "@fontsource/ubuntu";
import { positions, textAlign } from "@mui/system";

function Home() {
  return (
    <div className="containerbox">
      <div className="hometitle">
        <h1>Welcome To the Academic Journal Database Management System!!!!</h1>
      </div>
      <div>
        <div className="hometitle2">
          <h2>Following are some instruction to help you in using this website:</h2>
        </div>
        <div className="homeul">
          <ul>
            <li>
              You have to click the links from the Sidebar to enter information in the desired
              template.
            </li>
            <li>
              Fields indicated with asterisk(*) marks are mandatory and hence should be filled with
              appropriate information.
            </li>
            <li>
              After you have entered the data you can click on the submit button to save and store
              in the database.
            </li>
            <li>
              You can also click on the export button to generate the data in pdf aur excel sheet
              format.
            </li>
            <li>Click on the sidebar links to go to respective page.</li>
          </ul>
        </div>
        <div className="hometitle">
          <h2>We hope you have positive experience while using this website!</h2>

          <br />
          <h2>THANKYOU!!</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
