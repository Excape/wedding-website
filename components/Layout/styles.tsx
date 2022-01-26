import { ReactNode } from "react";
import styled from "styled-components";

export const SectionHeader = ({ className, children }) => (
  <h1
    className={`${className} text-center text-3xl m-4 mb-8 font-title-sans uppercase`}
  >
    {children}
  </h1>
);

export const Heading2 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <h2
    className={`${className} text-center text-2xl p-2 font-title-sans uppercase`}
  >
    {children}
  </h2>
);

export const Heading3 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <h3
    className={`text-center text-xl p-1 mb-4 font-title-sans font-light ${className}`}
  >
    {children}
  </h3>
);

export const LinkButton = ({
  href,
  children,
  blueBackground,
}: {
  href: string;
  children: ReactNode;
  blueBackground?: boolean;
}) => {
  const border = blueBackground ? "border-map-beige-light" : "border-map-blue";
  const hoverBg = blueBackground
    ? "hover:bg-map-beige-light"
    : "hover:bg-map-blue";
  const hoverText = blueBackground
    ? "hover:text-map-blue"
    : "hover:text-map-beige-light";
  return (
    <a
      className={`inline-block text-center w-48 ${border} border-2 font-title-sans px-2 py-1 my-2 uppercase ${hoverBg} ${hoverText}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export const Link = ({
  href,
  children,
  accentBlue,
}: {
  href: string;
  children: ReactNode;
  accentBlue?: boolean;
}) => {
  const border = accentBlue ? "border-map-blue" : "border-map-beige-light";
  const hover = accentBlue ? "hover:bg-map-blue" : "hover:bg-map-beige-light";
  const hoverText = accentBlue
    ? "hover:text-map-beige-light"
    : "hover:text-map-brown";
  return (
    <a
      className={`border-b border-dashed font-semibold ${border} pb-px ${hover} ${hoverText}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};
