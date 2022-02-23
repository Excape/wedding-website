import { Button, Input, Label, Textarea } from "@windmill/react-ui";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SpinnerCircular } from "spinners-react";
import Section from "../Layout/Section";
import { Link, SectionHeader } from "../Layout/styles";

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
  const { locale } = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const payload = {
      ...data,
      locale,
    };
    await fetch("/api/rsvp", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((response) => {
      if (!response.ok) {
        response.json().then(console.error);
        setSubmitFailed(true);
        throw Error(response.statusText);
      }
      setSubmitFailed(false);
    });
  };

  const t = useTranslations("RSVP");

  return (
    <Section id="rsvp" className="bg-map-beige text-map-blue">
      <SectionHeader className="text-map-blue">{t("title")}</SectionHeader>
      <div className="md:w-2/3 md:mx-auto lg:w-1/2 xl:w-1/3">
        <p className="mb-4">
          {t.rich("respond", {
            date: (c) => (
              <time className="font-semibold" dateTime="2022-05-14">
                {c}
              </time>
            ),
          })}
        </p>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <Label>
            <span>Name*</span>
            <Input
              name="full-name"
              aria-label="Name"
              css=""
              valid={!formState.errors.name}
              {...register("name", { required: t("error_name") })}
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
                required: t("error_email"),
              })}
            />
            <span className="font-bold text-map-red">
              {formState.errors.email?.message}
            </span>
          </Label>
          <div className="">
            <p className="mb-2">{t("attending")}*</p>
            <div className="flex flex-row gap-4">
              <Label>
                <Input
                  type="radio"
                  name="attending"
                  value="yes"
                  css=""
                  valid={!formState.errors.attending}
                  {...register("attending", {
                    required: t("error_attending"),
                  })}
                />
                <span className="text-map-blue ml-1">{t("yes")}</span>
              </Label>
              <Label>
                <Input
                  type="radio"
                  name="attending"
                  value="no"
                  css=""
                  valid={!formState.errors.attending}
                  {...register("attending", {
                    required: t("error_attending"),
                  })}
                />
                <span className="text-map-blue ml-1">{t("no")}</span>
              </Label>
            </div>
            <span className="font-bold text-map-red">
              {formState.errors.attending?.message}
            </span>
          </div>
          {watch("attending") !== "no" && (
            <>
              <Label>
                <span className="block text-map-blue">{t("plusOne_1")}</span>
                <span className="block text-map-blue">{t("plusOne_2")}</span>
                <Input
                  type="text"
                  aria-label="additional guest"
                  css=""
                  {...register("plusOne")}
                />
              </Label>
              <Label>
                <span>{t("notes?")}</span>
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
            {t("submit")}
          </Button>
          {formState.isSubmitSuccessful && watch("attending") === "yes" && (
            <p className="font-bold">{t("success_yes")}</p>
          )}
          {formState.isSubmitSuccessful && watch("attending") === "no" && (
            <p className="font-bold">{t("success_no")}</p>
          )}
          {submitFailed && (
            <p className="text-map-red">
              {t.rich("failure", {
                email: (t) => (
                  <Link href="mailto:sophieplusrobin@gmail.com">{t}</Link>
                ),
              })}
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
