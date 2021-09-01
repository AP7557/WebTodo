import React, { useState, useRef } from "react";
import SearchIcon from "@material-ui/icons/Search";
import EditIcon from "@material-ui/icons/Edit";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

export default function Todos() {
	const [todos, setTodos] = useState(["todo"]);
	const addTodoRef = useRef(null);

	const onRemove = (todoToRemove) => {
		console.log(todoToRemove);
	};
	const onUpdate = (todoToUpdate) => {
		console.log(todoToUpdate);
	};
	const OnAdd = (todoToAdd) => {
		console.log(todoToAdd);
	};
	const OnSearch = (value) => {
		console.log(value);
	};
	return (
		<div>
			<h2>My To-Do List</h2>
			<div>
				<span>
					<SearchIcon />
				</span>
				<input
					placeholder="Search for Todos"
					onChange={(e) => OnSearch(e.target.value)}
				/>
				<button>New</button>
			</div>
			<table>
				<tbody>
					<tr>
						<td>Todo</td>
						<td>Edit</td>
						<td>Remove</td>
					</tr>
					<tr>
						<td>
							<input placeholder="Add Todo" ref={addTodoRef} />
						</td>
						<td>
							<button
								onClick={() => {
									OnAdd(addTodoRef.current.value);
								}}>Save</button>
						</td>
						{todos.map((todo, index) => (
							<tr key={index}>
								<td>
									<input id={todo} key={`todos:${todo}`} defaultValue={todo} />
								</td>
								<td>
									<EditIcon
										id="pointer"
										color="action"
										onClick={() => {
											document.getElementById(todo).focus();
										}}
									/>
								</td>
								<td>
									<RemoveCircleIcon
										id="pointer"
										color="error"
										onClick={() => onRemove(todo)}
									/>
								</td>
							</tr>
						))}
					</tr>
				</tbody>
			</table>
		</div>
	);
}
