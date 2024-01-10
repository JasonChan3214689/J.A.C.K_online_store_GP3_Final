import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAcc.css";

function CreateAcc() {
  const [createFirstInput, setCreateFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");

  const [firstDisplayText, setFirstDisplayText] = useState("");
  const [secondDisplayText, setSecondDisplayText] = useState("");
  const [thirdDisplayText, setThirdDisplayText] = useState("");
  const [emailDisplayText, setEmailDisplayText] = useState("");

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [stopLoading, setStopLoading] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const handleOnClickLogin = () => {
    navigate("/login/signin");
  };

  const handleFirstInputChange = (event) => {
    setCreateFirstInput(event.target.value);
  };

  const handleEmailInputChange = (event) => {
    setEmailInput(event.target.value);
  };

  const handleSecondInputChange = (event) => {
    setSecondInput(event.target.value);
  };

  const handleThirdInputChange = (event) => {
    setThirdInput(event.target.value);
  };

  const handleButtonClick = () => {
    if (
      createFirstInput !== "" &&
      emailInput !== "" &&
      secondInput !== "" &&
      thirdInput !== "" &&
      thirdInput === secondInput
    ) {
      // navigate("/create-account-success") or load create account sucess message
      setIsLoading(true);
      // fake loading
      /*       setTimeout(() => {
        if (isLoading && !stopLoading) {
          setIsLoading(false);
          navigate("/");
        }
      }, 12000); */
    } else {
      if (createFirstInput === "") {
        setFirstDisplayText("your username is missing!");
      } else {
        setFirstDisplayText("");
      }

      if (emailInput === "") {
        setEmailDisplayText("your email is missing!");
      } else {
        setEmailDisplayText("");
      }

      if (secondInput === "") {
        setSecondDisplayText("your password is missing!");
      } else {
        setSecondDisplayText("");
      }

      if (thirdInput !== secondInput) {
        setThirdDisplayText("password do not match!");
      } else {
        setThirdDisplayText("");
      }
    }
  };

  const handleStopLoadingClick = () => {
    setStopLoading(true);
    setIsLoading(false);
    navigate("/login/signin");
  };

  const handleInputKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleButtonClick();
    }
  };

  const welcomeMessage = `Hi ${createFirstInput} !`;

  return (
    <d className="CreateAccInput">
      {isLoading ? (
        <div className="CreateAccInput">
          <h1>{welcomeMessage}</h1>
          <p>
            We have sent you a confirmation email, check your mailbox and verify
            your account.
          </p>
          <p>
            {
              "(once your verification is done, the browser will auto redirect to login page, if it takes too long to response, please press "
            }
            <span
              className="stopLoadingButton"
              onClick={handleStopLoadingClick}
            >
              here
            </span>
            {".)"}
          </p>
          <h2 id="boldH2">happy shopping!</h2>
        </div>
      ) : (
        <>
          <h1>Create Your J.A.C.K Account</h1>
          <input
            className="createInput"
            type="text"
            placeholder="Username"
            value={createFirstInput}
            onChange={handleFirstInputChange}
            onKeyDown={handleInputKeyDown}
          />
          <p className="wrongMessage">{firstDisplayText}</p>
          <input
            className="createInput"
            type="text"
            placeholder="Email"
            value={emailInput}
            onChange={handleEmailInputChange}
            onKeyDown={handleInputKeyDown}
          />
          <p className="wrongMessage">{emailDisplayText}</p>
          <input
            className="createInput"
            type="password"
            placeholder="Password"
            value={secondInput}
            onChange={handleSecondInputChange}
            onKeyDown={handleInputKeyDown}
          />
          <p className="wrongMessage">{secondDisplayText}</p>
          <input
            className="createInput"
            type="password"
            placeholder="Confirm Password"
            value={thirdInput}
            onChange={handleThirdInputChange}
            onKeyDown={handleInputKeyDown}
          />
          <p className="wrongMessage">{thirdDisplayText}</p>
          <button
            className="activateButton"
            onClick={handleButtonClick}
            disabled={isLoading}
          >
            <span>Create My Account</span>
          </button>
          <button className="activateButton" onClick={handleOnClickLogin}>
            Or Login
          </button>{" "}
        </>
      )}
    </d>
  );
}

export default CreateAcc;

// // Optimization:
// // tick box - Keep me signed in
// // link - Terms & Conditions
// // link - Privacy Policy
// // password input with "show" button to switch unseen

// import "./CreateAcc.css";
// import { useNavigate } from "react-router-dom";

// function CreateAcc() {
// 	const navigate = useNavigate();
// 	const handleOnClickSignIn = () => {
// 		navigate("/login/signin");
// 	};
// 	return (
// 		<>
// 			<div className="CreateAccInput">
// 				<h1>Create your J.A.C.K account</h1>
// 				<input
// 					className="Input EmailInput"
// 					type="text"
// 					placeholder="Email address"
// 				/>
// 				<input
// 					className="Input FirstNameInput"
// 					type="text"
// 					placeholder="First name"
// 				/>
// 				<input
// 					className="Input LastNameInput"
// 					type="text"
// 					placeholder="Last name"
// 				/>
// 				<input
// 					className="Input PhoneNumInput"
// 					type="text"
// 					placeholder="Mobile phone number (optional)"
// 				/>
// 				<input
// 					className="Input PasswordInput"
// 					type="password"
// 					placeholder="Create password"
// 				/>
// 				<button className="ConfirmCreateBtn">Create account</button>
// 				<button className="SignInBtn" onClick={handleOnClickSignIn}>
// 					Or sign in
// 				</button>
// 			</div>
// 		</>
// 	);
// }

// export default CreateAcc;
