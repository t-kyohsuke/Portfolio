import React from "react";
import {Outlet, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { MainStyle, MainStyleLeft, MainStyleRight, OuterFrame } from "./Style/MainStyle";

export const Main:React.FC =()=>{
	const navigate = useNavigate();
	console.log("Main");
	return(
		<Box sx={OuterFrame}>
		<Box sx={MainStyle}>
			<div className="MeinLeft" style={MainStyleLeft}>
				<Button onClick={()=>navigate("/Main")} variant="contained" sx={{width:"100px",margin:"5px"}}>Top</Button><br/>
				<Button onClick={()=>navigate("/Main/Puzzle")} variant="contained" sx={{width:"100px",margin:"5px"}}>Puzzle</Button><br/>
				<Button onClick={()=>navigate("/Main/Tetris")} variant="contained" sx={{width:"100px",margin:"5px"}}>Tetris</Button><br/>
				<br/>
				<br/>
				<Button onClick={()=>navigate("/")} variant="contained" sx={{width:"100px",margin:"5px"}}>Home</Button><br/>
			</div>
			
			<div style={MainStyleRight}>
				<Outlet />
			</div>
		</Box>
		</Box>
	);
}