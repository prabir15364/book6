import React from "react";
import GrammarScreen from "../../common/GrammarScreen";

// Custom section headers (animal names)
const sectionTitles = [
  "honey bee",
  "coincidents",
  "A blessing in disguise",
  "beat arround the bush",
  "bite the bullet",
  "break the ice",
  "by the book",
  "cut to the chase",
  "devil's advocate",
  "don't cry over spoiled milk",
];

// Custom content for each section
const sectionText = sectionTitles.map(
  (animal) => `This section is all about the ${animal}. `.repeat(10)
);

export default function Page2Screen() {
  return <GrammarScreen sectionTitles={sectionTitles} sectionText={sectionText} />;
}
