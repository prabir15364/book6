import React from "react";
import GrammarScreen from "../../common/GrammarScreen";

// Custom section headers (animal names)
const sectionTitles = [
  "Hello",
  "Hi",
  "Hey ",
  "Good morning",
  "Good afternoon ",
  "Good evening",
  "What's up?",
  "How's it going?",
  "Nice to see you",
  "Yo!s",
];

// Custom content for each section
const sectionText = sectionTitles.map(
  (animal) => `This section is all about the ${animal}. `.repeat(10)
);

export default function GreetingScreen() {
  return <GrammarScreen sectionTitles={sectionTitles} sectionText={sectionText} />;
}
