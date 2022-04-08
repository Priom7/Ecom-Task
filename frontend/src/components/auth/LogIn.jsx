import React from "react";
import { Typography, TextField, Button } from "@mui/material";

const LogIn = () => {
    
  return (
    <>
      <form  noValidate autoComplete="off">
        <div className="row border justify-content-center">
          <div className="col-md-6  text-center p-2 m-2">
            <Typography variant="h5">Login as Admin</Typography>
            <TextField
              id="enter-email"
              label="Enter email"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="enter-password"
              type="password"
              label="Enter password"
              variant="outlined"
              fullWidth
            />
            <Button variant="contained" color="primary" type="submit">
              SignIn
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LogIn;
