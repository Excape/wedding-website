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

export const LinkButton = ({ href, children }) => (
  <a
    className="inline-block w-48 border-map-blue border-2 font-title-sans px-2 py-1 my-2 uppercase hover:bg-map-blue hover:text-map-beige-light"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

export const Link = ({ href, children }) => (
  <a
    className={`border-b border-dashed font-semibold border-map-beige-light pb-px hover:bg-map-beige-light hover:text-map-brown`}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);
