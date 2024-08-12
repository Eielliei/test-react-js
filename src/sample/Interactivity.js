import { useState } from "react";
import { Spacer } from "./SampleLayout";

function StateSnapShot() {
	const [to, setTo] = useState("Alice");
	const [message, setMessage] = useState("Hello");

	function handleSubmit(e) {
		e.preventDefault();
		setTimeout(() => {
			alert(`You said ${message} to ${to}`);
		}, 5000);
	}

	return (
		<Spacer>
			<form onSubmit={handleSubmit}>
				<label>
					To:{" "}
					<select value={to} onChange={(e) => setTo(e.target.value)}>
						<option value="Alice">Alice</option>
						<option value="Bob">Bob</option>
					</select>
				</label>
				<textarea
					placeholder="Message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type="submit">Send</button>
			</form>
		</Spacer>
	);
}

function QueueState() {
	const [score, setScore] = useState(0);

	function increment() {
		setScore((s) => s + 1);
	}

	return (
		<Spacer>
			<button onClick={() => increment()}>+1</button>
			<button
				onClick={() => {
					increment();
					increment();
					increment();
				}}
			>
				+3
			</button>
			<h1>Score: {score}</h1>
		</Spacer>
	);
}

function ObjectState() {
	const [person, setPerson] = useState({
		name: "Niki de Saint Phalle",
		artwork: {
			title: "Blue Nana",
			city: "Hamburg",
			image: "https://i.imgur.com/Sd1AgUOm.jpg",
		},
	});

	function handleNameChange(e) {
		setPerson({
			...person,
			name: e.target.value,
		});
	}

	function handleTitleChange(e) {
		setPerson({
			...person,
			artwork: {
				...person.artwork,
				title: e.target.value,
			},
		});
	}

	function handleCityChange(e) {
		setPerson({
			...person,
			artwork: {
				...person.artwork,
				city: e.target.value,
			},
		});
	}

	function handleImageChange(e) {
		setPerson({
			...person,
			artwork: {
				...person.artwork,
				image: e.target.value,
			},
		});
	}

	return (
		<Spacer>
			<label>
				Name:
				<input value={person.name} onChange={handleNameChange} />
			</label>
			<label>
				Title:
				<input value={person.artwork.title} onChange={handleTitleChange} />
			</label>
			<label>
				City:
				<input value={person.artwork.city} onChange={handleCityChange} />
			</label>
			<label>
				Image:
				<input value={person.artwork.image} onChange={handleImageChange} />
			</label>
			<p>
				<i>{person.artwork.title}</i>
				{" by "}
				{person.name}
				<br />
				(located in {person.artwork.city})
			</p>
			<img src={person.artwork.image} alt={person.artwork.title} />
		</Spacer>
	);
}

const initialList = [
	{ id: 0, title: "Big Bellies", seen: false },
	{ id: 1, title: "Lunar Landscape", seen: false },
	{ id: 2, title: "Terracotta Army", seen: true },
];

function ArrayState() {
	const [list, setList] = useState(initialList);

	function handleToggle(artworkId, nextSeen) {
		setList(
			list.map((artwork) => {
				if (artwork.id === artworkId) {
					return { ...artwork, seen: nextSeen };
				} else {
					return artwork;
				}
			})
		);
	}

	return (
		<>
			<h1>Art Bucket List</h1>
			<h2>My list of art to see:</h2>
			<ItemList artworks={list} onToggle={handleToggle} />
		</>
	);
}

function ItemList({ artworks, onToggle }) {
	return (
		<ul>
			{artworks.map((artwork) => (
				<li key={artwork.id}>
					<label>
						<input
							type="checkbox"
							checked={artwork.seen}
							onChange={(e) => {
								onToggle(artwork.id, e.target.checked);
							}}
						/>
						{artwork.title}
					</label>
				</li>
			))}
		</ul>
	);
}

function EventHandlers() {
	function handleClick1() {
		alert("Clicked!");
	}

	// function handleClick2() {
	// 	alert('Started')
	// }

	return (
		<>
			<button onClick={handleClick1}>Clicked Me 1</button>
			{/* runs every time the page render */}
			{/* <button onClick={handleClick2()}>Clicked Me 2</button>  */}
			<button onClick={() => alert("Hi")}>Hi</button>
			{/* runs every time the page render */}
			{/* <button onClick={alert('hello')}>Hello</button>  */}
		</>
	);
}

function ToolbarButton({ onClick, children }) {
	return (
		<button
			onClick={(e) => {
				e.stopPropagation();
				onClick();
			}}
		>
			{children}
		</button>
	);
}

function StoppingPopagation() {
	return (
		<div
			className="Toolbar"
			onClick={() => {
				alert("You clicked on the toolbar!");
			}}
		>
			<ToolbarButton onClick={() => alert("Playing!")}>
				Play Movie
			</ToolbarButton>
			<ToolbarButton onClick={() => alert("Uploading!")}>
				Upload Image
			</ToolbarButton>
		</div>
	);
}

function PreventingDefault() {
	return (
		<Spacer>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					alert("Submitting!");
				}}
			>
				<input />
				<button>Send</button>
			</form>
		</Spacer>
	);
}

function RequestTracker() {
	const [pending, setPending] = useState(0);
	const [completed, setCompleted] = useState(0);

	async function handleClick() {
		setPending((pending) => pending + 1);
		await delay(3000);
		setPending((pending) => pending - 1);
		setCompleted((completed) => completed + 1);
	}

	return (
		<Spacer>
			<h3>Pending: {pending}</h3>
			<h3>Completed: {completed}</h3>
			<button onClick={handleClick}>Buy</button>
		</Spacer>
	);
}

function delay(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

function increment(n) {
	return n + 1;
}
increment.toString = () => "n => n+1";

function SampleTestCases() {
	return (
		<Spacer>
			<TestCase baseState={0} queue={[1, 1, 1]} expected={1} />
			<hr />
			<TestCase
				baseState={0}
				queue={[increment, increment, increment]}
				expected={3}
			/>
			<hr />
			<TestCase baseState={0} queue={[5, increment]} expected={6} />
			<hr />
			<TestCase baseState={0} queue={[5, increment, 42]} expected={42} />
		</Spacer>
	);
}

function TestCase({ baseState, queue, expected }) {
	const actual = getFinalState(baseState, queue);
	return (
		<>
			<p>
				Base state: <b>{baseState}</b>
			</p>
			<p>
				Queue: <b>[{queue.join(", ")}]</b>
			</p>
			<p>
				Expected result: <b>{expected}</b>
			</p>
			<p
				style={{
					color: actual === expected ? "green" : "red",
				}}
			>
				Your result: <b>{actual}</b> (
				{actual === expected ? "correct" : "wrong"})
			</p>
		</>
	);
}

function getFinalState(baseState, queue) {
	let finalState = baseState;

	// Iterate through the queue array
	for (const item of queue) {
		// Check if the item is a number or an updater function
		if (typeof item === "number") {
			// If it's a number, simply add it to the final state
			finalState = item;
		} else if (typeof item === "function") {
			// If it's an updater function, apply it to the final state
			finalState = item(finalState);
		}
	}

	return finalState;
}

function ObjectState2() {
	const [player, setPlayer] = useState({
		firstName: "Ranjani",
		lastName: "Shettar",
		score: 10,
	});

	function handlePlusClick() {
		setPlayer({
			...player,
			score: player.score + 1,
		});
	}

	function handleFirstNameChange(e) {
		setPlayer({
			...player,
			firstName: e.target.value,
		});
	}

	function handleLastNameChange(e) {
		setPlayer({
			...player,
			lastName: e.target.value,
		});
	}

	return (
		<Spacer>
			<label>
				Score: <b>{player.score}</b>{" "}
				<button onClick={handlePlusClick}>+1</button>
			</label>
			<label>
				First name:
				<input value={player.firstName} onChange={handleFirstNameChange} />
			</label>
			<label>
				Last name:
				<input value={player.lastName} onChange={handleLastNameChange} />
			</label>
		</Spacer>
	);
}

function AddingArray() {
	let nextId = 0;
	const [name, setName] = useState("");
	const [artists, setArtists] = useState([]);

	return (
		<Spacer>
			<h1>Inspiring sculptors:</h1>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button
				onClick={() => {
					// use concat() or [...arr] to insert items in array
					setArtists([{ id: nextId++, name: name }, ...artists]);
				}}
			>
				Add
			</button>
			<ul>
				{artists.map((artist) => (
					<li key={artist.id}>{artist.name}</li>
				))}
			</ul>
		</Spacer>
	);
}

function RemovingArray() {
	let initialArtists = [
		{ id: 0, name: "Marta Colvin Andrade" },
		{ id: 1, name: "Lamidi Olonade Fakeye" },
		{ id: 2, name: "Louise Nevelson" },
	];

	const [artists, setArtists] = useState(initialArtists);

	return (
		<Spacer>
			<h1>Inspiring sculptors:</h1>
			<ul>
				{artists.map((artist) => (
					<li key={artist.id}>
						{artist.name}{" "}
						<button
							onClick={() => {
								// use filter() or slice() to remove item from array
								setArtists(artists.filter((a) => a.id !== artist.id));
							}}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</Spacer>
	);
}

function TransformingArray() {
	let initialShapes = [
		{ id: 0, type: "circle", x: 50, y: 100 },
		{ id: 1, type: "square", x: 150, y: 100 },
		{ id: 2, type: "circle", x: 250, y: 100 },
	];
	const [shapes, setShapes] = useState(initialShapes);

	function handleClick() {
		// use map() to transform or replace items in array
		const nextShapes = shapes.map((shape) => {
			if (shape.type === "square") {
				// No change
				return shape;
			} else {
				// Return a new circle 50px below
				return {
					...shape,
					y: shape.y + 50,
				};
			}
		});
		// Re-render with the new array
		setShapes(nextShapes);
	}

	return (
		<Spacer>
			<button onClick={handleClick}>Move circles down!</button>
			{shapes.map((shape) => (
				<div
					key={shape.id}
					style={{
						background: "purple",
						position: "relative",
						left: shape.x,
						top: shape.y,
						borderRadius: shape.type === "circle" ? "50%" : "",
						width: 20,
						height: 20,
					}}
				/>
			))}
		</Spacer>
	);
}

function ReplacingArray() {
	let initialCounters = [0, 0, 0];
	const [counters, setCounters] = useState(initialCounters);

	function handleIncrementClick(index) {
		// use map() to transform or replace items in array
		const nextCounters = counters.map((c, i) => {
			if (i === index) {
				// Increment the clicked counter
				return c + 1;
			} else {
				// The rest haven't changed
				return c;
			}
		});
		setCounters(nextCounters);
	}

	return (
		<ul>
			{counters.map((counter, i) => (
				<li key={i}>
					{counter}
					<button
						onClick={() => {
							handleIncrementClick(i);
						}}
					>
						+1
					</button>
				</li>
			))}
		</ul>
	);
}

function InsertingArray() {
	let nextId = 3;
	const initialArtists = [
		{ id: 0, name: "Marta Colvin Andrade" },
		{ id: 1, name: "Lamidi Olonade Fakeye" },
		{ id: 2, name: "Louise Nevelson" },
	];
	const [name, setName] = useState("");
	const [artists, setArtists] = useState(initialArtists);

	function handleClick() {
		const insertAt = 1; // Could be any index
		const nextArtists = [
			// Items before the insertion point:
			...artists.slice(0, insertAt),
			// New item:
			{ id: nextId++, name: name },
			// Items after the insertion point:
			...artists.slice(insertAt),
		];
		setArtists(nextArtists);
		setName("");
	}

	return (
		<Spacer>
			<h1>Inspiring sculptors:</h1>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={handleClick}>Insert</button>
			<ul>
				{artists.map((artist) => (
					<li key={artist.id}>{artist.name}</li>
				))}
			</ul>
		</Spacer>
	);
}

function ReverseArray() {
	const initialList = [
		{ id: 0, title: "Big Bellies" },
		{ id: 1, title: "Lunar Landscape" },
		{ id: 2, title: "Terracotta Army" },
	];
	const [list, setList] = useState(initialList);

	function handleClick() {
		const nextList = [...list];
		nextList.reverse();
		setList(nextList);
	}

	return (
		<Spacer>
			<button onClick={handleClick}>Reverse</button>
			<ul>
				{list.map((artwork) => (
					<li key={artwork.id}>{artwork.title}</li>
				))}
			</ul>
		</Spacer>
	);
}

export default function Interactivity() {
	return (
		<div style={{ padding: "10px" }}>
			<StateSnapShot />
			<QueueState />
			<ObjectState />
			<ArrayState />
			<EventHandlers />
			<Spacer>
				<StoppingPopagation />
			</Spacer>
			<PreventingDefault />
			<RequestTracker />
			<SampleTestCases />
			<ObjectState2 />
			<AddingArray />
			<RemovingArray />
			<TransformingArray />
			<Spacer><ReplacingArray /></Spacer>
			<InsertingArray />
			<ReverseArray />
		</div>
	);
}
