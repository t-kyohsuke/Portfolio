import React from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom';
import { HomeStyle } from './Style/HomeStyle';

export const Home:React.FC =()=>{
	const navigate = useNavigate();
	return(<>
		<Box sx={HomeStyle}>
			<div><h1>Welcome</h1></div>
			<div><Button onClick={()=>navigate("/Main")} variant="contained">
				Enter
			</Button></div>

		</Box>
	</>);
}
