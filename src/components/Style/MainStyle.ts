//Mainページアウターフレーム
export const OuterFrame ={
	display:"flex",
	justifyContent:"center",	//水平方向の揃え　中央
	width:"100%",				//幅

//	border:"1px solid"
}

//Mainページ大枠
export const MainStyle ={
//	component:"div",		//コンポーネント-divタグ
	display:"flex",
	flexDirection:"row",	//子要素の並ぶ向き 左→右
	justifyContent:"center",//水平方向の揃え　中央
	alignItems:"center",	//垂直方向の揃え　中央
	height:"calc(100vh - 20px)",	//高さ
	width:"1000px",			//幅
	border:"1px solid",		//ボーダー
	borderRadius:"16px",	//ボーダー角の丸み
}

//Mainページ左側
export const MainStyleLeft ={
	border:"solid 1px",		//ボーダー
	width:"120px",			//ボーダー角の丸み
	height:"calc(100% - 120px)",	//高さ
	minHeight:"700px",		//高さ
	padding:"20px"			//パディング
}

//Mainページ右側
export const MainStyleRight ={
	display:"flex",
	justifyContent:"center",//水平方向の揃え　中央
	border:"solid 1px",		//ボーダー
	width:"100%",			//幅
	height:"calc(100% - 120px)",//高さ
	minHeight:"700px",		//高さ
	padding:"20px"			//パディング
}

