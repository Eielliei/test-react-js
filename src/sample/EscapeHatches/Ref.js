import { useRef } from "react";
import { Spacer } from "../SampleLayout";

function ValueRef() {
	let ref = useRef(0); // same with useState however it doesn't render the browser

	function handleClick() {
		ref.current = ref.current + 1;
		alert("You clicked " + ref.current + " times!");
	}

	return (
		<Spacer>
			<button onClick={handleClick}>Click me!</button>
		</Spacer>
	);
}

function DOMRef() {
	const inputRef = useRef(null);

	function handleClick() {
		inputRef.current.focus();
	}

	return (
		<Spacer>
			<input ref={inputRef} />
			<button onClick={handleClick}>Focus the input</button>
		</Spacer>
	);
}

export default function Ref() {
	return (
		<div style={{ border: "1px solid black", padding: "5px", marging: '5px' }}>
			<h3>Using ref</h3>

			<ValueRef />
			<DOMRef />
		</div>
	);
}
