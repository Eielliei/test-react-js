import logo from './logo.svg'
import './App.css'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<Link to="/sample/MyPage">MyPage</Link>
				<Link to="/tests/MyTest">MyTest</Link>
				<Link to="/game/TicTacToe">TicTacToe</Link>
			</header>
		</div>
  )
}
