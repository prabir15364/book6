import React from "react";
import GrammarScreen from "../../common/GrammarScreen";

// Custom section headers (animal names)
const sectionTitles = [
  "Hi, how are you?",
  "Nice weather today, isn't it",
  "Hey, I don't think We've met before",
  "What brings you here",
  "That's a good thing. Wher did you get it?",
  "Did you watch the game last night",
  "I couldn't help but overhear you are into",
  "Have you been here before",
  "How is your day going",
  "Mind if I join?",
];

// Custom content for each section
const sectionText = sectionTitles.map(
  (animal) => `This section is all about the ${animal}. `.repeat(10)
);

export default function ConversationScreen() {
  return <GrammarScreen sectionTitles={sectionTitles} sectionText={sectionText} />;
}
