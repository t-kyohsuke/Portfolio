import React, {useState, useEffect, useRef} from "react";
import { useTetrisHooks } from "./useTetrisHooks";
/*
export const useGenericHooks =()=>{
	const {
		//gameStartModalFlag,setGameStartModalFlag,	//modalフラグ(ゲームスタート)
	//	handleGameStartModalOpen,
		handleClickStart,			//ゲームスタート
		gameFlag,setGameFlag,		//ゲームフラグ
		gameOverFlag,				//ゲームオーバーフラグ
		dataReset,		//リセット
		handleBeforeUnload,//BGM停止(アンロード)
	}=useTetrisHooks();



//--モーダル------------------------

	//モーダル（ゲームオーバーオープン）
	const handleGameOverModalOpen =()=>{
		setGameOverModalFlag(true);
	};
	//モーダル（ゲームオーバークローズ）
	const handleGameOverModalClose =()=>{
		setGameOverModalFlag(false);
		handleBeforeUnload();	//BGM停止関数(アンロード)
		dataReset();			//リセット
	};



	//--return------------------------
	return{
		handleGameOverModalClose,		//ゲームオーバーモーダルクローズ
}

};
*/
