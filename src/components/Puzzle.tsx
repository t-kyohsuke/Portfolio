import React,{ useEffect } from "react";
import { Box ,Button, Typography } from "@mui/material";

import { ModalGameOver } from "./Modal";
import { PuzzleStylePiece, PuzzleStyleContainer, PuzzleStyleBorder} from "./Style/PuzzleStyle";
import { usePuzzleHooks } from "./Hooks/usePuzzleHooks";


export const Puzzle:React.FC=()=>{
	//ModalClose
	const handleClose =()=>{
		setGameOverModal(false);
	};

//カスタムフックの分割代入
	const {handleClickPiece, pieces, checkingAnswers,
		gameOverModal,setGameOverModal,	//modal状態管理(ゲームオーバー)
		handleStartStop,Timer,time,isRunning,formatTime,StartStop,score,Score
	} = usePuzzleHooks();

	useEffect(()=>{
		checkingAnswers(pieces);
	},[pieces]);

StartStop();	//ゲームスタート（シャッフル/タイマー）
Timer();		//インターバル
Score();

	return(<>
		<Box sx={PuzzleStyleContainer}>
			<Box className="timer" textAlign="center">
				<h1>Puzzle</h1>
				<Typography variant="h4"> TIME:{formatTime(time)}</Typography>
			</Box>

			<Box sx={PuzzleStyleBorder}>
				<Box onClick={()=>handleClickPiece(0,pieces)} sx={PuzzleStylePiece} data-number="0">{pieces[0]}</Box>
				<Box onClick={()=>handleClickPiece(1,pieces)} sx={PuzzleStylePiece}  data-number="1">{pieces[1]}</Box>
				<Box onClick={()=>handleClickPiece(2,pieces)} sx={PuzzleStylePiece} data-number="2">{pieces[2]}</Box>
				<Box onClick={()=>handleClickPiece(3,pieces)} sx={PuzzleStylePiece} data-number="3">{pieces[3]}</Box>
				<Box onClick={()=>handleClickPiece(4,pieces)} sx={PuzzleStylePiece} data-number="4">{pieces[4]}</Box>
				<Box onClick={()=>handleClickPiece(5,pieces)} sx={PuzzleStylePiece} data-number="5">{pieces[5]}</Box>
				<Box onClick={()=>handleClickPiece(6,pieces)} sx={PuzzleStylePiece} data-number="6">{pieces[6]}</Box>
				<Box onClick={()=>handleClickPiece(7,pieces)} sx={PuzzleStylePiece} data-number="7">{pieces[7]}</Box>
				<Box onClick={()=>handleClickPiece(8,pieces)} sx={PuzzleStylePiece} data-number="8">{pieces[8]}</Box>
			</Box>
			<Box className="btn">
				<Button id="btnStart" onClick={handleStartStop} variant="contained" sx={{width:"120px",margin:"5px"}}>{isRunning ? "STOP" : "START"}</Button>
			</Box>
			<ModalGameOver open={gameOverModal} onClose={handleClose} data={formatTime(score)}/>
		</Box>
	</>);
}