import React, { ChangeEvent, useCallback } from "react";
import { Input, Button, Label, HelperText } from "@windmill/react-ui";
import validate from "validate.js";
import { SpinnerCircular } from "spinners-react";
import { useTranslations } from "next-intl";

const validationConstraints = {
  email: {
    email: true,
  },
};

type SignupState = "none" | "loading" | "successful" | "failed";

const EmailSubscribe = () => {
  const [emailIsValid, setEmailIsValid] = React.useState(true);
  const [emailEntered, setEmailEntered] = React.useState(false);
  const [emailInput, setEmailInput] = React.useState("");
  const [signupState, setSignupState] = React.useState<SignupState>("none");

  const t = useTranslations("EmailSubscribe");

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
    setSignupState("loading");
    fetch("/api/subscribe", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => {
        setSignupState(response.status === 200 ? "successful" : "failed");
        return response.json();
      })
      .then((result) => console.log(result));
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full p-4 pb-12 bg-map-blue">
      <h2 className="text-3xl font-title-sans text-white">{t("sign-up")}</h2>
      <div className="flex items-start w-full lg:max-w-2xl px-8 sm:px-24">
        <Label className="w-full mr-4">
          <Input
            className="text-2xl"
            valid={emailIsValid}
            onChange={(e) => validateEmailAddress(e)}
            disabled={signupState === "successful"}
            aria-label={t("enter-your-email") as string}
            placeholder={t("enter-your-email") as string}
            css=""
          />
          {!emailIsValid && (
            <HelperText valid={false}>{t("invalid-email-message")}</HelperText>
          )}
          {signupState === "successful" && (
            <HelperText valid={true}>{t("thanks-for-signing-up")}</HelperText>
          )}
          {signupState === "failed" && (
            <HelperText valid={false}>{t("error-message")}</HelperText>
          )}
        </Label>
        <Button
          className="h-12 text-2xl"
          iconLeft={signupState === "loading" && Spinner}
          disabled={!emailEntered || !emailIsValid}
          onClick={() => sendSubscribe()}
        >
          {t("send-button")}
        </Button>
      </div>
    </div>
  );
};

const Spinner = () => (
  <SpinnerCircular className="mr-2" size="30px" color="#82A775" />
);

export default EmailSubscribe;
