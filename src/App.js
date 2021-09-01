import React, { useState } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import "./styles/App.css";
import Todos from "./Todos";

function App() {
	return (
		<div>
			<form>
				<div>
					<label>Email:</label>
					<br />
					<span>
						<AccountCircle />
					</span>
					<input type="email" name="email" placeholder="user@rapptrlabs.com" />
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
			<Todos />
		</div>
	);
}

export default App;
