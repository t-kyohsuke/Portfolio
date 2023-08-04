import React, { useState, useEffect, useRef} from "react";
import { createCanvas } from "canvas";
import bgm from "E:/Program/React/ts-app/src/audio/bgm.mp3";
import se01 from "E:/Program/React/ts-app/src/audio/se_powerdown_006.mp3";
import se02 from "E:/Program/React/ts-app/src/audio/se_shot_004.mp3";


export const useTetrisHooks =()=>{
//--フラグ---------------------------------
	//ゲームフラグ
	const [gameFlag,setGameFlag] = useState<boolean>(false);
	//ゲームスタート
	const refGameFlag = useRef(true);
	const handleClickStart =()=>{
		setGameFlag(prev =>{
			refGameFlag.current = true;
			return refGameFlag.current;
		} );	//ゲームフラグ(true)
		handlePlayAudio();	//BGM再生関数
	};
	//ゲームオーバーフラグ
	const [gameOverFlag, setGameOverFlag] = useState<boolean>(false);

	//modalフラグ(ゲームスタート)
	const [gameStartModalFlag, setGameStartModalFlag] = useState<boolean>(false);
	//modalフラグ(ゲームオーバー)
	const [gameOverModalFlag, setGameOverModalFlag] = useState<boolean>(false);


//--modalの設定---------------------------------
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


//--カウントダウン------------------------
	//カウント
	const [count, setCount] = useState<number>(3);
	//タイマーID
	const [timerId,setTimerId] = useState<NodeJS.Timer>();
	//カウントダウン
	const countDown =()=>{
		setCount((prev) => prev-1);
	};
	//カウントダウンスタート
	const startCountdown =()=>{
		setGameStartModalFlag(true);			//ゲームスタートモーダルフラグをtrueに
		setTimerId(setInterval(countDown,1000));//Intarvalスタート
	};

	//--カウントダウン終了-------------------------
	useEffect(()=>{
		if (count === 0){					//カウントが0になったら
			clearInterval(timerId);			//Intarvalストップ
			setCount(3);					//カウントダウンリセット
			setGameStartModalFlag(false);	//ゲームスタートモーダルフラグをfalseに
			handleClickStart();				//ゲームスタート
		}
	},[count]);



//--スピーカーアイコン---------------------------------
	//スピーカーアイコン状態管理
	const [speakerOn, setSpeakerOn] = useState(true);
	//スピーカーアイコンON/OFF
	const handleSpeakerClick=()=>{
		if(speakerOn){
			if(audioRef.current){
				audioRef.current.pause();
				setSpeakerOn(false);
			}
		}else{
			if(audioRef.current){
				setSpeakerOn(true);
				if(gameFlag){
					audioRef.current.play();
				}
			}
		}
	}

//--音楽プレイヤー---------------------------------
	const audioRef = useRef<HTMLAudioElement | null>(null);	//BGM
	const se01Ref = useRef<HTMLAudioElement | null>(null);	//SE（テトロミノ消去）
	const se02Ref = useRef<HTMLAudioElement | null>(null);	//SE（テトロミノ固定）
	//プレイヤー作成と設定
	useEffect(()=>{
		audioRef.current = new Audio(bgm);	//BGMプレイヤー
		audioRef.current.loop = true;		//BGMループ
		audioRef.current.volume = 0.2;		//BGMボリューム
		se01Ref.current = new Audio(se01);	//SE（テトロミノ消去）プレイヤー
		se01Ref.current.volume = 0.4;		//SE（テトロミノ消去）ボリューム
		se02Ref.current = new Audio(se02);	//SE（テトロミノ固定）プレイヤー
		se02Ref.current.volume = 0.4;		//SE（テトロミノ固定）ボリューム
	},[])

	//BGM再生関数
	const handlePlayAudio =()=>{
		if(audioRef.current && speakerOn){	//BGMプレイヤー有り＆スピーカーONなら
			audioRef.current.play();
		}
	};
	//BGM停止関数
	const handlePauseAudio =()=>{
		if(audioRef.current){
			audioRef.current.pause();	//BGMプレイヤーポーズ
			setSpeakerOn(false);		//スピーカーアイコン状態false
		}
	};
	//BGM停止関数(アンロード)
	const handleBeforeUnload =()=>{
		if(audioRef.current){
			audioRef.current.pause();	//BGMプレイヤーポーズ
			audioRef.current.currentTime = 0	//BGMプレイヤーリセット
		}
	};
	//SE（テトロミノ消去）
	const SeErase =()=>{
		if(se01Ref.current && speakerOn){
			se01Ref.current.play();
		}
	};
	//SE（テトロミノ固定）
	const Sefix =()=>{
		if(se02Ref.current && speakerOn){
			se02Ref.current.play();
		}
	};

//---フィールド設定------------------------------------
	//ブロック１つのサイズ
	const BlockSize:number=30;
	//フィールドサイズ
	const FieldCol:number = 10;
	const FieldRow:number = 20;
	//スクリーンサイズ(フィールドサイズ * ブロック１つのサイズ)
	const screenW:number = BlockSize * FieldCol;
	const screenH:number = BlockSize * FieldRow;
	//ネクストスクリーンサイズ
	const nextScreenW:number = BlockSize * 4;
	const nextScreenH:number = BlockSize * 4;

	//フィールド本体(二次元配列)
	const [field,setField] = useState<number[][]>(Array(FieldRow).fill(0).map(row=> new Array(FieldCol).fill(0)));
//fieldを変更するために：newField作成➔fieldコピー➔newFieldを変更➔setFieldで更新
//	const newField:number[][] = [...field];

//--テトロミノ設定------------------------------------
	//サイズ
	const TetroSize:number=4;
	//色
	const TetroColors = [
		"#fff",	//0
		"#6CF",	//1 水色
		"#F92",	//2 オレンジ
		"#66F",	//3 青
		"#C5C",	//4 紫
		"#FD2",	//5 黄色
		"#F44",	//6 赤
		"#5B5",	//7 緑
	]
	//形
	const TetroTypes = [
		//0: 
		[
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0],
		],
		//1:I 
		[
			[0,1,0,0],
			[0,1,0,0],
			[0,1,0,0],
			[0,1,0,0],
		],
		//2:L
		[
			[0,1,0,0],
			[0,1,0,0],
			[0,1,1,0],
			[0,0,0,0],
		],
		//3:J
		[
			[0,0,1,0],
			[0,0,1,0],
			[0,1,1,0],
			[0,0,0,0],
		],
		//4:T
		[
			[0,1,0,0],
			[0,1,1,0],
			[0,1,0,0],
			[0,0,0,0],
		],
		//5:O
		[
			[0,0,0,0],
			[0,1,1,0],
			[0,1,1,0],
			[0,0,0,0],
		],
		//6:Z
		[
			[0,0,0,0],
			[1,1,0,0],
			[0,1,1,0],
			[0,0,0,0],
		],
		//7:S
		[
			[0,0,0,0],
			[0,1,1,0],
			[1,1,0,0],
			[0,0,0,0],
		],
	]


//--２つのランダム整数生成--------------
	//ランダム整数生成関数
	const getRandomInt=(min:number,max:number)=>{
		min = Math.ceil(min);	//小数点以下切り上げ
		max = Math.floor(max);	//小数点以下切り捨て
		return Math.floor(Math.random() * (max - min +1)) + min;
	}
	//Tetroのランダム整数
	const [TetroRandom, setTetroRandom] = useState<number>(getRandomInt(1,TetroTypes.length - 1));
	//nextTetroのランダム整数
	const [nextTetroRandom, setNextTetroRandom] = useState<number>(getRandomInt(1,TetroTypes.length - 1));
	//２つのランダム整数が同じなら再度ランダム整数生成
	useEffect(()=>{
		while(nextTetroRandom === TetroRandom){
			setTetroRandom(prev => getRandomInt(1,TetroTypes.length -1 ));
		}	
	},[])

//--２つテトロミノ本体--------------
	//テトロミノ
	const [tetro,setTetro] = useState<number[][]>(TetroTypes[TetroRandom]);
	//ネクストテトロミノ
	const [nextTetro,setNextTetro] = useState<number[][]>(TetroTypes[nextTetroRandom]);
	
//--テトロミノのスタート座標--------------
	const StartX:number = FieldCol/2 - TetroSize/2;
	const StartY:number = 0;
	const [tetro_X,setTetro_X] = useState<number>(StartX);
	const [tetro_Y,setTetro_Y] = useState<number>(StartY);

//--ゲームレベル--------------
	const [level,setLevel] = useState<number>(0);
	//ブロック落下スピード
	const [gameSpeed,setGameSpeed]= useState<number[]>([850,650,400,250,150]);
	//スコア
	const [score,setScore] = useState<number>(0);
	const newScoreRef = useRef<number>(score);

//--ブロック描画関数--------------
	const drawBlock=(x:number, y:number, canvasEle:any, color:number)=>{
		let px = x * BlockSize;//0～4 * 30(BlockSize)
		let py = y * BlockSize;
		canvasEle.fillStyle = TetroColors[color];		//色
		canvasEle.fillRect(px,py,BlockSize,BlockSize);	//塗りつぶしサイズ
		canvasEle.strokeStyle = '#000';				//輪郭の色
		canvasEle.strokeRect(px,py,BlockSize,BlockSize);//輪郭
	}


//--移動先は描画できるかチェック--------------------------------
	const checkMove = (moveX:number,moveY:number,
	newTetro?:number[][]|undefined,
	newTetro_X?:number|undefined,
	newTetro_Y?:number|undefined)=>{
		//new から始まる引数が undefined なら代入
		if(newTetro === undefined) newTetro = tetro;
		if(newTetro_X === undefined) newTetro_X = tetro_X;
		if(newTetro_Y === undefined) newTetro_Y = tetro_Y;

		//テトロミノの各ブロックごとに移動先に表示できるかチェック
		for(let y=0; y<TetroSize; y++){
			for(let x=0; x<TetroSize; x++){
				if(newTetro[y][x]){//テトロミノ自体にブロックがあれば、移動できるかチェック
					let newX:number = x + moveX + newTetro_X;//移動先の座標x
					let newY:number = y + moveY + newTetro_Y;//移動先の座標y
					if(	newX <0 ||			//左端より小さい or
						newY <0 ||			//上端より小さい or
						newX >= FieldCol||	//右端より以上 or
						newY >= FieldRow||	//下端より以上 or
						field[newY][newX])	{//フィールドにブロックがあれば、移動できない
							return false;	//移動できない false
					}
				}
			}
		}
		return true;	//移動先がフィールド内でブロックがないので、移動できる
	}

//--テトロミノの回転--------------------------------
const rotateTetro =()=>{
	//回転後のテトロミノを入れる変数
	let newTetro:number[][] =[];

	//テトロミノの各ブロックごとに newTetro に入れていく
	for(let y=0; y<TetroSize; y++){
		newTetro[y] =[];
		for(let x=0; x<TetroSize; x++){
			newTetro[y][x] = tetro[TetroSize-1-x][y];//右回転する
			//newTetro の y が増えると tetro の y が 3 から減っていく。
			//newTetro の x が増えると tetro の x が増えていく。
		}
	}
	return newTetro;//回転済みのテトロミノを返す
}



//--ラインができたかチェックとテトロミノ消去、スコアレベルアップ-----------------------------
const checkLine =()=>{
		//フィールドにブロックがあるかチェック
		for(let y=0; y<FieldRow; y++){
			let flag:boolean = true;	//フィールドブロックフラグ
			for(let x=0; x<FieldCol; x++){
				if(!field[y][x]){	//フィールドブロックがなければ
					flag = false;	//flag は false に
					break;
				}
			}
			if(flag){	//フィールドブロックがあるとき
				//フィールドテトロミノの消去
				for(let ny=y; ny>0; ny--){	//現在の y行 から上へ向かう
					for(let nx=0; nx<FieldCol; nx++){
						field[ny][nx] = field[ny-1][nx];//現在の y行へ１つ上の行を入れる
					}
				}
				//SE（テトロミノ消去）
				SeErase();
				//スコア加算
				newScoreRef.current = newScoreRef.current +100;
				setScore(prev => newScoreRef.current);
				//レベルアップ
				if(newScoreRef.current>500){
					setLevel(1);
					if(newScoreRef.current>1000){
						setLevel(2);
						if(newScoreRef.current>1500){
							setLevel(3);
							if(newScoreRef.current>2000){
								setLevel(4);
							}
						}
					}
				}	
			}
		}
	}

//---テトロミノの固定------------------------------
const fixTetro=()=>{
	//テトロミノの各ブロックごとにフィールドに代入
	for(let y=0; y<TetroSize; y++){
		for(let x=0; x<TetroSize; x++){
			if(tetro[y][x]){//テトロミノ自体にブロックがあれば
				//フィールド変数を一時保存用フィールド変数にコピー
				let tempField:number[][] = [...field];
				//フィールドマスに現在のテトロミノ番号（色）を入れて固定
				tempField[tetro_Y + y ][tetro_X + x] = TetroRandom;
				//本来のフィールド変数に、一時保存用フィールド変数を代入
				setField(tempField);
				//ラインができたかチェック
				checkLine();
			}
		}
	}
	//SE（テトロミノ固定）
	Sefix();
}


//------キーボード操作--------------------------------
//キーボードの押されたキーをチェック
const handleKeyDown = (e:{keyCode:number})=>{
	//ゲームフラグ
	if(!gameFlag && gameOverFlag){
		return;
	} 

    switch(e.keyCode){
      case 37://左
		if(checkMove(-1,0)) setTetro_X((x)=> x-1);
		console.log("左");
        break;
		
      case 39://右
		if(checkMove(1,0)) setTetro_X((x)=> x+1);
		console.log("右");
        break;
        
      case 40://下
		if(checkMove(0,1)) setTetro_Y((y)=> y+1);
        break;
        
      case 38://上	テトロミノ回転
		let newTetro:number[][] = rotateTetro();
		//回転先にブロックがないかチェック
		if(checkMove(0,0,newTetro)) setTetro((x)=>x=rotateTetro());
        break;
      
      default://デフォルト
    }
}

//--スクリーン描画--------------
	const screenDraw =(can:any)=>{
		//外枠（スクリーン）の設定
		can.width = screenW;
		can.height = screenH;
		can.style.border = "2px solid #555";
		can.style.backgroundColor = "#fff";
		can.style.borderRadius = "5px";
	}
//--ネクストスクリーン描画--------------
	const nextScreenDraw =(nextCan:any)=>{
		//外枠（ネクストスクリーン）の設定
//		nextCan.style.border = "1px solid #555";
//		nextCan.style.backgroundColor = "#fff";
//		nextCan.style.borderRadius = "5px";
		nextCan.width = nextScreenW;
		nextCan.height = nextScreenH;
	}
//--フィールド描画--------------
	const fieldDraw =(canElement:any)=>{
		for(let y=0; y<FieldRow; y++){
			for(let x=0; x<FieldCol; x++){
				if(field[y][x]){
					//ブロック描画関数へ
					drawBlock(x,y,canElement,field[y][x]);
				}
			}
		}
	}
//--テトロミノ描画--------------
	const tetroDraw =(canElement:any)=>{
		//着地点にテトロミノの枠を表示
	let plus:number =0;
	while(checkMove(0,plus+1))plus++;

		for(let y=0; y<TetroSize; y++){
			for(let x=0; x<TetroSize; x++){
				if(tetro[y][x]){
					//ブロック描画関数へ
						//テトロミノ着地点描画
	drawBlock(tetro_X+x, tetro_Y+y+plus, canElement,0);

					//テトロミノ描画
					drawBlock(tetro_X+x, tetro_Y+y, canElement,TetroRandom);

				}
			}
		}
	}
//--ネクストテトロミノ描画--------------
	const nextTetroDraw =(nextCanElement:any)=>{
		for(let y=0; y<TetroSize; y++){
			for(let x=0; x<TetroSize; x++){
				if(nextTetro[y][x]){
					//ブロック描画関数へ
					drawBlock(x, y, nextCanElement,nextTetroRandom);
				}
			}
		}
	}


//--新しいテトロミノ--------------

//tetro_X,tetro_Yの更新がうまく同期しないのでuseRefで対応(テトロミノの自動落下)
//const newXRef = useRef<number>(tetro_X);
//const newYRef = useRef<number>(tetro_Y);

	//nextTetroRandomの更新がうまく同期しないのでuseRefで対応(テトロミノの自動落下)
	const newNTRandom = useRef<number>(0);

	const newTetro =()=>{
		
	//新しいランダム整数をセットする
		//tetroRandom ⬅ nextTetroRandom
		setTetroRandom(prev => nextTetroRandom);
		//nextTetroRandom ⬅ 新しいランダム整数
		setNextTetroRandom(prev=>{
			//nextTetroRandomの更新がうまく同期しないのでuseRefで対応
			newNTRandom.current = getRandomInt(1,TetroTypes.length - 1);
			return newNTRandom.current;
		}
		);
	//新しいテトロミノをセットする
		//tetro ⬅ nextTetro
		setTetro(prev => nextTetro);
		//nextTetro ⬅ 新しいテトロミノ
		setNextTetro(prev => TetroTypes[newNTRandom.current]);

		setTetro_X(prev=> StartX
/*{
newXRef.current = StartX;//tetro_Xの更新がうまく同期しないのでuseRefで対応
			return newXRef.current;//StartX;
		}*/);
		setTetro_Y(prev=> StartY
/*{
newYRef.current = StartY;//tetro_Yの更新がうまく同期しないのでuseRefで対応
			return newYRef.current;//StartY;
		}*/);
	}

//--インターバル------------------------
	const useInterval=(callback:()=>void,delay:number|null)=>{
					//callvack:実行する関数 delay:ミリ秒

		const saveCallback = useRef<()=>void|null>();
		//コールバック関数を保存する
		useEffect(()=>{
			saveCallback.current = callback;
		},[callback]);

		//インターバルを設定する
		useEffect(()=>{
			const tick=()=>{
				if(typeof saveCallback?.current !== "undefined"){
					saveCallback?.current();
				}
			}
			if(delay !== null){
				const id = setInterval(tick,delay);
				return ()=> clearInterval(id);
			}
		},[delay]);
	}


//--リセット・リスタート------------------------------------------
	const dataReset =()=>{
	//TetroRandom生成
		//一時保存用（useStateだと更新が反映されるまでラグがあるため）
		let nextTetroRandomTemp = getRandomInt(1,TetroTypes.length - 1);
		let tetroRandomTemp = getRandomInt(1,TetroTypes.length - 1);

		//２つのランダム整数が同じなら再度ランダム整数生成
		while(nextTetroRandomTemp === tetroRandomTemp){
			tetroRandomTemp = getRandomInt(1,TetroTypes.length - 1);
		}

		//各ランダム数を更新
		setNextTetroRandom(prev => nextTetroRandomTemp);
		setTetroRandom(prev => tetroRandomTemp);
		//各テトロを更新
		setNextTetro(TetroTypes[nextTetroRandomTemp]);
		setTetro(TetroTypes[tetroRandomTemp]);

		//テトロミノの座標
		setTetro_X(StartX);
		setTetro_Y(StartY);
		//ゲームレベル
		setLevel(0);
		//スコア
		setScore(0);
		newScoreRef.current = 0;
		//BGM停止関数(アンロード)
		handleBeforeUnload();

		//ゲームフラグ
		setGameFlag(false);
		//ゲームオーバーフラグ
		setGameOverFlag(false);
		//フィールドリセット
		let fieldTemp =Array(FieldRow).fill(0).map(row=> new Array(FieldCol).fill(0))
		setField(prev => fieldTemp);
	};
	


//--自動落下------------------------

	useInterval(()=>{
		//ゲームフラグ
		if(!gameFlag) return;

		//下に移動できるなら
		if(checkMove(0,1)){
			//下方向に１を足す
			setTetro_Y(prev=> prev +1);

		//下に移動できない（フィールドエンドまたはブロックが存在）場合
		}else{
			//テトロミノの固定
			fixTetro();
			//新しいテトロミノ
			newTetro();

			//ゲームオーバーチェック
			if(!checkMove(0,0,tetro,StartX,StartY)){//newXRef.current,newYRef.current)){
				setGameOverModalFlag(prev => true);
				setGameFlag(prev => false);
				setGameOverFlag(prev => true);
			}
		}
	},gameSpeed[level]);


//--return------------------------
	return{
	//フラグ------------------------
		gameFlag,setGameFlag,		//ゲームフラグ
		gameOverFlag,				//ゲームオーバーフラグ
		handleGameOverModalOpen,handleGameOverModalClose,	//ゲームオーバーモーダル(オープン、クローズ)

	//テトロミノ------------------------
		tetro_X,setTetro_X,tetro_Y,setTetro_Y,	//テトロミノ座標
		tetro,									//テトロミノ本体

	//サウンド類------------------------
		speakerOn,setSpeakerOn,audioRef,				//speaker状態管理
		handleSpeakerClick,		//スピーカーアイコン切り替え関数
		handlePauseAudio,handlePlayAudio,handleBeforeUnload,//BGM停止、BGM再生、BGM停止(アンロード)
		SeErase,Sefix,//SE01再生、SE02再生関数
	
	//描画------------------------
		screenDraw,nextScreenDraw,	//スクリーン・ネクストスクリーン描画
		tetroDraw,nextTetroDraw,	//テトロ・ネクストテトロ描画
		fieldDraw,					//フィールド描画

		handleClickStart,			//ゲームスタート（フラグ変更処理）
		handleKeyDown,	//キーボードの押されたキーをチェック
		fixTetro,		//テトロミノをフィールドに固定
		newTetro,		//新しいテトロミノをセット

		score,level,	//スコア、レベル
		dataReset,		//リセット
		useInterval,	//インターバル

		count,				//カウント
		startCountdown,	//カウントダウンスタート
		gameStartModalFlag,setGameStartModalFlag,	//modal状態管理(ゲームオーバーモーダル)
		gameOverModalFlag,setGameOverModalFlag,	//modal状態管理(ゲームオーバーモーダル)

	}
}

