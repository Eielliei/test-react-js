import { NavLink, Outlet } from "react-router-dom";
import './tests.css'

export const STYLE_SPACER = {
	margin: "5px",
	padding: "5px",
	border: "1px solid black",
};

export function SpacerContainer({
	margin = 5,
	padding = 5,
	width = 1,
	color = "black",
	children,
}) {
	return (
		<div
			style={{
				margin: `${margin}px`,
				padding: `${padding}px`,
				border: `${width}px solid ${color}`,
			}}
		>
			{children}
		</div>
	);
}

export function NavButton({ to, children}) {
    return (
        <NavLink to={to} className={({isActive}) => isActive ? 'navlink-active' : 'navlink'}>{children}</NavLink>
    )
}

export default function TestNav() {
	return (
		<>
			<nav className="test-navbar">
				<ul>
					<li>
                        <NavButton to='/'>Home</NavButton>
					</li>
					<li>
                        <NavButton to='/tests/ObjectDB'>ObjectDB</NavButton>
                    </li>
					<li>
                        <NavButton to='/tests/NavTabs'>NavTabs</NavButton>
                    </li>
					<li>
                        <NavButton to='/tests/CalcTime'>CalcTime</NavButton>
                    </li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
};
