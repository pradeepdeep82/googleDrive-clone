import * as React from "react";
import Button from "@mui/material/Button";
import {  Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import "./App.css";


export function HomePage() {

  return (
    <div>
      <div className="appBar">
        <Link to="/">
          <div>
            <img
              className="driveIcon"
              src="data:image/png;base64,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"
              alt="drive-icon"
            />
            <span className="gDrive">Google Drive</span>
          </div>
        </Link>
        <p>Individuals</p>
        <p>Teams</p>
        <p>Entreprise</p>
        <p>Download</p>
        <div className="loginSignupBtn">
          <Button variant="outlined">
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="outlined">
            <Link to="/signup">Signup</Link>
          </Button>
        </div>
      </div>
      <Button className="addBtn" variant="outlined"><AddIcon/>new</Button>
    </div>
  );
}
