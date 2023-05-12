import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import "./Details.css";
import { Link } from "react-router-dom";
const Details = () => {
  return (
    <div class="Main">
        <AccountCircleIcon/>
        <Link to="/UserDetails">
      <div class="add-party">
        <AddIcon/>
        <h5>Add party</h5>
      </div>
        </Link>
    </div>
  );
};

export default Details;
