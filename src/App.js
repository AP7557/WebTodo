import React, { useState } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import "./styles/App.css";
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
				<Todos email={user.email} />
			) : (
				<>
					<h2>Rapptr Labs</h2>
					<form>
						<div>
							<label>Email:</label>
							<br />
							<span>
								<AccountCircle />
							</span>
							<input
								type="email"
								name="email"
								placeholder="user@rapptrlabs.com"
							/>
						</div>
						<div>
							<label>Password:</label>
							<br />
							<span>
								<LockIcon />
							</span>
							<input
								type="password"
								name="password"
								placeholder="Must be at least 4 characters"
							/>
						</div>
						<button type="submit">Login</button>
					</form>
				</>
			)}
		</div>
	);
}

export default App;
