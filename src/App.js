import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import MyPage from "./sample/MyPage";
import MyTest from "./tests/MyTest";
import TicTacToe from "./game/TicTacToe";
import SampleLayout from "./sample/SampleLayout";
import OtherPage from "./sample/OtherPage";
import ComponentHierarchy from "./sample/ComponentHierarchy";
import Interactivity from "./sample/Interactivity";
import Immer from "./sample/Immer";
import StateManagement from "./sample/StateManagement";
import EscapeHatches from "./sample/EscapeHatches";
import ObjectDB from "./tests/ObjectDB";
import TestNav from "./tests/TestsNav";
import NavTabs from "./tests/NavTabs";
import CalcTime from "./tests/CalcTime";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sample/" element={<SampleLayout />}>
					<Route path="/sample/MyPage" element={<MyPage />} />
					<Route path="/sample/OtherPage" element={<OtherPage />} />
					<Route
						path="/sample/ComponentHierarchy"
						element={<ComponentHierarchy />}
					/>
					<Route path="/sample/Interactivity" element={<Interactivity />} />
					<Route path="/sample/Immer" element={<Immer />} />
					<Route path="/sample/StateManagement" element={<StateManagement />} />
					<Route path="/sample/EscapeHatches" element={<EscapeHatches />} />
				</Route>
				<Route path="/tests/" element={<TestNav />}>
					<Route path="/tests/MyTest" element={<MyTest />}></Route>
					<Route path="/tests/ObjectDB" element={<ObjectDB />}></Route>
					<Route path="/tests/NavTabs" element={<NavTabs />}></Route>
					<Route path="/tests/CalcTime" element={<CalcTime />}></Route>
				</Route>
				<Route path="/game/TicTacToe" element={<TicTacToe />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
