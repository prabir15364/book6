import React from "react";
import GrammarScreen from "../../common/GrammarScreen";

const sectionTitles = [
  "Must",
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
  `Must একটি modal verb, আমরা must এর বিস্তারিত ব্যবহার সম্পর্কে শিখব। Must দ্বারা অবশ্যই, নিশ্চয়ই, বাধ্যতামূলক, যা করতেই হবে, দৃঢ় সুপারিশ, পূর্ণাঙ্গ অনুমান, নিষিদ্ধ, যা করতেই হয়েছিল, প্রয়োজনীয়তা এবং অতীতের দৃঢ় সম্ভাবনা ইত্যাদি অর্থে must এর ব্যবহার করা হয়। বাংলা বাক্যে ক্রিয়ার শেষে “তেই হবে” থাকলে তার ইংরেজি অনুবাদ করার সময় মাস্ট এর ব্যবহার করা হয়।`,



`Sub + must + v1 + other words.(বাধ্যকতা)
I must go there. আমাকে সেখানে যেতেই হবে।
All passengers must hold a valid ticket. সকল যাত্রীদের একটি বৈধ টিকেট থাকতে হবে।`,



`অতীত, বর্তমান এবং ভবিষ্যতের বাধ্যকতা বোঝাতে must এর ব্যবহার করা হয়।
We must be there at 9:00 tomorrow. আগামীকাল নয়টায় ওখানে থাকতেই হবে।`,







`Must যখন noun হিসাবে ব্যবহৃত হয় তখন এর অর্থ হয় খুবই জরুরী বা পড়তে আবশ্যক কোন জিনিস যা ছাড়া চলা সম্ভব নয়।
Is your father's consent a must? তোমার বাবা সিদ্ধান্তই কি সবকিছু? অথবা তোমার বাবা সিদ্ধান্ত কি সবচেয়ে বেশি জরুরী?`,




`পূর্ণাঙ্গ অনুমান করার ক্ষেত্রে must এর ব্যবহার করা হয়।
Sub + must be + other words.
He must be a rich man. মনে হয় সে একজন অবশ্যই ধনী লোক হবে। (কারো একটা সুন্দর বাড়ি দেখে অন্য একজন অনুমান করে বলছে যে সে অবশ্যই একজন ধনী লোক হবে যেহেতু তার একটা এত সুন্দর বাড়ি আছে)
You must be tired. তুমি তো দুর্বল হয়ে গেছো। অথবা,তোমার তো দুর্বল হওয়ার কথা। (একজন লোক মাঠ থেকে কাজ করে এসেছে এবং সেখানে গেছে তা দেখে আরেকজন অনুমান করে বলতেছে তুমি যেভাবে ঘেমে গেছো মনে হয় তুমি অবশ্যই দুর্বল হয়ে গেছো)`,











`নিষিদ্ধ অর্থে must এর ব্যবহার করা হয়।
Sub + must not + v1 + other words.
He must not use abuse language. গালাগালি করা চলবে না। অথবা, সে গালাগালি করতে পারবে না।
Mobile phone must not be used here. এখানে মোবাইল ব্যবহার করা যাবে না।
You must not smoke here. তুমি এখানে কোনক্রমেই ধূমপান করতে পারো না।`,





`দৃঢ় সুপারিশ উপদেশ দেওয়ার ক্ষেত্রে must এর ব্যবহার করা হয়।
You must watch this movie. তুমি এই সিনেমাটি দেখ। (অর্থাৎ সিনেমাটি সে দেখেছিল আর দেখার পর তার খুব ভালো লেগেছিল তারপর সে অন্যজনকে সুপারিশ করছে সিনেমাটি দেখার জন্য)
You must read this book, it's amazing. তোমার এই বইটি পড়া দরকার, এইটা চমৎকার।`,






`বর্তমান সময়ে কেউ কোন কাজ করছে বলে অনুমান করা হয় আর সেই অনুমানটি যদি ৯৯ শতাংশ নিশ্চিত হওয়া যায় তাহলে নিচের structure টি ব্যবহার করা হয়।
Sub + must be + v4 + other words.
He must be watching TV. মনে হয় সে টিভি দেখছে।
They must be quarreling. মনে হয় তারা ঝগড়া করছে।`,





`Sub + must + v1 (be as main verb).
You must be here on time. সময়মত তোমাকে এখানে আসতেই হবে।
There must be some fruit in the fridge. ফ্রিজে কিছু ফল থাকতেই হবে।`,




`বর্তমানে দাঁড়িয়ে অতীতকালের কোন ঘটনা অনুমান করা, আর সেই অনুমানটি যদি ৯৯% নিশ্চিত হওয়া যায় তাহলে নিচের স্ট্রাকচারটি ব্যবহার করা হয়।
Sub + must have + v3 + other words.
It must have rained last night. মনে হচ্ছে রাতে বৃষ্টি হয়েছিল। (রাত্রে বৃষ্টি হয়েছিল আর আপনি সকালে রাস্তা দিয়ে হাঁটছিলেন হাঁটার সময় দেখলেন রাস্তা ভিজা। ঠিক এই সময় আপনি বলতে পারেন যে নিশ্চয়ই রাত্রে বৃষ্টি হয়েছিল না হয় রাস্তা ভিজা থাকবে কেন? এইরূপ অতীত কালের একটি দৃঢ় অনুমান করার জন্য উপরের structure টি ব্যবহার করা হয়।)
কেউ কোন জায়গায় আছেই মনে করা হয় এই অর্থে নিচের structure টি ব্যবহার করা হয়।
Sub + must have + v3 of verb be + other words.
He must have been in the house last night. গতরাতে সে ঘরেই ছিল।`,







`Present assumption বর্তমান পরিস্থিতি দেখে কোন কিছু অনুমান করার ক্ষেত্রে must এর ব্যবহার করা হয়।Sub + must have + other words.
He must have a lot of money. তার অনেক টাকাও থাকতে পারে। (একজন লোক ফিটফাট, দামি ঘড়ি,দামি চশমা, দামি পোশাক পড়ে আছে। আর এটা দেখে আপনার মনে হচ্ছে তার নিশ্চয়ই একটা গাড়িও থাকতে পারে যেহেতু তার চালচলন ধনী লোকের মত।)
কোন কিছু থাকতেই হবে এরকম অর্থ প্রকাশ করার জন্য নিচের স্ট্রাকচারটি ব্যবহার করা হয়।
Sub + must have + other words.
You must have a lot of money to be a member of this club. এই ক্লাবের সদস্য হওয়ার জন্য তোমার অনেক টাকা থাকতেই হবে।`,





`Must have এর passive.
Object + must have been + v3 + other words.
The chair must have been broken by him.
মনে হয় চেয়ারটা তার দ্বারাই ভাঙ্গা হয়েছে।
He must have been beaten. তাকে পিঠানো হয়েছে বলে মনে হয়। অথবা মনে হয় তাকে পিঠানো হয়েছে।`,









`Interrogative sentence of “must”. Must দ্বারা প্রশ্নবোধক বাক্য তৈরি করা।
Must I go? আমাকে কি যেতেই হবে?
Must I not go? আমাকে কি যেতেই হবে না? 
অথবা, Mustn’t I go?(Negative interrogative)
I must not go. আমাকে যেতেই হবে না। (Negative sentence)
Must we not go to the playground? আমাদেরকে কি খেলার মাঠে যেতেই হবে না।`,





`Sub + must have been + v4 + other words.
To be searched in the web.`,







`We must find the truth. আমাদেরকে সত্যটা উদঘাটন করতেই হবে।
I must join him. আমাকে তার দলে নাম লিখাতে হবে।
You must discuss important issues even in that situation. তার মধ্যেও কাজের কথা সেরে ফেলতে হবে।
There must be something wrong with you, so your wife has left you. নিশ্চয় তোমার কোন সমস্যা আছে তাই তোমার স্ত্রী তোমাকে ছেড়ে চলে গেছে।
You must rectify this mistake. আমাদেরকে ভুলটা সংশোধন করতে হবে।
I must maintain her honor. তার মর্যাদর সম্মান তো আমাকে রাখতেই হবে।
You must feel ashamed. তোমার লজ্জিত হওয়া উচিত।
I must feed you before you leave. কোন কিছু না খাওয়াইয়া আপনাকে ছাড়ি কি করে।
I must give people their due respect.
যার যেটুকু সম্মান পাওয়ার যোগ্য তাকে সেইটুকু সম্মান দিতেই হবে।
A few opportunist women must be trying to trap a man me. তোমার মত কয়েকজন স্বার্থপর মহিলা আমার মত ছেলেকে ফাঁদে ফেলার জন্য চেষ্টা করবেই তো।


You must concentrate on your son now. এবার একটু  তোমার ছেলের দিকে নজর রেখো


You must not jump around with an empty stomach. খালি পেটে লাফালাফি করতে নেই।



You must be hungry. তোমার খিদে পেয়েছে। (সকাল থেকে যখন তুমি কিছু খাওনি তাহলে তোমার অবশ্যই খিদে লেগেছে।)


She must have felt so bad. সে হয়তো খুব খারাপ ভাবিয়ে থাকবে। অথবা সে কিভাবে বল তো।



One must not take any gifts. কোন রকম দান নিতে নেই।


He must stop visiting her house. ওকে তার বাড়ি যাওয়া বন্ধ করতে হবে।


Mom must be worried. মা চিন্তা করবে।


You must look after all the arrangements but now you are standing here and shedding tears. কোথায় তুমি নিজে দাঁড়িয়ে থেকে সব আয়োজন করবে তা না এখানে দাঁড়িয়ে দাঁড়িয়ে চোখের জল ফেলছো।


You must treat me to hot coffee but you are calling me bad. কোথায় আদর করার একটু চা খাওয়াবে তা না আরো উল্টো আমাকে মন্দ বলতেছ।



You must give the house rent by the first date of the month. মাসের প্রথম তারিখে বাড়ি ভাড়াটা দিয়ে দিতে হবে।


You must not take into heart. কিছু মনে করবেন না।


I don't know where he must be. জানিনা সে এখন কোথায় আছে।


I must take her back. আমি অবশ্যই ওকে ফিরিয়ে নিয়ে আসবো।


You must not stay in this house anymore. তোমাকে আর এ বাড়িতে থাকতে দেওয়া যাবে না।


Then you must go there and check on your sister. তাহলে তোমরা যাও তোমাদের আপাকে একবার দেখে এসো।


We must arrange something. একটা কিছু তো ব্যবস্থা করতে হবে।


God knows, what he must be thinking. সৃষ্টিকর্তা জানে সে কি ভাবছে।


One must work at ease. কাজ ধীরে ধীরে করতে হয়।


We must prove to your mother that you are my son. তোমার মাকে দেখিয়ে দিতে হবে যে তুমি আমার উপযুক্ত সন্তান।


I must say that you have brought him up very well. আমাকে অবশ্যই বলতে হবে যে তুমি তাকে ছোট থেকে বড় করেছো।


You must try it, it's amazing. খেয়ে দেখুন দারুন হয়েছে।


You must not address such a famous singer by his name. এত বড় গায়কের নাম ধরে ডাকতে নেই।




No one must be say that. কেউ যেন কখনো বলতে না পারে।


I must use this to my advantage. এটাকে আমার স্বার্থের কাজে লাগাতে হবে।


One of our employees must have leaked the news. কর্মচারীদের মধ্যে থেকে হয়তো কেউ খবরটা ফাঁস করে দিয়েছে।



Must I consider my love to be an accident? আমি কি আমার প্রেমকে দুর্ঘটনা মনে করব।


I know, you must not have had any peace after you made this mistake. আমি জানি যে তুমি এই ভুল করার পর শান্তিতে থাকতে পারছ না।`

];

export default function MustScreen() {
  return <GrammarScreen sectionTitles={sectionTitles} sectionText={sectionText} />;
}
