import React from "react";
import GrammarScreen from "../../common/GrammarScreen";

// Section titles for 'discussion' topic
const sectionTitles = [
  "Starting a Discussion",
  "Expressing Opinions",
  "Agreeing Politely",
  "Disagreeing Respectfully",
  "Asking for Clarification",
  "Providing Explanations",
  "Changing the Topic",
  "Summarizing Points",
  "Reaching a Conclusion",
  "Ending a Discussion",
];

// Sample text content for each section
const sectionText = sectionTitles.map(
  (title) => `This section covers "${title}". `.repeat(10)
);

export default function DiscussionScreen() {
  return <GrammarScreen sectionTitles={sectionTitles} sectionText={sectionText} />;
}
