import React from "react";
import Section from "../Layout/Section";
import { Heading2, Link, SectionHeader } from "../Layout/styles";

const FAQ = () => {
  return (
    <Section id="faq" className="bg-map-beige-light text-map-blue">
      <SectionHeader className="text-map-blue">FAQ</SectionHeader>
      <div className="space-y-4 mx-auto md:w-3/4 lg:w-2/3">
        <p>
          If you have a question that is not answered here, shoot us an email at{" "}
          <Link href="mailto:sophieplusrobin@gmail.com">
            SophiePlusRobin@gmail.com
          </Link>{" "}
          and we will try to get back to you as soon as possible!
        </p>
        <FAQQuestion question={"What should I wear?"} answer={"Clothes."} />
        <FAQQuestion
          question={"Will you be accommodating any dietary restrictions?"}
          answer={
            "Absolutely! We want to make sure everyone can enjoy the food! Please let us know any dietary restrictions when you RSVP."
          }
        />
        <FAQQuestion
          question={"I don't have a car. How can I get to the wedding venues?"}
          answer={
            "We are providing a bus service from the hotels in Station Landing to the ceremony, from the ceremony to the reception and then back to the hotel. Stay tuned for detailed information about the schedule!"
          }
        />
        <FAQQuestion
          question={"Can I take pictures during the ceremony?"}
          answer={
            "We are asking everyone to not take photos during the ceremony. Please keep your phones and cameras in your pockets or bags. We will have professional photographers and videographers capturing the ceremony and we'll share the results!"
          }
        />
        <FAQQuestion
          question={
            "What hashtag should I use for sharing photos from other times of the weekend?"
          }
          answer={
            <>
              We will be using the hashtag{" "}
              <span className="font-bold">#WellSuted</span> (this was not
              Robin's idea)
            </>
          }
        />
      </div>
    </Section>
  );
};

const FAQQuestion = ({ question, answer }) => (
  <details>
    <summary>
      <h2 className="text-l font-semibold inline border-b border-map-blue hover:cursor-pointer hover:text-map-beige hover:border-map-beige md:text-xl lg:text-2xl">
        {question}
      </h2>
    </summary>
    <p className="my-4">{answer}</p>
  </details>
);

export default FAQ;
