import React, { useState, useRef } from "react";
import SearchIcon from "@material-ui/icons/Search";
import EditIcon from "@material-ui/icons/Edit";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import {
	TodoTitle,
	Search,
	Header,
	Table,
	AddInput,
	Button,
	UpdateInput,
} from "./styles/Styles";

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
			<TodoTitle>My To-Do List</TodoTitle>
			<Search>
				<span>
					<SearchIcon />
				</span>
				<input
					placeholder="Search for Todos"
					onChange={(e) => OnSearch(e.target.value)}
				/>
				<button>New</button>
			</Search>
			<Table>
				<tbody>
					<Header>
						<td>Todo</td>
						<td>Edit</td>
						<td>Remove</td>
					</Header>
					<tr>
						<td>
							<AddInput placeholder="Add Todo" ref={addTodoRef} />
						</td>
						<td>
							<Button
								onClick={() => {
									OnAdd(addTodoRef.current.value);
								}}>
								Save
							</Button>
						</td>
					</tr>
					{todos.map((todo, index) => (
						<tr key={index}>
							<td>
								<UpdateInput
									id={todo}
									key={`todos:${todo}`}
									defaultValue={todo}
								/>
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
				</tbody>
			</Table>
		</div>
	);
}
