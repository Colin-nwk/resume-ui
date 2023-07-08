import React from "react";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex"></div>
    </section>
  );
}

export default About;
