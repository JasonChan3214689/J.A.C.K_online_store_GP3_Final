// tick box - Keep me signed in
// link - Terms & Conditions
// link - Privacy Policy
// password input with "show" button to switch unseen

import "./SignIn.css";
import { useNavigate } from "react-router-dom";

function SignIn() {
	const navigate = useNavigate();
	const handleOnClickCreateAcc = () => {
		navigate("/login/create-account");
	};
	return (
		<>
			<div className="SignInInput">
				<span>Sign into your J.A.C.K account</span>
				<input
					className="AccIDInput"
					type="text"
					placeholder="Email or Mobile number"
				/>
				<input
					className="AccPWInput"
					type="text"
					placeholder="Password"
				/>
				<button className="ConfirmSignInBtn">Sign in</button>
				<span className="CreateAccBtn" onClick={handleOnClickCreateAcc}>
					Forgot password?
				</span>
				<button
					className="CreateAccBtn"
					onClick={handleOnClickCreateAcc}
				>
					Create your J.A.C.K account
				</button>
			</div>
		</>
	);
}

export default SignIn;
