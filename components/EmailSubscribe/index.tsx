import React, { ChangeEvent, useCallback } from "react";
import { Input, Button, Label, HelperText } from "@windmill/react-ui";
import validate from "validate.js";

const validationConstraints = {
  email: {
    email: true,
  },
};

const EmailSubscribe = () => {
  const [emailIsValid, setEmailIsValid] = React.useState(true);
  const [emailEntered, setEmailEntered] = React.useState(false);
  const [emailInput, setEmailInput] = React.useState("");
  const [signupSuccessful, setSignupSuccessful] = React.useState<
    boolean | undefined
  >();

  const validateEmailAddress = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (!input) {
      setEmailEntered(false);
      return;
    }
    setEmailEntered(true);
    const validationError = validate({ email: input }, validationConstraints);
    if (validationError) {
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
      setEmailInput(input);
    }
  };

  const sendSubscribe = () => {
    const email = emailInput;
    setEmailInput("");
    setEmailEntered(false);
    fetch("/api/subscribe", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => {
        setSignupSuccessful(response.status === 200);
        return response.json();
      })
      .then((result) => console.log(result));
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full p-4 pb-12 bg-veg-green">
      <h2 className="text-3xl font-title-sans text-white">
        Sign up for updates!
      </h2>
      <div className="flex">
        <Label className="mr-4">
          <Input
            type="email"
            valid={emailIsValid}
            onChange={(e) => validateEmailAddress(e)}
            aria-label="enter your email address"
            placeholder="Enter your email address"
            css="" // this is somehow needed
          />
          {!emailIsValid && (
            <HelperText valid={false}>
              Please provide a valid email address
            </HelperText>
          )}
          {signupSuccessful && (
            <HelperText valid={true}>
              Thanks for signing up! We will send you more information soon!
            </HelperText>
          )}
          {signupSuccessful === false && (
            <HelperText valid={false}>
              Unfortunately there was an error
            </HelperText>
          )}
        </Label>
        <Button
          disabled={!emailEntered || !emailIsValid}
          onClick={() => sendSubscribe()}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default EmailSubscribe;
