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
	const [user, setUser] = useState({ email: "", password: "" });
	const [isUserActive, setIsUserActive] = useState(false);
	const handleEmailChange = (e) => {
		setUser((prevState) => {
			return { ...prevState, email: e.target.value };
		});
	};
	//On every password input change
	const handlePasswordChange = (e) => {
		setUser((prevState) => {
			return { ...prevState, password: e.target.value };
		});
	};
	const onLogin = (e) => {
		e.preventDefault();
		setIsUserActive(true);
	};
	const onLogout = () => {
		setUser({ email: "", password: "" });
		setIsUserActive(false);
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
								onChange={handleEmailChange}
								placeholder="user@rapptrlabs.com"
							/>
						</InputContainer>
						<InputContainer>
							<label>Password:</label>
							<br />
							<span>
								<LockIcon />
							</span>
							<Input
								type="password"
								name="password"
								onChange={handlePasswordChange}
								placeholder="Must be at least 4 characters"
							/>
						</InputContainer>
						<Login type="submit">Login</Login>
					</Form>
				</div>
			)}
		</div>
	);
}

export default App;
