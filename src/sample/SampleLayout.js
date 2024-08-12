import { Outlet, Link, NavLink } from "react-router-dom";
import './sample.css'


export function Spacer({ width=1, color='black', children }) {
	return (
		<div
			style={{ margin: "10px 0px", padding: "10px", border: `${width}px solid ${color}` }}
		>
			{children}
		</div>
	);
}

const SampleLayout = () => {
	return (
		<>
			<nav className="navbar">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<NavLink to="/sample/MyPage" className={({isActive}) => isActive ? 'activeLink' : ''}>MyPage</NavLink>
					</li>
					<li>
						<NavLink to="/sample/OtherPage" className={({isActive}) => isActive ? 'activeLink' : ''}>OtherPage</NavLink>
					</li>
					<li>
						<NavLink to="/sample/ComponentHierarchy" className={({isActive}) => isActive ? 'activeLink' : ''}>ComponentHierarchy</NavLink>
					</li>
					<li>
						<NavLink to="/sample/Interactivity" className={({isActive}) => isActive ? 'activeLink' : ''}>Interactivity</NavLink>
					</li>
					<li>
						<NavLink to="/sample/Immer" className={({isActive}) => isActive ? 'activeLink' : ''}>Immer</NavLink>
					</li>
					<li>
						<NavLink to="/sample/StateManagement" className={({isActive}) => isActive ? 'activeLink' : ''}>StateManagement</NavLink>
					</li>
					<li>
						<NavLink to="/sample/EscapeHatches" className={({isActive}) => isActive ? 'activeLink' : ''}>EscapeHatches</NavLink>
					</li>
					<li>
						<Link to="/tests/MyTest">MyTest</Link>
					</li>
					<li>
						<Link to="/game/TicTacToe">TicTacToe</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
};


export default SampleLayout;
