import { Button, Input, Label, Textarea } from "@windmill/react-ui";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SpinnerCircular } from "spinners-react";
import Section from "../Layout/Section";
import { SectionHeader } from "../Layout/styles";

type Inputs = {
  name: string;
  email: string;
  attending: string;
  plusOne: string;
  notes: string;
};

const Rsvp = () => {
  const { register, handleSubmit, watch, formState } = useForm<Inputs>();
  const [submitFailed, setSubmitFailed] = useState(false);
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch("/api/rsvp", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (!response.ok) {
        response.json().then(console.error);
        setSubmitFailed(true);
        throw Error(response.statusText);
      }
      setSubmitFailed(false);
    });
  };

  return (
    <Section id="rsvp" className="bg-map-beige text-map-blue">
      <SectionHeader className="text-map-blue">Rsvp</SectionHeader>
      <div className="md:w-2/3 md:mx-auto lg:w-1/2 xl:w-1/3">
        <p className="mb-4">
          Please respond by{" "}
          <time className="font-semibold" dateTime="2022-05-14">
            May 14th, 2022
          </time>
        </p>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <Label>
            <span>Name*</span>
            <Input
              name="full-name"
              aria-label="Name"
              css=""
              valid={!formState.errors.name}
              {...register("name", { required: "Please provide a name" })}
            />
            <span className="font-bold text-map-red">
              {formState.errors.name?.message}
            </span>
          </Label>
          <Label>
            <span>Email*</span>
            <Input
              type="email"
              name="email"
              aria-label="Email"
              css=""
              valid={!formState.errors.email}
              {...register("email", {
                required: "Please provide an email address",
              })}
            />
            <span className="font-bold text-map-red">
              {formState.errors.email?.message}
            </span>
          </Label>
          <div className="">
            <p className="mb-2">Will you be attending?*</p>
            <div className="flex flex-row gap-4">
              <Label>
                <Input
                  type="radio"
                  name="attending"
                  value="yes"
                  css=""
                  valid={!formState.errors.attending}
                  {...register("attending", {
                    required: "Please select a response",
                  })}
                />
                <span className="text-map-blue ml-1">Yes</span>
              </Label>
              <Label>
                <Input
                  type="radio"
                  name="attending"
                  value="no"
                  css=""
                  valid={!formState.errors.attending}
                  {...register("attending", {
                    required: "Please select a response",
                  })}
                />
                <span className="text-map-blue ml-1">No</span>
              </Label>
            </div>
            <span className="font-bold text-map-red">
              {formState.errors.attending?.message}
            </span>
          </div>
          {watch("attending") !== "no" && (
            <>
              <Label>
                <span className="block text-map-blue">
                  Are you bringing anyone with you?
                </span>
                <span className="block text-map-blue">
                  If so, let us know who!
                </span>
                <Input
                  type="text"
                  aria-label="additional guest"
                  css=""
                  {...register("plusOne")}
                />
              </Label>
              <Label>
                <span>
                  Any other information that we should know? We&apos;re having a
                  buffet, so any allergies, preferences, etc.
                </span>
                <Textarea
                  className="bg-map-beige-light text-map-blue border-map-blue"
                  css=""
                  {...register("notes")}
                />
              </Label>
            </>
          )}
          <Button
            type="submit"
            iconLeft={formState.isSubmitting && Spinner}
            disabled={formState.isSubmitting || formState.isSubmitSuccessful}
          >
            Submit
          </Button>
          {formState.isSubmitSuccessful && watch("attending") === "yes" && (
            <p className="font-bold">
              Thank you! We&apos;re so excited to celebrate with you!
            </p>
          )}
          {formState.isSubmitSuccessful && watch("attending") === "no" && (
            <p className="font-bold">
              Thanks for letting us know you can&apos;t make it. We hope to be
              able to celebrate with you another time!
            </p>
          )}
          {submitFailed && (
            <p className="text-map-red">
              Unfortunately something went wrong. Please tell Robin to fix the
              website :)
            </p>
          )}
          <p></p>
        </form>
      </div>
    </Section>
  );
};

const Spinner = () => (
  <SpinnerCircular className="mr-2" size="20px" color="#82A775" />
);

export default Rsvp;
