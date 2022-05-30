import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { display } from "@mui/system";

const Main =({submitSearch})=>{
    const [location, setLocation] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(!location || location === '') return;
        submitSearch(location);
    }

    return <>
    <form onSubmit={onSubmit} style={{display:'flex', 
          flexDirection:'column', 
          alignItems:'center', 
          justifyContent:'center',
          height:'30vh'
          }}>
      <TextField 
        id="filled-basic" 
        label="Search" 
        variant="filled" 
        aria-label="location" 
        required 
        value={location}
        onChange={(e)=>setLocation(e.target.value)}
        style={{margin:'.5em 0'}}
        >
        </TextField>

      <Button 
        variant="contained"
        type="submit" 
        onClick={onSubmit}>
          Find the location
      </Button>
    </form>
    </>
}

Main.prototype={
  submitSearch:PropTypes.func.isRequired,
}

export default Main;