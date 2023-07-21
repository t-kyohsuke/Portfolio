import React, { useState, useEffect, useRef} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Backdrop from '@mui/material/Backdrop';


//--モーダル（ゲームオーバー）-------------------------------
interface GameOverProps {
	open : boolean;
	onClose : ()=>void;
	data: string|number;
}
export const ModalGameOver:React.FC<GameOverProps> =({open, onClose, data})=>{
	return(<>
				{/*モーダルウィンドウ */}
				<Modal
				open={open}
				onClose={onClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				slots={{ backdrop: Backdrop }}
				slotProps={{
				 backdrop: {
					timeout: 500,
				 }
				}}
			   >
				   <Box display="flex" justifyContent="center" borderRadius={2}
				    sx={{ position: "absolute", top: "50%", left: "50%",
					transform: "translate(-50%, -50%)", width: 400,
					bgcolor: "background.paper", border: "2px solid #000", boxShadow: 24, p: 4 }}
				   >
					<Box textAlign="center">
						<Typography id="modal-modal-title" variant="h4" component="h4">
							GAME OVER
						</Typography>
						<Typography id="modal-modal-description" variant="h6" component="h4" sx={{ mt: 2 }}>
							スコア：{data}<br />
							THANK YOU FOR PLAYING
						</Typography>
				   </Box>
				   </Box>
			   </Modal>
</>
	)
}

//--モーダル（ゲームスタート）-------------------------------
interface StartProps {
	open : boolean;
//	onClose : ()=>void;
	count : number;
}
export const ModalStart:React.FC<StartProps> =({open, /*onClose,*/ count})=>{

	return(<>
				{/*モーダルウィンドウ */}
				<Modal
				open={open}
//				onClose={onClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				slots={{ backdrop: Backdrop }}
				slotProps={{
				 backdrop: {
					timeout: 500,
				 }
				}}
			   >
				   <Box display="flex" justifyContent="center" borderRadius={2}
				    sx={{ position: "absolute", top: "50%", left: "50%",
					transform: "translate(-50%, -50%)", width: 400,
					bgcolor: "background.paper", border: "2px solid #000", boxShadow: 24, p: 4 }}
				   >
					<Box textAlign="center">
						<Typography id="modal-modal-description" variant="h1" component="h1" sx={{ mt: 2 }}>
							{count}
						</Typography>
				   </Box>
				   </Box>
			   </Modal>
</>
	)
}