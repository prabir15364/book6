import React from "react";
import GrammarScreen from "../../common/GrammarScreen";

// Custom section headers (animal names)
const sectionTitles = [
  "I agree with you",
  "YOU ARE RIGTT",
  "Absolutely",
  "Exactly",
  "That's true ",
  "I couldn't agree more",
  "thaat's a good point",
  "I'm with you on that",
  "Totally",
  "You took the words right out of my mouth",
];

// Custom content for each section
const sectionText = sectionTitles.map(
  (animal) => `This section is all about the ${animal}. `.repeat(10)
);

export default function AgreeScreen() {
  return <GrammarScreen sectionTitles={sectionTitles} sectionText={sectionText} />;
}
