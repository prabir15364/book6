import React from "react";
import GrammarScreen from "../../common/GrammarScreen";

const sectionTitles = [
  "Shall/Will",
  "Could: Possibility",
  "Could: Wish & Informal Suggestion",
  "Could: Polite Request & Permission",
  "Could: Polite request and Offer",
  "Could: Passive Voice",
  "sub + could + 'have' as main verb",
  "Sub + could + be as main verb",
  "Imaginary sentence তৈরি করার ক্ষেত্রে could",
  "other uses of could",
  "Could: Summary and Practice",
];
const sectionText = [
`Shall এবং will এই দুইটি modal verb। এই অধ্যায়ে আমরা shall এবং will এর যথার্থ ব্যবহার সম্পর্কে শিখব।

সাধারণত spoken English এর মধ্যে “shall” এবং “will” এই দুইটার তেমন কোন ব্যবধান ধরা পড়ে না।
কারণ spoken English এ shall এবং will এর contraction form ব্যবহার করা হয় । আর এই দুইটা contraction form এর উচ্চারণ প্রায় একই। যেমন : I shall এর  contraction form I’ll এবং I will এর contraction form- I’ll যা দেখতে এবং শুনতে হুবহু একই। তাই স্পোকেন ইংলিশে এই দুটির ব্যবধান বুঝা যায় না।



কিন্তু কোন formal letter বা document লেখার ক্ষেত্রে shall এবং will লেখার নিয়ম মেনে চলতে হয়। ভবিষ্যতের কোন action লেখার জন্য সাধারণত first person  এর ক্ষেত্রে “shall”, second person এবং third person এর ক্ষেত্রে “will” এর ব্যবহার করা হয়। নিম্নে কিছু shall এবং will এর ব্যবহার দেখানো হল।`,




`সাধারণত পরামর্শ নেওয়ার ক্ষেত্রে shall এর ব্যবহার করা হয়।
Shall we dance? আমরা কি নাচবো?
Shall I stay or leave? আমি থাকবো নাকি চলে যাব?
What shall we do this Sunday? এই রবিবারে আমরা কি করব?
Shall is used to offer with I and we.
Shall I get your something to eat? আমি কি আপনাকে খাওয়ার জন্য কিছু এনে দেবো?
Shall I help you? আমি কি আপনাকে সাহায্য করবো?
Shall I watch the clothes. আমি কি কাপড়-চোপড় গুলো পরিষ্কার করে দেবো?
Shall  get the grocery for you? আমি কি আপনাকে বাজার করে দেবো?`,





`Promise করার ক্ষেত্রে I এবং we এর সাথে shall এর ব্যবহার করা হয়।
We shall pay the fine. আমরা জরিমানা প্রদান করব।
I shall never forget where I came from. আমি কখনো ভুলবো না যে আমি কোথা থেকে এসেছিলাম।
We shall never forget you. আমরা তোমাদের কখনো ভুলবো না।
I shall get your money back soon. আমি শীঘ্রই তোমার টাকা ফিরিয়ে দিব।

Command বা order দেওয়ার ক্ষেত্রে second person এবং third person এর সাথে shall ব্যবহৃত হয়।
You shall clean the room in 5 minutes. তুমি এই রুমটা পাঁচ মিনিটের মধ্যে পরিষ্কার করে দিবে।
You shall score good mark in the exam. পরীক্ষায় তোমাকে ভালো নাম্বার পেতে হবে।
You shall hobby my order. তোমাকে আমার আদেশ মানতে হবে।
They shall not  come to my house. তারা আমার ঘরে আসতে পারবে না।
You shall not get in my house. তুমি আমার ঘরে ঢুকবে না।
He shall be there at 5 o'clock. তাকে পাঁচটা বাজে সেখানে যেতে হবে।`,




`Threat বা ধমক দেওয়ার ক্ষেত্রে shall এর ব্যবহার করা হয়। Shall is used to give a threat  to someone with second and third person.
She shall regret this. সে এটার জন্য পস্তাবে।
You shall pay for this. তোমাকে এটার পরিণাম ভোগ করতে হবে। (তোমাকে এটার মাশুল দিতে হবে।)
They shall be punished for this. এটার জন্য তাদেরকে শাস্তি দেওয়া হবে। (passive voice of “shall”)
He shall be arrested soon. তাকে শীঘ্রই গ্রেফতার করা হবে। (passive voice)

Formal obligation বা আনুষ্ঠানিক বাধ্যকতা এর ক্ষেত্রে second ও third person এর ক্ষেত্রে shall এর ব্যবহার করা হয়।
Visitor shall not enter here. দর্শকরা এখানে প্রবেশ করবে না। (দর্শকরা এখানে প্রবেশ করতে পারবে না।)
They shall not have the photograph taken here. তারা এখানে ফটো তুলতে পারবে না।
You shall abide by the law. তোমাকে আইন মেনে চলতে হবে।`,



`Normal future এর ক্ষেত্রে I/we এর সাথে shall এর ব্যবহার করা হয়। Strong future এর ক্ষেত্রে I এবং we এর সাথে will এর ব্যবহার করা হয়।
Normal future এর ক্ষেত্রে you/they/he/she/it এর সাথে will এর ব্যবহার করা হয়। Strong future এর ক্ষেত্রে you/they/he/she/it এর সাথে shall এর ব্যবহার করা হয়।
Expectation, prediction, plan are normal future.
I shall wait for you at the train station. আমি তোমার জন্য ট্রেন স্টেশনে অপেক্ষা করব।
We shall not go to the museum if we don't have time. সময় না পেলে আমরা মিউজিয়ামে যাব না। 
The match will not take place on October 7th. অক্টোবারের ৭ তারিখে ম্যাচটি অনুষ্ঠিত হবে না।
You will find the flash drive in the locker. তুমি লকারে ফ্ল্যাশ ড্রাইভ টা পাবে।
All employees will receive fire safety training every 2 years.  প্রতি দুই বছরে সকল কর্মচারীরা অগ্নি নিরাপত্তা প্রশিক্ষণ পাবে ।`,


`Promise, determination, command এগুলো হলো strong future, আর strong future এর ক্ষেত্রে I/we এর সাথে will বসে আর বাকি সব person এর ক্ষেত্রে shall এর ব্যবহার করা হয়।
I will get an A on this exam, I promise! আমি এই পরীক্ষায় এ পাব।
We will not tolerate smoking inside the building. বিল্ডিং এর ভিতরে ধূমপান আমরা সহ্য করব না। (Warning)
You shall finish your homework before you go out to play. খেলতে যাওয়ার আগে তোমাকে বাড়ির কাজ শেষ করতে হবে। (Command)
The wedding shall not take place. বিয়েটি অনুষ্ঠিত হবে না। (Strong emotion)
All employees shall wear safety gloves handling hazardous chemicals. ক্ষতিকর কেমিক্যাল নিয়ে কাজ করার সময় সকল শ্রমিকদের সেফটি গ্লাস পড়তে হবে। (Strong obligation)
Request করার ক্ষেত্রে will এর ব্যবহার করা হয়, Shall ব্যবহৃত হয় না।
Will you get me a glass of water? আপনি কি আমাকে একটু পানি এনে দেবেন?
Future indefinite, future continuous, future perfect, future perfect continuous এবং এদের প্রেসিড বয়স ইউটিউবে সার্চ দিয়ে দেখতে হবে।
 Will have to, will have to be, will have had to, will have had to be.`,
];

export default function ShallWillScreen() {
  return <GrammarScreen sectionTitles={sectionTitles} sectionText={sectionText} />;
}

















