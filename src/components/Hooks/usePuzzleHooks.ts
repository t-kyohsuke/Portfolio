
import { useState, useEffect} from "react";

export const usePuzzleHooks =()=>{
	//pieces初期設定
	const initialPieces =[1,2,3,4,5,6,7,8,""];
	const [pieces ,setPieces] = useState<(number|string)[]>(initialPieces);
	//modal状態管理(ゲームオーバー)
	const [gameOverModal, setGameOverModal] = useState(false);
	//ゲームプレイ状態管理
	const [play, setPlay] = useState(false);
	//タイマーON/OFF状態管理
	const [isRunning, setIsRunning] = useState(false);
	//タイマー経過時間
	const [time, setTime] = useState(0);
	//スコアタイム
	const [score,setScore] = useState(0);


//--Boxをクリックしたときの処理（移動）-----------------
	const handleClickPiece =(index:number, pieces:(number|string)[])=>{
		const newPieces:(number|string)[] = [...pieces];
		let blank;

		switch(index){
			case 0:
				blank = 1;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				blank = 3;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				break;
		
			case 1:
				blank = 0;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				blank = 2;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				blank = 4;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				break;

			case 2:
				blank = 1;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				blank = 5;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				break;

			case 3:	
				blank = 0;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				blank = 4;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				blank = 6;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				break;

			case 4:
				blank = 1;
				if(newPieces[blank] === ""){	
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				blank = 3;
				if(newPieces[blank] === ""){	
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				blank = 5;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				blank = 7;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				break;

			case 5:
				blank = 2;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				blank = 4;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				blank = 8;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				break;

			case 6:
				blank = 3;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				blank = 7;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				break;

			case 7:
				blank = 4;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				blank = 6;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				blank = 8;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces( a => newPieces);
				}
				break;

			case 8:
				blank = 5;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				blank = 7;
				if(newPieces[blank] === ""){
					[newPieces[index],newPieces[blank]] = [newPieces[blank],newPieces[index]];
					setPieces(newPieces);
				}
				break;
		}
	}

//--ゲームスタート（フラグON/OFF）--------------------
	const handleStartStop =()=>{
		//ゲームプレイ状態変更
		setPlay((prev) => !prev);
	}

//--ゲームスタート（シャッフル/タイマー）--------------------
	const StartStop =()=>{
		useEffect(()=>{
			if(play === true){
				let shuffledPieces = [];
				//クリア可能になるまでシャッフルする
				do{
					shuffledPieces = shufflePieces();	//シャッフル（piecesをシャッフル）
				}while(!isSolvable([...shuffledPieces]));	//シャッフル（クリア可能かどうか）
				setPieces(shuffledPieces);
				//タイマー状態変更(ON)
				setIsRunning(true);
				setTime(0);

			}else{
				//pieces初期化
				setPieces(initialPieces);
				//タイマー状態変更(OFF)
				setIsRunning(false);
				setTime(0);
			}
		},[play]);
	};

//--シャッフル（piecesをシャッフル）--------------------
	const shufflePieces =()=>{
		const shuffleArray = [...initialPieces];
		for(let i = shuffleArray.length-1 ; i>0; i--){
			const j = Math.floor(Math.random() * (i+1));// 0～i のランダム整数
			[shuffleArray[i],shuffleArray[j]] = [shuffleArray[j],shuffleArray[i]]
				//配列の入れ替え
		}
		return shuffleArray;
	}

//--シャッフル（スワップ）--------------------
	const swap =(i:number, j:number, arr:(number|string)[])=>{
		//要素を交換
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

//--シャッフル（クリア可能かどうか）--------------------
	const isSolvable =(sPieces:(number|string)[]):boolean=>{
	//--空白までの距離--------------------
        // 配列の空白のインデックス番号を格納
        const blankIndex = sPieces.indexOf("");
        // 縦の距離の計算
		const distVertical = Math.floor(((sPieces.length-1) - blankIndex) / Math.sqrt(sPieces.length));
        // 横の距離の計算
        const distHorizontal = ((sPieces.length-1) -blankIndex) % Math.sqrt(sPieces.length);
        // 縦と横を足す
		console.log("ver:"+distVertical+":hor:"+distHorizontal);
        const dist = distVertical + distHorizontal;

	//--入れ替え回数--------------------
		//入れ替えが起きた回数用
		let inversionCount = 0;	
		//配列の隣り合う要素を比較して、小➔大の順にしていく
		for(let i=0; i<sPieces.length-1; i++){
			for(let j=i+1; j<sPieces.length; j++){
				if(i+1 === sPieces[j]){//1～8までの数値と同じ配列要素を知らえべて入れ替え
					//swap関数で並び替え
					swap(i,j,sPieces);
					//入れ替えが起きた回数をインクリメント
					inversionCount++;
				}
			}
			//初期値と比較して同じならループから抜ける
			if(initialPieces.toString() === sPieces.toString()){
				break;
			}
		}

	//--判定（入れ替え回数と、空白までの距離の偶奇を確認）------------------
		if(inversionCount%2 === dist%2){
			return true;
		}else{
			return false;
		}
	}

//--クリア条件のチェック--------------------
	const checkingAnswers =(pieces:(number|string)[])=>{
		const checkPieces =[1,2,3,4,5,6,7,8,""];
		if(pieces.every((value,index)=> value === checkPieces[index])){
			if(play === true){
				setGameOverModal(true);	//modal状態管理（ゲームオーバー）
				setPlay(false);			//ゲームプレイ状態管理
				setIsRunning(false);	//タイマーON/OFF状態管理
				setScore(time);			//スコアタイム
			}
		}
	}

//--タイマー-------------------
	const Timer =()=>{
		useEffect (()=>{
			//タイマーID
			let timerID:NodeJS.Timeout;
			if(isRunning){	//タイマー状態管理がtrueなら
				timerID = setInterval(()=>{
					setTime((prev)=> prev+0.01);
				},10);
			}
			return ()=>{
				clearInterval(timerID);
			};
		},[isRunning]);
	}

	//--タイマーフォーマット-------------------
	const formatTime = (data:number) => {
		const minutes = Math.floor(data / 60);
		const seconds = Math.floor(data % 60);
		const milliseconds = Math.floor((data % 1) * 100);

		const formattedMinutes = String(minutes).padStart(1, '0');
		const formattedSeconds = String(seconds).padStart(2, '0');
		const formattedMilliseconds = String(milliseconds).padStart(2, '0');

		return `${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
	};


//--戻り値-------------------
	return{
		pieces,						//数値の配列
		gameOverModal,setGameOverModal,	//modal状態管理(ゲームオーバー)
		handleClickPiece, 			//Boxをクリックしたときの処理（移動）
		checkingAnswers,			//クリア条件チェック
		handleStartStop,			//ゲームスタート（フラグON/OFF）
		StartStop,					//ゲームスタート（シャッフル/タイマー）

		Timer,						//インターバル
		formatTime,					//タイマーフォーマット
		isRunning,					//タイマー状態管理
		score,						//スコアタイム
		time,						//タイマー経過時間
	};

}