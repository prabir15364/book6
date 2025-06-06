import React from "react";
import GrammarScreen from "../../common/GrammarScreen";

// Custom section headers (animal names)
const sectionTitles = [
  "See you later",
  "Take care",
  "Catch you later",
  "Goodbye",
  "See you soon ",
  "Farewell",
  "I'm off",
  "Talk to you later",
  "Peace out",
  "Bye for now",
];

// Custom content for each section
const sectionText = sectionTitles.map(
  (animal) => `This section is all about the ${animal}. `.repeat(10)
);

export default function GoodbyeScreen() {
  return <GrammarScreen sectionTitles={sectionTitles} sectionText={sectionText} />;
}
