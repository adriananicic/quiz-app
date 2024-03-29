"use client";
import Heading from "@/components/atoms/Heading";
import { Section } from "@/components/atoms/Section";
import React from "react";

export const AboutPage = () => {
  return (
    <Section>
      <Heading title="About" />
      <p className="text-neutral">
        This is an app made as an example project for Enterwell
      </p>
      <p className="text-neutral">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </Section>
  );
};
