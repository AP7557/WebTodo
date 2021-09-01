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
	const [focusAddTodo, setFocusAddTodo] = useState(false);
	const [whichTodoToFocus, setWhichTodoToFocus] = useState("");
	const addTodoRef = useRef(null);

	const onRemove = (todoToRemove) => {
		let todoCopy = [...todos];
		todoCopy = todoCopy.filter((tc) => tc !== todoToRemove);
		setTodos(todoCopy);
	};
	const onUpdate = (todoToUpdate, index) => {
		let todoCopy = [...todos];
		let updatedTodo = document.getElementById(todoToUpdate).value;
		if (updatedTodo.length >= 1 && updatedTodo.length <= 25) {
			todoCopy[index] = updatedTodo;
		}
		setTodos(todoCopy);
	};
	const onAdd = (todoToAdd) => {
		let todoCopy = [...todos];
		if (todoToAdd.length >= 1) {
			todoCopy.unshift(todoToAdd);
			setTodos(todoCopy);
		}
	};
	const onSearch = (value) => {
		let todoCopy = todos.filter((tc) =>
			tc.toLowerCase().includes(value.toLowerCase())
		);
		setTodos(todoCopy);
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
