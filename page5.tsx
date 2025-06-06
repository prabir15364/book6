import React from "react";
import GrammarScreen from "../../common/GrammarScreen";

// Custom section headers (animal names)
const sectionTitles = [
  "walk on eggshell",
  "when pigs fly",
  "wild goose chase",
  "bite off more than you can chew",
  "burn the midnight oil",
  "cost an arm and a leg",
  "cry wolf",
  "get out of hand",
  "hit the sag",
  "in the same boat",
];

// Custom content for each section
const sectionText = sectionTitles.map(
  (animal) => `This section is all about the ${animal}. `.repeat(10)
);

export default function Page5Screen() {
  return <GrammarScreen sectionTitles={sectionTitles} sectionText={sectionText} />;
}
