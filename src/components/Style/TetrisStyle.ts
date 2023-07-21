//Tetris大枠
export const TetrisStyleContainer ={
	display:"flex",
//	justifyContent:"center",	//上下中央
	alignItems:"center",		//左右中央
	flexDirection:"column",		//内容縦並び

	border:"1px solid",
	width:"500px",
	height:"700px" ,
};

//上下枠(Tetris/ボタン類)
export const TetrisStyleContents ={
	display:"flex",
	alignItems:"center",		//左右中央
	justifyContent:"center",	//上下中央
//	flexDirection:"column",		//内容縦並び
	width:"100%",
	height:"40px",
	border:"1px solid",
}

//真ん中枠(ゲームプレイ画面)
export const TetrisStyleMainContents ={
	display:"flex",
	alignItems:"center",		//左右中央
	justifyContent:"center",	//上下中央
	width:"100%",
	height:"620px",
	border:"1px solid",
}

export const TetrisStyleMain ={
	display:"flex",

	width:"400px",
	border:"1px solid",

}
export const TetrisStyleSide ={
//	display:"flex",

//	width:"150px",
	height:"600px",
	border:"1px solid",

}
