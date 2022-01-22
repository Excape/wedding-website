import { Button, Input, Label, Textarea } from "@windmill/react-ui";
import React from "react";
import Section from "../Layout/Section";
import { SectionHeader } from "../Layout/styles";

const Rsvp = () => {
  return (
    <Section id="rsvp" className="bg-map-beige text-map-blue">
      <SectionHeader>Rsvp</SectionHeader>
      <p>Please respond by TODO!</p>
      <form className="space-y-4">
        <Label>
          <span>Name*</span>
          <Input aria-label="Name" css="" required />
        </Label>
        <Label>
          <span>Email*</span>
          <Input type="email" aria-label="Email" css="" required />
        </Label>
        <div className="">
          <p className="mb-2">Will you be attending?*</p>
          <div className="flex flex-row gap-4">
            <Label>
              <Input type="radio" name="attending" css="" required />
              <span className="text-map-blue ml-1">Yes</span>
            </Label>
            <Label>
              <Input type="radio" name="attending" css="" required />
              <span className="text-map-blue ml-1">No</span>
            </Label>
          </div>
        </div>
        <Label>
          <span className="block text-map-blue">
            Are you bringing anyone with you?
          </span>
          <span className="block text-map-blue">If so, let us know who!</span>
          <Input type="text" aria-label="Email" css="" required />
        </Label>
        <Label>
          <span>
            Any other information that we should know? We're having a buffet, so
            any allergies, preferences, etc.
          </span>
          <Textarea
            className="bg-map-beige-light text-map-blue border-map-blue"
            css=""
            required
          />
        </Label>
        <Button type="submit">Submit</Button>
      </form>
    </Section>
  );
};

export default Rsvp;
