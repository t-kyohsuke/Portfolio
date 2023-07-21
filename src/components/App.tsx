import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import {Main} from "./Main";
import { Puzzle } from "./Puzzle";
import { Tetris } from "./Tetris";
import { About } from "./About";
import { useTetrisHooks} from "./Hooks/useTetrisHooks";

export const App:React.FC =()=>{
//	const {handleClickBeforeUnload} = useTetrisHooks();
	return(
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Main" element={<Main />}>
				{/*ネスト化 二分割のページの子ルート*/}
				<Route path="/Main" element={<About />} />
				<Route path="/Main/Puzzle" element={<Puzzle />} />
				<Route path="/Main/Tetris" element={<Tetris />} />
			</Route>
		</Routes>
		</BrowserRouter>
		);
}
