import styled, { css } from "styled-components";

//LoginScreen Style

//Rapptr Labs Title
export const LoginTitle = styled.h2`
	text-align: center;
	margin-top: 50px;
`;
//Login button, if all the fields are not valid make button disabled and change the opacity
export const Login = styled.button`
	display: flex;
	color: #fff;
	background-color: #1976d2;
	box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
		0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
	padding: 10px 16px;
	border-radius: 4px;
	text-transform: uppercase;
	border: 0;
	cursor: pointer;
	justify-content: center;
	margin-top: 20px;
	${(props) =>
		props.isValid &&
		css`
			opacity: 0.5;
			pointer-events: none;
		`}
	&:hover {
		background-color: #004080;
	}
`;
//Logout button
export const Logout = styled.div`
	display: flex;
	justify-content: flex-end;
	button {
		background-color: rgb(221 16 16);
		color: #fff;
		box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
			0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
		padding: 10px 16px;
		border-radius: 4px;
		text-transform: uppercase;
		border: 0;
		cursor: pointer;
		&:hover {
			background-color: rgb(150, 0, 0);
		}
	}
`;
//For each field (label, icon, and Input)
export const InputContainer = styled.div`
	margin-top: 20px;
	position: relative;
	text-indent: 10px;
	span {
		position: absolute;
		top: 47%;
		left: -3%;
	}
`;
//If the field is not valid change the border to red
export const Input = styled.input`
  padding: 10px;
  padding-left: 30px;
  width: 100%;
  border-color: ${(props) => props.isValid && "red"};
  @media (max-width: 400px) {
    box-sizing: border-box;
  }
  &:focus {
    outline: none;
  }
`;
//All the error message
export const Error = styled.div`
	color: red;
	font-size: 12px;
`;
//The whole form
export const Form = styled.form`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 10%;
`;

/////////////////////////////////////////////////

//Todo list Style


//My To-Do list title
export const TodoTitle = styled.h2`
	text-align: center;
`;
//Search bar, span->Icon, input->text field, Button->add a todo
export const Search = styled.div`
	text-align: center;
	margin-bottom: 20px;
	position: relative;
	span {
		position: absolute;
		top: 4px;
		padding-left: 4px;
	}
	input {
		width: 70%;
		box-sizing: border-box;
		background-color: white;
		border-radius: 4px;
		border-style: solid;
		border-width: 1px;
		min-height: 30px;
		padding-left: 30px;
		margin-bottom: 10px;
	}
	Button {
		padding: 7px 50px;
		margin-left: 15px;
	}
`;
//Table header
export const Header = styled.tr`
	background-color: #000099;
	color: white;
	cursor: default;
`;
//Input field for adding a todo
export const AddInput = styled.input`
	width: 70%;
	box-sizing: border-box;
	background-color: white;
	border-radius: 4px;
	border-style: solid;
	border-width: 1px;
	min-height: 30px;
	padding-left: 10px;
`;
export const UpdateInput = styled.input`
	border: none;
	padding: 8px;
	text-align: center;
	background-color: inherit;
	font-size: 16px;
	width: 100px;
	&:focus {
    outline: ${(props) => props.readOnly && "none"};
  }
`;

//Whole table, td->each cell, tr->every even row
export const Table = styled.table`
	font-family: Arial, Helvetica, sans-serif;
	border-collapse: collapse;
	width: 100%;
	border: none;
	td {
		padding: 8px;
		text-align: center;
		padding: 5px;
		width: 100px;
		&:nth-child(2), &:nth-child(3){
			width: 10%;
		}
	}
	tr:nth-child(even) {
		background-color: #bde0ff;
		&:hover {
			background-color: #a4d4ff;
		}
	}
`;
//Custom button for save and adding a todo
export const Button = styled.button`
	color: #fff;
    background-color: #1976d2;
	box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
				0px 2px 2px 0px rgb(0 0 0 / 14%),
				0px 1px 5px 0px rgb(0 0 0 / 12%);
	padding: 6px 16px;
    border-radius: 4px;
    text-transform: uppercase;
    border: 0;
	cursor: pointer;
	&:hover{
		background-color: #004080;
	}
`