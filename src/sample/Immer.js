import { useImmer } from "use-immer";
import { Spacer } from "./SampleLayout";
import { useState } from "react";
import produce from "immer";

function Form() {
	const [person, updatePerson] = useImmer({
		name: "Niki de Saint Phalle",
		artwork: {
			title: "Blue Nana",
			city: "Hamburg",
			image: "https://i.imgur.com/Sd1AgUOm.jpg",
		},
	});

	function handleNameChange(e) {
		updatePerson((draft) => {
			draft.name = e.target.value;
		});
	}

	function handleTitleChange(e) {
		updatePerson((draft) => {
			draft.artwork.title = e.target.value;
		});
	}

	function handleCityChange(e) {
		updatePerson((draft) => {
			draft.artwork.city = e.target.value;
		});
	}

	function handleImageChange(e) {
		updatePerson((draft) => {
			draft.artwork.image = e.target.value;
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

function AddTodo({ onAddTodo }) {
	const [title, setTitle] = useState("");
	return (
		<>
			<input
				placeholder="Add todo"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<button
				onClick={() => {
					setTitle("");
					onAddTodo(title);
				}}
			>
				Add
			</button>
		</>
	);
}

function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
	return (
		<ul>
			{todos.map((todo) => (
				<li key={todo.id} id={todo.id}>
					<Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
				</li>
			))}
		</ul>
	);
}

function Task({ todo, onChange, onDelete }) {
	const [isEditing, setIsEditing] = useState(false);
	let todoContent;
	if (isEditing) {
		todoContent = (
			<>
				<input
					value={todo.title}
					onChange={(e) => {
						onChange({
							...todo,
							title: e.target.value,
						});
					}}
				/>
				<button onClick={() => setIsEditing(false)}>Save</button>
			</>
		);
	} else {
		todoContent = (
			<>
				{todo.title}
				<button onClick={() => setIsEditing(true)}>Edit</button>
			</>
		);
	}
	return (
		<label>
			<input
				type="checkbox"
				checked={todo.done}
				onChange={(e) => {
					onChange({
						...todo,
						done: e.target.checked,
					});
				}}
			/>
			{todoContent}
			<button onClick={() => onDelete(todo.id)}>Delete</button>
		</label>
	);
}

function TaskApp() {
	const initialTodos = [
		{ id: 0, title: "Buy milk", done: true },
		{ id: 1, title: "Eat tacos", done: false },
		{ id: 2, title: "Brew tea", done: false },
	];

	const [todos, setTodos] = useImmer(initialTodos);
	const [nextId, setNextId] = useState(3);

	function handleAddTodo(title) {
		setTodos((todos) =>
			produce(todos, (draft) => {
				draft.push({
					id: nextId,
					title: title,
					done: false,
				});
			})
		);
		setNextId(nextId + 1);
	}

	function handleChangeTodo(nextTodo) {
		setTodos(todos.map(td => {
		    if (td.id === nextTodo.id) {
		        return {
		            ...td,
		            title: nextTodo.title,
		            done: nextTodo.done
		        }
		    } else {
		        return td
		    }
		}));
	}

	function handleDeleteTodo(todoId) {
		setTodos((todo) =>
			produce(todo, (draft) => {
				draft.splice(todoId, 1);
			})
		); // Remove one element at the specified index);
	}

	return (
		<Spacer>
			<AddTodo onAddTodo={handleAddTodo} />
			<TaskList
				todos={todos}
				onChangeTodo={handleChangeTodo}
				onDeleteTodo={handleDeleteTodo}
			/>
		</Spacer>
	);
}

export default function Immer() {
	return (
		<div style={{ padding: "10px" }}>
			<Form />
			<TaskApp />
		</div>
	);
}
