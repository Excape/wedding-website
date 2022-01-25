import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import React from "react";
import Section from "../Layout/Section";
import { Heading2, Link, SectionHeader } from "../Layout/styles";

const FAQ = () => {
  const t = useTranslations("FAQ");
  return (
    <Section id="faq" className="bg-map-beige-light text-map-blue">
      <SectionHeader className="text-map-blue">FAQ</SectionHeader>
      <div className="space-y-4 mx-auto md:w-3/4 lg:w-2/3">
        <FAQQuestion
          question={t("clothes_q")}
          answer={
            <>
              <span className="block mb-8">{t("clothes_a_1")}</span>
              {t("clothes_a_2")}
            </>
          }
        />
        <FAQQuestion question={t("diet_q")} answer={t("diet_a")} />
        <FAQQuestion question={t("car_q")} answer={t("car_a")} />
        <FAQQuestion question={t("parking_q")} answer={t("parking_a")} />
        <FAQQuestion question={t("outside_q")} answer={t("outside_a")} />
        <FAQQuestion question={t("pics_q")} answer={t("pics_a")} />
        <FAQQuestion question={t("social_q")} answer={t("social_a")} />
        <FAQQuestion question={t("kids_q")} answer={t("kids_a")} />
        <FAQQuestion
          question={t("more_q")}
          answer={t.rich("more_a", {
            email: (c) => (
              <Link href="mailto:sophieplusrobin@gmail.com">{c}</Link>
            ),
          })}
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
