import { ReactNode } from "react";
import styled from "styled-components";

export const SectionHeader = ({ className, children }) => (
  <h1
    className={`${className} text-center text-3xl m-4 mb-8 font-title-sans font-bold uppercase`}
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
    className={`${className} text-center text-2xl p-2 font-title-sans font-semibold uppercase`}
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
  <h3 className={`${className} text-center text-xl p-1 mb-4 font-title-sans`}>
    {children}
  </h3>
);

export const LinkButton = ({ href, color, hoverColor, children }) => (
  <a
    className={`inline-block w-40 border-${color} border-2 font-title-sans px-2 py-1 my-2 uppercase hover:bg-${color} hover:text-${hoverColor}`}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);
