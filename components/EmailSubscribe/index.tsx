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
  const [emailIsValid, setEmailIsValid] = React.useState(false);
  const [formIsDirty, setFormIsDirty] = React.useState(false);
  const [emailInput, setEmailInput] = React.useState("");
  const [nameInput, setNameInput] = React.useState("");
  const [signupState, setSignupState] = React.useState<SignupState>("none");

  const t = useTranslations("EmailSubscribe");

  const validateEmailAddress = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (!input) {
      setFormIsDirty(false);
      return;
    }
    setFormIsDirty(true);
    const validationError = validate({ email: input }, validationConstraints);
    if (validationError) {
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
      setEmailInput(input);
    }
  };

  const updateName = (input: string) => {
    setNameInput(input);
    if (input.length > 0) {
      setFormIsDirty(true);
    }
  };

  const nameIsValid = nameInput.length > 0;

  const formIsValid = formIsDirty && nameIsValid && emailIsValid;

  const sendSubscribe = () => {
    const email = emailInput;
    const name = nameInput;

    setSignupState("loading");
    fetch("/api/subscribe", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, name: name }),
    })
      .then((response) => {
        setSignupState(response.status === 200 ? "successful" : "failed");
        return response.json();
      })
      .then((result) => console.log(result));
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full min-h-20 p-4 pb-12 bg-map-blue">
      <h2 className="text-3xl font-title-sans text-white">{t("sign-up")}</h2>
      <div className="flex items-start w-full lg:max-w-4xl px-1 sm:px-8">
        <Label className="w-full mr-2">
          <div className="flex flex-col md:flex-row gap-2">
            <Input
              className="text-m sm:text-2xl"
              disabled={signupState === "successful"}
              valid={!formIsDirty || nameIsValid}
              onChange={(e) => updateName(e.target.value)}
              aria-label={t("enter-your-name") as string}
              placeholder={t("enter-your-name") as string}
              css=""
            />
            <Input
              className="text-m sm:text-2xl"
              valid={!formIsDirty || emailIsValid}
              onChange={(e) => validateEmailAddress(e)}
              disabled={signupState === "successful"}
              aria-label={t("enter-your-email") as string}
              placeholder={t("enter-your-email") as string}
              css=""
            />
            <Button
              className="sm:h-12 text-md sm:text-2xl"
              iconLeft={signupState === "loading" && Spinner}
              disabled={
                !formIsValid ||
                signupState === "loading" ||
                signupState === "successful"
              }
              onClick={() => sendSubscribe()}
            >
              {t("send-button")}
            </Button>
          </div>
        </Label>
      </div>

      {!nameIsValid && formIsDirty && (
        <HelperText valid={false}>{t("invalid-name")}</HelperText>
      )}
      {!emailIsValid && formIsDirty && (
        <HelperText valid={false}>{t("invalid-email-message")}</HelperText>
      )}
      {signupState === "successful" && (
        <HelperText className="text-sm lg:text-xl" valid={true}>
          {t("thanks-for-signing-up")}
        </HelperText>
      )}
      {signupState === "failed" && (
        <HelperText valid={false}>{t("error-message")}</HelperText>
      )}
    </div>
  );
};

const Spinner = () => (
  <SpinnerCircular className="mr-2" size="30px" color="#82A775" />
);

export default EmailSubscribe;
