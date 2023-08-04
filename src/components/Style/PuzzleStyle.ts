//Puzzle大枠
export const PuzzleStyleContainer ={
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  width:"600px",
  height:"700px" ,
};

//PuzzlePiecesの外枠
export const PuzzleStyleBorder ={
  display:"grid",
  gridTemplateColumns:"repeat(3,1fr)",
  gridTemplateRows:"repeat(3,1f)",
  gap:0.1,
  border:"1px solid",
  width:"500px",
  height:"500px",
};

//PuzzlePieceの枠
export const PuzzleStylePiece ={
	color: "red",
	fontSize: "60px",
	border: "1px solid black",
	
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};
