import styled from "styled-components";

export const SectionHeader = ({ className, children }) => (
  <h1 className={`${className} text-center text-3xl p-4 font-title-sans font-semibold uppercase`}>
    {children}
  </h1>
);
