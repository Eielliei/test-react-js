import { Link } from "react-router-dom";
import "./sample.css";
import { useState } from "react";
import Gallery from "./Gallery";
import { Picture } from "./Gallery";

function MyButton() {
	function handleClick() {
		alert('You clicked me!');
	  }
	
	return (
		<button onClick={handleClick}>
			I'm a button
		</button>
	);
}

function Profile() {
	const user = {
		name: "Hedy Lamarr",
		imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
		imageSize: 90,
	};
	return (
		<>
			<h1>{user.name}</h1>
			<img
				className="avatar"
				src={user.imageUrl}
				alt={"Photo of " + user.name}
				style={{
					width: user.imageSize,
					height: user.imageSize,
				}}
			/>
		</>
	);
}

function CondionalRendering() {
	let content;
	let isLoggedIn = false;
	if (isLoggedIn) {
		content = "LoggedIn";
	} else {
		content = "LoggedOut";
	}
	return (
		<div>
			{content}

			{isLoggedIn ? <h1>LoggedIn</h1> : <h1>LoggedOut</h1>}
		</div>
	);
}

function RenderingList() {
	const products = [
		{ title: "Cabbage", id: 1 },
		{ title: "Garlic", id: 2 },
		{ title: "Apple", id: 3 },
	];

	const listItems = products.map((product) => (
		<li key={product.id}>{product.title}</li>
	));

	return <ul>{listItems}</ul>;
}

function ShoppingList() {
	const products = [
		{ title: "Cabbage", isFruit: false, id: 1 },
		{ title: "Garlic", isFruit: false, id: 2 },
		{ title: "Apple", isFruit: true, id: 3 },
	];
	const listItems = products.map((product) => (
		<li
			key={product.id}
			style={{
				color: product.isFruit ? "magenta" : "darkgreen",
			}}
		>
			{product.title}
		</li>
	));

	return <ul>{listItems}</ul>;
}

function Counter() {
	const [count, setCount] = useState(0);  //the 0 parameter in useState() is the default value for num
  
	const increaseCount = () => {
	  setCount(count + 1); // Update state using setCount
	};
  
	return (
	  <div style={{ border: '1px solid black', }}>
		Count: {count}
		<button onClick={increaseCount}>Increase</button>
	  </div>
	);
}

function SharedCounter({count, onClick}) {
	return (
		<button onClick={onClick}>
		  Clicked {count} times
		</button>
	  );
}

function Disappearing() {
	const [show, setShow] = useState(true); //the true parameter in useState() is the default value for show

	function toggle() {
		setShow(!show);
	}

	return (
		<div style={{ border: '1px solid black', display: 'flex', margin: '10px', height: '50px' }}>
			<button onClick={toggle}>Toggle</button>
			{show && <p>Hi There</p>}
		</div>
	)
}

function IterateList() {
	const items = ['Sword', 'Potion', 'Armor', 'Bow']

	return (
		<ol  style={{ border: '1px solid black' }}>
			{items.map((element, index) => (
                <li key={index}>{element}</li>
            ))}
		</ol>
	)
}

export default function MyPage() {
	const [num, setNum] = useState(0);
  
	const increaseNum = () => {
	  setNum(num + 1); // Update state using setCount
	};
	return (
		<div>
			<h1 className="text-blue">Welcome to my app</h1>
			<Link to="/">Go Back</Link>
			<br />
			<MyButton />
			<Profile />
			<CondionalRendering />
			<RenderingList />
			<ShoppingList />
			<Counter />
			<Counter />
			<SharedCounter count={num} onClick={increaseNum} />
			<SharedCounter count={num} onClick={increaseNum} />
			<Disappearing/>
			<IterateList/>
			<Gallery />
			<div style={{ border: '3px solid blue', margin: '10px' }}>
				<Picture />
			</div>
		</div>
	);
}
