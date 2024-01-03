// tick box - Keep me signed in
// link - Terms & Conditions
// link - Privacy Policy
// password input with "show" button to switch unseen

import "./CreateAcc.css";
import { useNavigate } from "react-router-dom";

function CreateAcc() {
	const navigate = useNavigate();
	const handleOnClickSignIn = () => {
		navigate("/login/signin");
	};
	return (
		<>
			<div className="CreateAccInput">
				<span>Create your J.A.C.K account</span>
				<input
					className="EmailInput"
					type="text"
					placeholder="Email address"
				/>
				<input
					className="FirstNameInput"
					type="text"
					placeholder="First name"
				/>
				<input
					className="LastNameInput"
					type="text"
					placeholder="Last name"
				/>
				<input
					className="PhoneNumInput"
					type="text"
					placeholder="Mobile phone number (optional)"
				/>
				<input
					className="PasswordInput"
					type="text"
					placeholder="Create password"
				/>
				<button className="ConfirmCreateBtn">Create account</button>
				<button className="SignInBtn" onClick={handleOnClickSignIn}>
					Or sign in
				</button>
			</div>
		</>
	);
}

export default CreateAcc;
