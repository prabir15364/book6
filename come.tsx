import React from "react";
import GrammarScreen from "../../common/GrammarScreen";

const sectionTitles = [
  "come across",
  "come up with",
  "come in",
  "come out",
  "come over",
  "come back",
  "come along",
  "come down with",
  "come up",
  "come through",
];

const sectionText = sectionTitles.map(
  (phrase) => `This section is all about "${phrase}". `.repeat(10)
);

export default function ComeScreen() {
  return <GrammarScreen sectionTitles={sectionTitles} sectionText={sectionText} />;
}
