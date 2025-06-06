import React from "react";
import GrammarScreen from "../../common/GrammarScreen";

// Custom section headers (animal names)
const sectionTitles = [
  "kill two birds with one stone",
  "let the cat out of the bad",
  "miss the boat",
  "not playing with a full deck",
  "On the fence",
  "once in a blue moon",
  "out of the blue",
  "pull someone's leg",
  "put all your eggs in one basket",
  "rain on someone's parade",
];

// Custom content for each section
const sectionText = sectionTitles.map(
  (animal) => `This section is all about the ${animal}. `.repeat(10)
);

export default function Page4Screen() {
  return <GrammarScreen sectionTitles={sectionTitles} sectionText={sectionText} />;
}
