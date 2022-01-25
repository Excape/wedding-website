import React, { ReactNode } from "react";

const Section = ({ id, className, children }: { id: string, className: string, children: ReactNode }) => (
  <section id={id} className={`${className} pt-16 px-8 pb-12`}>
      {children}
  </section>
);

export default Section