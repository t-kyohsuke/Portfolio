import React from "react"
import Box from "@mui/material/Box";
import { AboutStyleContainer} from "./Style/AboutStyle";

export const About:React.FC =()=>{
	return(<>
		<Box sx={AboutStyleContainer}>
			<h1>About</h1>
			TypeScriptの勉強用のサイトです。<br />
			ゲームなどを作りながら勉強しています。<br />
			<br />
			■PUZZLE<br />
			９マスのスライディングブロックパズルです。<br />
			マスをクリックすると、移動します。<br /><br />
		
			■TETRIS<br />
			キーボードの矢印キー、左右下で移動テトロミノの移動。<br />
			上でテトロミノが回転します。<br />
			プレイ中は音楽が流れます。<br />
			スピーカーアイコンをクリックすると音楽を止めることができます。<br />
			<br /><br />

			■GitHub<br />
			<a href="https://github.com/t-kyohsuke/Portfolio" target="_blank" rel="noopener noreferrer">ソースコード</a>
			<br /><br />
			作成：多田享補
		</Box>
	</>);
}