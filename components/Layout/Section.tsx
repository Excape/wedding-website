import React, { ReactNode } from "react";

const Section = ({ id, className, children }: { id: string, className: string, children: ReactNode }) => (
  <section id={id} className={`${className} pt-12 px-8 pb-8`}>
      {children}
  </section>
);

export default Section