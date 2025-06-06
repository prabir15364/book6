import React from "react";
import GrammarScreen from "../../common/GrammarScreen";
const sectionTitles = [
  "Supposed To",
  "I must go there. আমাকে সেখানে যেতেই হবে।",
  "must be - থাকতেই হবে",
  "Must যখন noun হিসাবে ব্যবহৃত হয়",
  "পূর্ণাঙ্গ অনুমান করার ক্ষেত্রে must এর ব্যবহার",
  "নিষিদ্ধ অর্থে must এর ব্যবহার করা হয়।",
  "দৃঢ় সুপারিশ উপদেশ দেওয়ার ক্ষেত্রে must এর ব্যবহার",
  "He must be watching TV. মনে হয় সে টিভি দেখছে।",
  "Sub + must + v1 (be as main verb)",
  "Sub + must have + v3",
  "Sub + must have + other words",
  "Must have এর passive",
  "Must have এর passive",
  "Interrogative sentence of 'must'",
  "Sub + must have been + v4 + other words",
  "To be searched in the web'",
  "Other uses of 'must'",
];
const sectionText = [


  `Supposed to একটি modal verb। এই অধ্যায়ে Supposed to এর ব্যাপক ব্যবহার সম্পর্কে আলোকপাত করা হয়েছে। সাধারণত বাংলা বাক্যের শেষে কথা, কথা ছিল বা কোন ক্রিয়া সম্পাদনের আশা করা হয়, আশা করা হয়েছিল, নিয়ম, কর্তব্য, উদ্দেশ্য ইত্যাদি অর্থ প্রকাশ করার জন্য Supposed to এর ব্যবহার করা হয়ে থাকে।',
'Expectation অর্থে Supposed to ব্যবহার করা হয়। You were expected to come my home yesterday. গতকাল তুমি আমার বাড়িতে আসবে বলে আশা করেছিলাম। ( একই বাক্য Supposed to দিয়ে ইংরেজিতে অনুবাদ করা যায়) You were supposed to come my home yesterday. গতকাল তোমার আমার বাড়িতে আসার কথা ছিল। The train is supposed to come at 11 am ট্রেনটি ১১ টা বাজে আসার কথা।`,





`Duty অর্থে Supposed to এর ব্যবহার করা হয়। This is your duty to reach office on time. ঠিক সময়ে অফিসে পৌঁছা তোমার কর্তব্য। (একই বাক্ যSupposed to দিয়ে ইংরেজিতে অনুবাদ করা যায়। You are supposed to reach the office on time. ঠিক সময়ে অফিসে পৌছা তোমার কর্তব্য। Is it my duty to inform you about everything? এটা কি আমার প্রত্যেক কর্তব্য তোমাকে সব বিষয়ে জানানো? (একই বাক্য Supposed to দিয়ে ইংরেজিতে অনুবাদ করা যায়।) Am I supposed to inform you about everything? তোমাকে সব বিষয়ে জানানো কি আমার কর্তব্য।`,





`Responsibility করতে  supposed to এর ব্যবহার করা হয়। Being the eldest brother, it's my responsibility to take care of my siblings. বড় ভাই হিসাবে এটা আমার দায়িত্ব আমার ভাইবোনদের দায়ভার বহন করা। (একই বাক্য Supposed to দিয়ে ইংরেজিতে অনুবাদ করা যায়।) 
Being the eldest brother, I am supposed to take care of my siblings. বড় ভাই হিসেবে আমার দায়িত্ব আমার ভাই বোনদের দায়ভার বহন করা।
Being a teacher, I must cover all the topics thoroughly. একজন শিক্ষক হিসেবে আমার দায়িত্ব সকল বিষয় বিশদভাবে আয়ত্ত করা।  (একই বাক্য Supposed to দিয়ে ইংরেজিতে অনুবাদ করা যায়।) 
Being a teacher, I am supposed to cover all the topics thoroughly. একজন শিক্ষক হিসেবে আমার দায়িত্ব সকল বিষয় বিশদভাবে আয়ত্ত করা।`,






`Purpose বা উদ্দেশ্যে অর্থে supposed to এর ব্যবহার করা হয়।
The purpose of this mobile is to keep you in touch with me. এই মোবাইলের উদ্দেশ্য হচ্ছে তোমাকে আমার সাথে যোগাযোগে রাখা।  (একই বাক্য Supposed to দিয়ে ইংরেজিতে অনুবাদ করা যায়।) 
This mobile is supposed to keep you in touch with me. এই মোবাইলের উদ্দেশ্য হচ্ছে তোমাকে আমার সাথে যোগাযোগে রাখা।
What is the purpose of your life? আপনার জীবনের উদ্দেশ্য কি?
What are you supposed to do in your life? আপনার জীবনের উদ্দেশ্য কি?`,





`Sub + am/is/are  + supposed to + v1 of verb be + other words.
He is supposed to be at home. সে ঘরে থাকার কথা।



Sub + was/were  + supposed to + v1 of verb be + other words.
He was supposed to be at home. সে ঘরে থাকার কথা ছিল।





Sub + am/is/are  + supposed to be + v4 + other words.
You are supposed to be playing right now. 
তোমার তো এখন খেলতে থাকার কথা। (ওই সময় আমাদের মাঠে খেলতে থাকার কথা কিন্তু আমরা মাঠে খেলা না খেলে অন্য কিছু করছি)`,









`Sub + was/were  + supposed to be + v4 + other words.
We were supposed to be studying at home. 
আমাদের তো বাড়িতে পড়তে থাকার কথা ছিল।
We were supposed to be playing on the ground. আমাদের তো মাঠে খেলতে থাকার কথা ছিল
(ওই সময় আমাদের মাঠে খেলতে থাকার কথা ছিল কিন্তু আমরা মাঠে খেলা না খেলে অন্য কিছু করছিলাম)





Sub + am/is/are + supposed to + have (as main verb) + other words.
He is supposed to have a car. তার কাছে একটা গাড়ি থাকার কথা।
I am supposed to have a job by next year. আগামী বছর আমার একটি চাকরি হবে বলে আশা করি।`,





`Sub + was/were + supposed to + have (as main verb) + other words.
উদাহরণের জন্য ইউটিউব দেখতে হবে।





Sub + am/is/are supposed to have + v3 + other words.
You are supposed to have purchased a mobile.
আশা করি একটি মোবাইল কিনিয়া থাকবে। অথবা তুমি হয়তো একটা মোবাইলকে কিনে থাকবে।
You are suppose to have given him the book. আপনি ওকে বইটা দিয়ে দেওয়ার কথা। অথবা, আশা করি বইটা আপনি ওকে দিয়ে দিয়েছেন।`,






`Sub + was/were supposed to have + v3 + other words.
They were supposed to reach the office but they didn't. তারা অফিসে পৌঁছে থাকার কথা ছিল কিন্তু তারা পৌঁছেনি।




Supposed to এর passive voice.
They are supposed to construct the building next year. (active voice) তারা বিল্ডিংটা আগামী বছর বানানোর কথা।
Object of active voice + am/is/are/was/were + supposed to be + v3 + by + subject of active voice + other words.
The building is supposed to be constructed by them next year. বিল্ডিংটা আগামী বছরের মধ্যে তাদের দ্বারা বানানোর কথা। (ইউটিউবে সার্চ দিয়ে দেখতে হবে)`,




`Supposed to have + v3 এর passive voice.
They are supposed to have constructed the building next year. (active voice) তারা বিল্ডিংটা আগামী বছর বানিয়ে ফেলার কথা ছিল।
Object of active voice + am/is/are/was/were + supposed to have been + v3 + by + subject of active voice + other words.
The building is supposed to have been constructed by them next year. বিল্ডিংটা আগামী বছরের মধ্যে তাদের দ্বারা বানানো হবে বলে কথা ছিল।
(ইউটিউবে সার্চ দিয়ে দেখতে হবে)`,







`নিয়ম বা মানা আছে অর্থে supposed to এর ব্যবহার করা হয়।
You are not supposed to smoke here. তুমি এখানে ধূমপান করতে পারো না। অথবা, এখানে ধূমপান করার নিয়ম নেই। (Negative sentence of supposed to)
It's not supposed to be eaten. এটা খাওয়ার জন্য নয়, অথবা, এটা খাওয়ার নিয়ম নেই।
This is supposed to be applied. এটা লাগাতে হয়। অথবা, এটা লাগানোর জন্য নিয়ম করা আছে।




When you were not supposed to marry me then why did you send photograph? আমাকে বিয়ে করার ইচ্ছেই যখন তোমার ছিল না তাহলে ফটো পাঠিয়েছিলে কেন?



How long am I supposed to wait for you? আপনার জন্য আর কতক্ষণ অপেক্ষা করবো বলুন তো।




Pigeons are supposed to be lucky, right? পায়রা মানে তো লক্ষী, তাই না?



He was not supposed to be here. তার আসার কথা ছিল না।



It is not supposed to be kept safely. এটা নিরাপদে তুলে রাখার জন্য নয়।




You are not supposed to go out. তোমার বাইরে যাওয়া ভালো আছে। অথবা, তুমি বাইরে যেতে পারবেনা।





Who is supposed to come. কে আসার কথা।





A younger brother is supposed to obey his elder brother. বড় ভাইয়ের কথা তো ছোট ভাইকে শুনতে হবে।




You were supposed to come for a voice test, why didn't you turn up? আজ তো আপনার ভয়েস দিতে আসার কথা ছিল, আসেননি কেন?`,
];

export default function SupposedToScreen() {
  return <GrammarScreen sectionTitles={sectionTitles} sectionText={sectionText} />;
}
