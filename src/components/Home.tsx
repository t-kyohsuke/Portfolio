import React from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom';

export const Home:React.FC =()=>{
	const navigate = useNavigate();
	return(<>
		<Box
		 component="div"
		 display="flex"
		 flexDirection="column"
		 justifyContent="center"
		 alignItems="center"
		 height="90vh"
		 border="1px solid"
		 borderRadius="16px"
		>
			<div /*style={{border: "1px solid black"}}*/><h1>Welcome</h1></div>
			<div><Button onClick={()=>navigate("/Main")} variant="contained">
				Enter
			</Button></div>

		</Box>
	</>);
}
