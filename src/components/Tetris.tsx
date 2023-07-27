import React,{useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { Box ,Button, Typography, Icon} from "@mui/material";
import { VolumeUp, VolumeOff } from "@mui/icons-material";

import { TetrisStyleContainer, TetrisStyleContents,
	 TetrisStyleMainContents,TetrisStyleMain,TetrisStyleSide} from "./Style/TetrisStyle";
import { useTetrisHooks} from "./Hooks/useTetrisHooks";
//import { useGenericHooks } from "./Hooks/useGenericHooks";
import { ModalGameOver, ModalStart } from "./Modal";



export const Tetris:React.FC=()=>{
	
	//Hooksの分割代入
	const {	handleGameOverModalOpen,handleGameOverModalClose,	//ゲームオーバーモーダル(オープン、クローズ)

			tetro_X,setTetro_X,tetro_Y,setTetro_Y,
			tetro,

			speakerOn,setSpeakerOn,audioRef,				//speaker状態管理
			handleSpeakerClick,		//スピーカーアイコン切り替え
			handlePauseAudio,handlePlayAudio,//handleBeforeUnload,//BGM停止、BGM再生、BGM停止(アンロード)
			SeErase,Sefix,//SE01再生、SE02再生関数
			screenDraw,nextScreenDraw,	//スクリーン・ネクストスクリーン描画
			tetroDraw,nextTetroDraw,		//テトロ・ネクストテトロ描画
			fieldDraw,					//フィールド描画
			handleClickStart,			//ゲームフラグ（スタートへ）
			gameFlag,						//ゲームフラグ
			handleKeyDown,	//キーボードの押されたキーをチェック
			fixTetro,		//テトロミノをフィールドに固定
			newTetro,//新しいテトロミノセット
			score,level,			//スコア、レベル
			dataReset,		//リセット

			count,				//カウント
			startCountdown,	//カウントダウンスタート
	gameStartModalFlag,setGameStartModalFlag,	//modal状態管理(ゲームオーバーモーダル)
	gameOverModalFlag,setGameOverModalFlag,	//modal状態管理(ゲームオーバーモーダル)

	} = useTetrisHooks();
	


	useEffect(()=>{

		return()=>{
			//ページ移動時にBGM停止(アンロード)
			handlePauseAudio();
		}
	},[]);
	
//--ブロックとフィールドの描画-------------------------
	useEffect(()=>{
	//--canvaseMainの描画-------------------------
		//canvasMainのid取得（スクリーン）
		const can = document.getElementById("main") as HTMLCanvasElement;
		//canを２D表示
		const canElement = can.getContext("2d");

		if(canElement){
			//スクリーン描画（外枠）
			screenDraw(can);
			//テトロミノ描画
			tetroDraw(canElement);
			//フィールド描画
			fieldDraw(canElement);
		}
	
	//--canvaseSideの描画-------------------------
		//canvasSideのid取得（next 表示部分）
		const nextCan = document.getElementById("side") as HTMLCanvasElement;
		//nextCanを２D表示
		let nextCanElement = nextCan.getContext("2d");
		if(nextCanElement){
			//ネクストスクリーン描画（外枠）
			nextScreenDraw(nextCan);
			//ネクストテトロミノ描画
			nextTetroDraw(nextCanElement);
// テキストの描画
//		nextCanElement.font = "20px Arial"; // フォントとサイズの指定
//		nextCanElement.fillStyle = "#000"; // テキストの塗りつぶし色
//		nextCanElement.fillText("Hello, World!", 10, 60); // テキストの描画位置
		}

	//--ゲームオーバー-------------------------
		if(!gameFlag && gameOverModalFlag){
			handleGameOverModalOpen();
		}

	//--イベントリスナー実行(キーダウン)-------------------------
		document.addEventListener("keydown",handleKeyDown,false);
		return()=>{
			//イベントリスナー削除(キーダウン)
			document.removeEventListener("keydown",handleKeyDown,false);
		}
	},[tetro_X,tetro_Y,tetro]);



	return(<>
		<Box sx={TetrisStyleContainer}>
			<Box sx={TetrisStyleContents}>
				<h1>Tetris</h1>
				<Icon onClick={handleSpeakerClick}>
					{speakerOn ? <VolumeUp /> : <VolumeOff />}
				</Icon>
			</Box>

			<Box sx={TetrisStyleMainContents}>
				<Box sx={TetrisStyleMain}>
					<canvas id="main">canvas要素をサポートしていません。</canvas>
				</Box>
				<Box sx={TetrisStyleSide}>
					NEXT<br/>
					<canvas id="side">canvas要素をサポートしていません。</canvas>
					SCORE<br/>
					{score}<br/>
					LEVEL<br/>
					{level +1}<br/>
				</Box>
			</Box>
			
			<Box sx={TetrisStyleContents}>
				<Button variant="contained" onClick={gameFlag? dataReset : startCountdown /*handleGameStartModalOpen*/ /*handleClickStart*/} sx={{width:"120px",margin:"5px"}}>{gameFlag? "RESET":"START"}</Button>

				<ModalStart open={gameStartModalFlag} count={count}/>
				<ModalGameOver open={gameOverModalFlag} onClose={handleGameOverModalClose} data={score}/>

			</Box>
		</Box>
	</>);
}