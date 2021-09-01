import React, { useEffect, useState, useRef } from "react";
import EditIcon from "@material-ui/icons/Edit";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import SearchIcon from "@material-ui/icons/Search";
import {
	TodoTitle,
	Search,
	Header,
	Table,
	AddInput,
	Button,
	UpdateInput,
} from "./styles/Styles";

export default function Todo({ email }) {
	//
	const [todos, setTodos] = useState([]);
	const [focusAddTodo, setFocusAddTodo] = useState(false);
	const [whichTodoToFocus, setWhichTodoToFocus] = useState("");
	const addTodoRef = useRef(null);

	//Remove a todo, update the state, and the storage
	const onRemove = (todoToRemove) => {
		let todoCopy = JSON.parse(localStorage.getItem(email));
		todoCopy = todoCopy.filter((tc) => tc !== todoToRemove);
		localStorage.setItem(email, JSON.stringify(todoCopy));
		setTodos(todoCopy);
	};
	//Update a todo, the state, and the storage
	const onUpdate = (todoToUpdate, index) => {
		let todoCopy = JSON.parse(localStorage.getItem(email));
		let updatedTodo = document.getElementById(todoToUpdate).value;
		if (updatedTodo.length >= 1 && updatedTodo.length <= 25) {
			todoCopy[index] = updatedTodo;
		}
		localStorage.setItem(email, JSON.stringify(todoCopy));
		setTodos(todoCopy);
	};
	//Add the todo and update the state, and the storage
	const onAdd = (todoToAdd) => {
		let todoCopy = JSON.parse(localStorage.getItem(email));
		if (!todoCopy) {
			todoCopy = [];
		}
		if (todoToAdd.length >= 1) {
			todoCopy.unshift(todoToAdd);
			localStorage.setItem(email, JSON.stringify(todoCopy));
			setTodos(todoCopy);
		}
	};
	//Filter out all the todo based on user input
	const onSearch = (value) => {
		let defaultTodo = JSON.parse(localStorage.getItem(email));
		let todoCopy = defaultTodo.filter((tc) =>
			tc.toLowerCase().includes(value.toLowerCase())
		);
		setTodos(todoCopy);
	};

	useEffect(() => {
		//Only set the todos if there are entries in local storage
		if (JSON.parse(localStorage.getItem(email))) {
			setTodos(JSON.parse(localStorage.getItem(email)));
		}
	}, [email]);

	return (
		<div>
			<TodoTitle>My To-Do List</TodoTitle>
			<Search>
				<span>
					<SearchIcon />
				</span>
				<input
					placeholder="Search for Todos"
					onChange={(e) => onSearch(e.target.value)}
				/>
				<Button
					onClick={() => {
						setFocusAddTodo(true);
					}}>
					New
				</Button>
			</Search>
			<Table>
				<tbody>
					<Header>
						<td>Todo</td>
						<td>Edit</td>
						<td>Remove</td>
					</Header>
					{focusAddTodo && (
						<tr>
							<td>
								<AddInput
									placeholder="Add Todo"
									maxLength="25"
									ref={addTodoRef}
								/>
							</td>
							<td>
								<Button
									onClick={() => {
										onAdd(addTodoRef.current.value);
										addTodoRef.current.value = "";
										setFocusAddTodo(false);
									}}>
									Save
								</Button>
							</td>
							<td></td>
						</tr>
					)}
					{todos.map((todo, index) => (
						<tr key={index}>
							<td>
								<UpdateInput id={todo} key={`todos:${todo}`} defaultValue={todo} maxLength="25" readOnly={todo !== whichTodoToFocus}/>
							</td>
							{whichTodoToFocus === todo ? (
								<td>
									<Button
										onClick={() => {
											setWhichTodoToFocus("");
											onUpdate(todo, index);
										}}>
										Save
									</Button>
								</td>
							) : (
								<>
									<td>
										<EditIcon
											id="pointer"
											color="action"
											onClick={() => {
												document.getElementById(todo).focus();
												setWhichTodoToFocus(todo);
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
								</>
							)}
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
}
