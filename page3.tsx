import React from "react";
import GrammarScreen from "../../common/GrammarScreen";

// Custom section headers (animal names)
const sectionTitles = [
  "every cloud has a silver lining",
  "feel under the weather",
  "get cold feet",
  "give someone the cold shoulder",
  "hit the nail on the head",
  "in hot watert",
  "it takes two to tango",
  "jump on the bandwagon",
  "miss the boat",
  "once in a blue moon",
];

// Custom content for each section
const sectionText = sectionTitles.map(
  (animal) => `This section is all about the ${animal}. `.repeat(10)
);

export default function Page3Screen() {
  return <GrammarScreen sectionTitles={sectionTitles} sectionText={sectionText} />;
}
