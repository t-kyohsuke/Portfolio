//Puzzle大枠
export const PuzzleStyleContainer ={
  display:"flex",
  flexDirection:"column",   //子要素の並ぶ向き 上→下
  alignItems:"center",      //垂直方向の揃え　中央
  width:"600px",            //幅
  height:"800px" ,          //高さ

//  border:"1px solid"
};

//上下枠(Puzzle/ボタン類)
export const PuzzleStyleContents ={
	display:"flex",
  flexDirection:"column", //子要素の並ぶ向き 上下
	alignItems:"center",    //垂直方向の揃え　中央
	width:"100%",           //幅

//  border:"1px solid",
}

//PuzzlePiecesの外枠
export const PuzzleStyleBorder ={
  display:"grid",
  gridTemplateColumns:"repeat(3,1fr)",  //幅を3つに分ける
  gridTemplateRows:"repeat(3,1f)",      //高さを３つに分ける
  gap:0.1,                              //ギャップ

  border:"1px solid",     //ボーダー
  width:"500px",          //幅
  height:"500px",         //高さ
};

//PuzzlePieceの枠
export const PuzzleStylePiece ={
	color: "red",             //文字色
	fontSize: "60px",         //フォントサイズ
	border: "1px solid black",//ボーダー
	
	display: "flex",
	alignItems: "center",   //垂直方向の揃え　中央
	justifyContent: "center", //水平方向の揃え　中央
};
