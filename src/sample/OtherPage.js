import React from "react";
import "./other.css";

function getImageUrl(person, size = "s") {
	return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

function Avatar({ person, size }) {
	return (
		<img
			className="avatar"
			src={getImageUrl(person)}
			alt={person.name}
			width={size}
			height={size}
		/>
	);
}

function Card({ children }) {
	return <div className="card">{children}</div>;
}

function Profile() {
	return (
		<Card>
			<Avatar
				size={100}
				person={{
					name: "Katsuko Saruhashi",
					imageId: "YfeOqp2",
				}}
			/>
		</Card>
	);
}

function ChildComponent({ text, color }) {
	return <p style={{ backgroundColor: color }}>{text}</p>;
}

function ParentComponent(props) {
	return (
		<div>
			<ChildComponent {...props} />
		</div>
	);
}

const recipes = [
	{
		id: "greek-salad",
		name: "Greek Salad",
		ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
	},
	{
		id: "hawaiian-pizza",
		name: "Hawaiian Pizza",
		ingredients: [
			"pizza crust",
			"pizza sauce",
			"mozzarella",
			"ham",
			"pineapple",
		],
	},
	{
		id: "hummus",
		name: "Hummus",
		ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
	},
];

function Recipe({ id, name, ingredients }) {
	return (
		<li key={id}>
			<h2>{name}</h2>
			<ul>
				{ingredients.map((element, index) => (
					<li key={index}>{element}</li>
				))}
			</ul>
		</li>
	);
}

function RecipeList() {
	return (
		<div style={{ margin: '5px', border: '1px solid black' }}>
			<h1>Recipes</h1>
			<ul>
				{recipes.map((recipe) => (
					<Recipe
						key={recipe.id}
						id={recipe.id}
						name={recipe.name}
						ingredients={recipe.ingredients}
					/>
				))}
			</ul>
		</div>
	);
}

const poem = {
	lines: [
		"I write, erase, rewrite",
		"Erase again, and then",
		"A poppy blooms.",
	],
};

function Poem() {
	return (
		<article
			style={{ border: "5px solid black", margin: "5px", padding: "5px" }}
		>
			{poem.lines.map((line, index) => (
				<React.Fragment key={index}>
					<p>{line}</p>
					{poem.lines.length !== index + 1 && <hr />}
				</React.Fragment>
			))}
		</article>
	);
}

export default function OtherPage() {
	return (
		<>
			<h1>lorem ipsum</h1>
			<Profile />
			<ParentComponent text="Sample" color="blue" />
			<RecipeList />
			<Poem />
		</>
	);
}
