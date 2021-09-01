import React, { useState } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import "./styles/App.css";
import {
	LoginTitle,
	Form,
	InputContainer,
	Input,
	Error,
	Login,
	Logout,
} from "./styles/Styles";
import Todos from "./Todos";

function App() {
	//For call the api with an object
	var form_data = new FormData();
	//Store the user's email and password
	const [user, setUser] = useState({ email: "", password: "" });
	//Is the user active or not
	const [isUserActive, setIsUserActive] = useState(false);
	//Is the user's email and/or password valid
	const [isUserValid, setIsUserValid] = useState({
		email: true,
		password: true,
	});
	//Check if the login button is already been clicked
	const [clickedLogin, setClickedLogin] = useState(false);
	//Is the server down, or unrecognized user
	const [serverError, setServerError] = useState({ status: 0, mssg: "" });
	//Email regex
	const emailRegex = /[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{3}/;
	//On email input type
	const handleEmailChange = (e) => {
		//Check if user input email satisfies email regex
		if (emailRegex.test(e.target.value) === false) {
			setIsUserValid((prevState) => {
				return { ...prevState, email: false };
			});
		} else {
			setIsUserValid((prevState) => {
				return { ...prevState, email: true };
			});
			setUser((prevState) => {
				return { ...prevState, email: e.target.value };
			});
		}
		//On user change reset the login button and server error
		setServerError({ status: 0, mssg: "" });
		setClickedLogin(false);
	};
	//On every password input change
	const handlePasswordChange = (e) => {
		//Check if user input password satisfies the length
		if (e.target.value.length < 4 || e.target.value.length > 16) {
			setIsUserValid((prevState) => {
				return { ...prevState, password: false };
			});
		} else {
			setIsUserValid((prevState) => {
				return { ...prevState, password: true };
			});
			setUser((prevState) => {
				return { ...prevState, password: e.target.value };
			});
		}
		//On user change reset the login button and server error
		setServerError({ status: 0, mssg: "" });
		setClickedLogin(false);
	};
	//On login button click
	const onLogin = (e) => {
		e.preventDefault();
		//Set the login button to disable
		setClickedLogin(true);
		//Put the useState object in form_data
		for (var key in user) {
			form_data.append(key, user[key]);
		}
		var requestOptions = {
			method: "POST",
			body: form_data,
		};
		//Log in the user, if everything run ok
		fetch(
			`http://dev.rapptrlabs.com/Tests/scripts/user-login.php`,
			requestOptions
		)
			.then((response) => {
				if (!response.ok) {
					throw response;
				}
				return response.json();
			})
			.then((res) => {
				setIsUserActive(res.user_is_active);
			})
			.catch((e) => {
				//If the error is server error tell it to the user
				if (e.status >= 400) {
					setServerError({
						status: 400,
						mssg: "Invalid Email and/or Password",
					});
				}
				if (e.status >= 500) {
					setServerError({
						status: 500,
						mssg: "Server could not be reached. Please try again later",
					});
				}
			});
	};
	//On logout button click, reset all the fields, and login button
	const onLogout = () => {
		setUser({ email: "", password: "" });
		setIsUserActive(0);
		setClickedLogin(false);
	};

	return (
		<div>
			{isUserActive ? (
				<div>
					<Logout>
						<button onClick={onLogout}>Logout</button>
					</Logout>
					<Todos email={user.email} />
				</div>
			) : (
				<div>
					<LoginTitle>Rapptr Labs</LoginTitle>
					<Form onSubmit={onLogin}>
						<InputContainer>
							<label>Email:</label>
							<br />
							<span>
								<AccountCircle />
							</span>
							<Input
								type="email"
								name="email"
								placeholder="user@rapptrlabs.com"
								onChange={handleEmailChange}
								maxLength="50"
								isValid={!isUserValid.email}
								defaultValue={user.email}
							/>
						</InputContainer>
						{!isUserValid.email && <Error>Not a valid Email</Error>}
						<InputContainer>
							<label>Password:</label>
							<br />
							<span>
								<LockIcon />
							</span>
							<Input
								type="password"
								name="password"
								placeholder="Must be at least 4 characters"
								onChange={handlePasswordChange}
								isValid={!isUserValid.password}
								defaultValue={user.password}
							/>
						</InputContainer>
						{!isUserValid.password && <Error>Not a valid Password</Error>}
						<Login
							type="submit"
							isValid={
								!isUserValid.email || !isUserValid.password || clickedLogin
							}>
							Login
						</Login>
						{serverError.status === 400 && <Error>{serverError.mssg}</Error>}
						{serverError === 500 && <Error>{serverError.mssg}</Error>}
					</Form>
				</div>
			)}
		</div>
	);
}

export default App;
