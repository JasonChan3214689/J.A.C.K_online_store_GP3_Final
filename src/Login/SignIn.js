import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAcc.css";

function SignIn({ firstInput, setFirstInput, setIsLogin }) {
  const [secondInput, setSecondInput] = useState("");

  const [firstDisplayText, setFirstDisplayText] = useState("");
  const [secondDisplayText, setSecondDisplayText] = useState("");

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [stopLoading, setStopLoading] = useState(false);

  const handleOnClickLogin = () => {
    navigate("/login/create-account");
  };

  const handleFirstInputChange = (event) => {
    setFirstInput(event.target.value);
  };

  const handleSecondInputChange = (event) => {
    setSecondInput(event.target.value);
  };

  const handleButtonClick = () => {
    if (firstInput !== "" && secondInput !== "") {
      // load login success message
      setIsLoading(true);
      // fake loading
      setTimeout(() => {
        if (!stopLoading) {
          setIsLoading(false);
          setIsLogin(true);
          navigate("/");
        }
      }, 2000);
    } else {
      if (firstInput === "") {
        setFirstDisplayText("your username is missing!");
      } else {
        setFirstDisplayText("");
      }

      if (secondInput === "") {
        setSecondDisplayText("your password is missing!");
      } else {
        setSecondDisplayText("");
      }
    }
  };

  const handleInputKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleButtonClick();
    }
  };

  const welcomeMessage = `Hi ${firstInput} ,`;

  return (
    <div className="CreateAccInput">
      {isLoading ? (
        <div className="CreateAccInput">
          <h1>{welcomeMessage}</h1>
          <h1>Welcome Back!</h1>
          <h2 id="boldH2">happy shopping!</h2>
        </div>
      ) : (
        <>
          <h1>Login To J.A.C.K</h1>
          <input
            className="createInput"
            type="text"
            placeholder="Username"
            value={firstInput}
            onChange={handleFirstInputChange}
            onKeyDown={handleInputKeyDown}
          />
          <p className="wrongMessage">{firstDisplayText}</p>
          <input
            className="createInput"
            type="password"
            placeholder="Password"
            value={secondInput}
            onChange={handleSecondInputChange}
            onKeyDown={handleInputKeyDown}
          />
          <p className="wrongMessage">{secondDisplayText}</p>
          <button className="activateButton" onClick={handleButtonClick}>
            <span>Login</span>
          </button>
          <button className="activateButton" onClick={handleOnClickLogin}>
            Create Your J.A.C.K Account
          </button>
        </>
      )}
    </div>
  );
}

export default SignIn;

// // tick box - Keep me signed in
// // link - Terms & Conditions
// // link - Privacy Policy
// // password input with "show" button to switch unseen

// import "./SignIn.css";
// import { useNavigate } from "react-router-dom";

// function SignIn() {
// 	const navigate = useNavigate();
// 	const handleOnClickCreateAcc = () => {
// 		navigate("/login/create-account");
// 	};
// 	return (
// 		<>
// 			<div className="SignInInput">
// 				<h1>Sign into your J.A.C.K account</h1>
// 				<input
// 					className="AccIDInput"
// 					type="text"
// 					placeholder="Email or Mobile number"
// 				/>
// 				<input
// 					className="AccPWInput"
// 					type="text"
// 					placeholder="Password"
// 				/>
// 				<button className="ConfirmSignInBtn">Sign in</button>
// 				<span className="CreateAccBtn" onClick={handleOnClickCreateAcc}>
// 					Forgot password?
// 				</span>
// 				<button
// 					className="CreateAccBtn"
// 					onClick={handleOnClickCreateAcc}
// 				>
// 					Create your J.A.C.K account
// 				</button>
// 			</div>
// 		</>
// 	);
// }

// export default SignIn;
