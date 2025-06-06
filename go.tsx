import React from "react";
import GrammarScreen from "../../common/GrammarScreen";

// Custom section headers (animal names)
const sectionTitles = [
  "go on",
  "go out",
  "go over",
  "go off",
  "go in for",
  "go through",
  "go along with",
  "go back",
  "go ahead",
  "go without",
];

// Custom content for each section
const sectionText = sectionTitles.map(
  (animal) => `This section is all about the ${animal}. `.repeat(10)
);

export default function GoScreen() {
  return <GrammarScreen sectionTitles={sectionTitles} sectionText={sectionText} />;
}
