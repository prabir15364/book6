import React from "react";
import GrammarScreen from "../../common/GrammarScreen";

// Custom section headers (animal names)
const sectionTitles = [
  "a man of letter",
  "in terms of",
  "bird of same feather",
  "hot cake",
  "in order to ",
  "due to",
  "lack of",
  "owing to",
  "crocodile eye",
  "abc knowledge",
];

// Custom content for each section
const sectionText = sectionTitles.map(
  (animal) => `This section is all about the ${animal}. `.repeat(10)
);

export default function Page1Screen() {
  return <GrammarScreen sectionTitles={sectionTitles} sectionText={sectionText} />;
}
