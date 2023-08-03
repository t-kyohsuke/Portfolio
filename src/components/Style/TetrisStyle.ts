//Tetris大枠
export const TetrisStyleContainer ={
	display:"flex",
	alignItems:"center",		//左右中央
	flexDirection:"column",		//内容縦並び
	width:"500px",
	height:"700px" ,
//	border:"1px solid",
};

//上下枠(Tetris/ボタン類)
export const TetrisStyleContents ={
	display:"flex",
	alignItems:"center",		//左右中央
	justifyContent:"center",	//上下中央
	width:"100%",
	height:"40px",
//	border:"1px solid",
}

//真ん中枠(ゲームプレイ画面)
export const TetrisStyleMainContents ={
	display:"flex",
	alignItems:"center",		//上下中央
	width:"100%",
	height:"620px",
//	border:"1px solid",
}

//ゲームステージ(ゲームプレイ画面-左)
export const TetrisStyleMain ={
	display:"flex",
	justifyContent:"space-around",
	margin:"10px",
//	border:"1px solid",
}

//ゲーム情報(ゲームプレイ画面-右)
export const TetrisStyleSide ={
	width:"150px",
	height:"610px",
//	border:"1px solid",

}

//ゲーム情報(ゲームプレイ画面-右-ネクストテトロミノ)
export const TetrisStyleNextTetro ={
	width:"130px",
	height:"130px",
	paddingTop:"10px",
	textAlign:"right",
	border:"2px solid",
	borderRadius:"5px",
}