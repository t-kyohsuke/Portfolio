//Tetris大枠
export const TetrisStyleContainer ={
	display:"flex",
	flexDirection:"column",		//子要素の並ぶ向き 上下
	alignItems:"center",		//垂直方向の揃え　中央
	width:"600px",				//幅
	height:"800px" ,			//高さ

//	border:"1px solid",
};

//上下枠(Tetris/ボタン類)
export const TetrisStyleContents ={
	display:"flex",
	alignItems:"center",		//垂直方向の揃え　中央
	justifyContent:"center",	//水平方向の揃え　中央
	width:"100%",

//	border:"1px solid",
}

//真ん中枠(ゲームプレイ画面)
export const TetrisStyleMainContents ={
	display:"flex",
	alignItems:"center",		//垂直方向の揃え　中央
	justifyContent:"center",	//水平方向の揃え　中央
	width:"100%",				//幅
	height:"620px",				//高さ

//	border:"1px solid",
}

//ゲームステージ(ゲームプレイ画面-左)
export const TetrisStyleMain ={
	margin:"10px",		//マージン

//	border:"1px solid",
}

//ゲーム情報(ゲームプレイ画面-右)
export const TetrisStyleSide ={
	width:"150px",	//幅
	height:"610px",	//高さ

//	border:"1px solid",
}

//ゲーム情報(ゲームプレイ画面-右-ネクストテトロミノ)
export const TetrisStyleNextTetro ={
	width:"130px",			//幅
	height:"130px",			//高さ
	paddingTop:"10px",		//パディングトップ
	border:"2px solid",		//ボーダー
	borderRadius:"5px",		//ボーダー角の丸み
}