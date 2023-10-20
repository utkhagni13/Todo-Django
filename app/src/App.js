import React, { useEffect, useState } from "react";
import { fetchData, addData } from "./requests/requests";
import "./App.css";

const App = () => {
	const [list, setList] = useState([]);
	const [todo, setTodo] = useState("");

	useEffect(() => {
		// fetch todo data
		const getData = async () => {
			const res = await fetchData();
			console.log("get_todo_data_res:", res);
			if (res.data) {
				setList(res.data);
			}
		};
		getData();
	}, []);

	const handleChange = (e) => {
		setTodo(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (todo.length === 0) {
			alert("Field Empty!!");
			return;
		}
		const addToDoData = async () => {
			const res = await addData(todo);
			console.log(res);
			if (res.data) {
				// let updatedList = [...list, res.data];
				// setList(updatedList);
				window.location.reload();
			} else {
				alert(res.error);
			}
		};
		addToDoData();
	};

	return (
		<div className="App">
			<div>
				<h1>List of TODOs</h1>
				{list.map((item) => (
					<div key={item._id}>
						<li>{item.title}</li>
					</div>
				))}
			</div>
			<div>
				<h1>Create a ToDo</h1>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="todo">ToDo: </label>
						<input type="text" onChange={(e) => handleChange(e)} />
					</div>
					<div style={{ marginTop: "5px" }}>
						<button type="submit">Add ToDo!</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default App;
