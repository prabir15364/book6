import React from "react";
import GrammarScreen from "../../common/GrammarScreen";

const sectionTitles = [
"Used to",
"Sub + Used to + V1 + Other words",
"used to এর Negative sentence",
"Interrogative sentence of used to",
"Tag question of 'used to'",
"Passive voice of used to",
"Sub + used to + be (v1 of to be verb)",
"Sub + to be + used to (as adjective)",
"Sub + helping verb + get + used to",
];

const sectionText = [
`Would একটি Modal Verb এই অধ্যায়ে আমরা Would এর বিস্তারিত ব্যবহার সম্পর্কে শিখব।
Would, Would be, Would be + v4, Would be + v3 + Would have + Would have + v3, Would have been, Would have been + v4, Would have to, Would have had to etc.`,



`Sub + would + v1 + other words.
Will এর future tense হিসাবে would এর ব্যবহার করা হয়।
He said, “I will come”. (Direct speech) সে বলেছিল, “আমি আসবো”।
He said that he would come.(Indirect speech) সে বলেছিল যে সে আসবে।
Polite request এর ক্ষেত্রে Would এর ব্যবহার করা হয়।
Would you please solve this question? আপনি কি প্রশ্নটার সমাধান করে দিবেন?
Would you mind opening the door please?
আপনি কি দয়া করে দরজাটা খুলে দিবেন?
Positive answer : No, I would not.
Negative answer : Yes, I would.
Would you mind দ্বারা গঠিত প্রশ্নের positive answer হবে No, I would not এবং negative answer হবে Yes, I would.
কারণ “would you mind” এর অর্থ হচ্ছে “আপনি কি কিছু মনে করবেন”। যদি বলা হয় “Yes, I would” তার অর্থ হচ্ছে “হ্যাঁ আমি কিছু মনে করব”। আর যদি বলা হয় “No, I would not” তার অর্থ হচ্ছে “না আমি কিছু মনে করব না”।`,




`Order এবং proposal চাওয়ার ক্ষেত্রে would এর ব্যবহার করা হয়।
Would you like to go on a long drive with me? আপনি কি আমার সাথে দীর্ঘ ভ্রমণে যাবেন?
Would you like to earn money through blogging? আপনি কি ব্লগিং করে টাকা উপার্জন করতে চান?`,





`Possibility এবং uncertainty এর অর্থ প্রকাশ করার জন্য  would এর ব্যবহার করা হয়।
As per as I know your father, he would not accept this proposal. আমি যতখানি তোমার বাবাকে জানি, সে এই প্রস্তাব গ্রহণ করবে না।
I think it would rain today. আমার মনে হয় আজ বৃষ্টি হবে।(possibility)`,




`কোন কিছু করতে চাওয়া এর অর্থ প্রকাশ করার জন্য would এর ব্যবহার করা হয়।
I would like to meet you today. আমি আজ আপনার সাথে দেখা করতে চাই।
I would like to earn more money so that I could buy a new scooty for myself. আমি আরো টাকা উপার্জন করতে চাই যাতে করে আমি নিজেই নিজের জন্য একটা নতুন বাইক কিনতে পারি।`,




`Would be” বাংলা বাক্যে কর্তা এর পরে হয়তো, হইতাম, থাকতাম  থাকলে would এর ব্যবহার করে ইংরেজি অনুবাদ করা হয়।
He would be a singer today. সে আজ একটা গায়ক হইত।
I would be in America right now. এই সময় আমি আমেরিকা থাকতাম।
Whenever I would go to his house he would be at home. আমি যখনই তার ঘরে যেতাম সে ঘরে থাকতো।`,





`Sub + would be + v4 + other words.
He would be working in that company today. আজ সে ওই কোম্পানিতে কাজ করতে থাকতো।
I wish, I would be teaching him English! যদি আমি তাকে ইংরেজি শিক্ষা দিতে পারতাম।
He would be playing right now. সে এই সময় খেলছে মনে হয়।
Would he be going to office these days? I don't think. সে আজকাল অফিসে যাচ্ছে বলে আমার মনে হয় না।`,






`Sub + would have + v3 + other words.
বাংলা বাক্য করিয়া ফেলেছে, খাইয়া ফেলেছে, দিয়ে ফেলেছে, করিয়া থাকিত, খাইয়া থাকিত, দিয়া থাকিত ইত্যাদি থাকলে উপরের structure টি ব্যবহার করে ইংরেজি অনুবাদ করা হয়।
If I hadn’t requested the driver, the bus would have left by now. আমি যদি ড্রাইভারকে অনুরোধ না করতাম, বাসটি এতক্ষণে চলে যেত।
I would have made a mistake! Thanks God, I finally made the right decision. আমার ভুল হয়ে যেত! সৃষ্টিকর্তার কৃপায়, অবশেষে আমি সঠিক সিদ্ধান্ত নিলাম।
He would have played the match by now. সে এতক্ষণে ম্যাচ খেলে ফেলেছে।
The bus would have left by now. বাসটি এতক্ষণে ছেড়ে দিয়েছে।`,





`অনুমান করার ক্ষেত্রেও would এর ব্যবহার করা হয়।
That would be Rahim’s shirt. এটা রহিমের শার্ট হবে। অথবা, মনে হয় এটা রহিমের শার্ট।
It would be very expensive to stay in a hotel like that. এইরকম একটা হোটেলে থাকা খুবই ব্যয়বহুল বলে মনে হয়।`,





`Repetition of past habit এর ক্ষেত্রে would এর ব্যবহার করা হয়।
অর্থাৎ অতীতের কোন ঘটনা বর্তমানে ব্যক্ত করার জন্য would এর ব্যবহার করা হয়। বিশেষ করে কোন গল্প বা সত্যিকারের ঘটে যাওয়া ঘটনাকে ব্যক্ত করার জন্য অতীতের ঘটনাগুলোকে বারবার বলার ক্ষেত্রে would এর ব্যবহার করা হয়।
We used to play football then I would go to my friend’s home, I would watch TV and after that I would come back home. আমরা ফুটবল খেলতাম, তারপর বন্ধুদের বাড়িতে যেতাম, টিভি দেখতাম এবং তারপর আমি বাড়ি ফিরে আসতাম।`,




`Conditioner sentence এ would এর ব্যবহার।
If I went, he would come. যদি আমি যেতাম,  সে আসতো।
I would have a beautiful house if I got a good job. আমি যদি একটা ভালো চাকরি পেতাম তাহলে আমার একটা সুন্দর বাড়ি থাকতো।`,





`প্রাধান্য দেওয়ার ক্ষেত্রে wood এর ব্যবহার করা হয়।
Would it be okay if I call you after 10 minutes? তোমাকে দশ মিনিট পরে কল দিলে কোন সমস্যা হবে না তো?`,



`Preference বা পছন্দ করার ক্ষেত্রে would এর ব্যবহার করা হয়।
She would go for the black carpet rather than blue. সে ব্লু কালারের চেয়ে বরং লাল রঙের কার্পেট বেশি পছন্দ করবে।
I would rather die than beg. আমার ভিক্ষা করার চাইতে বরং মরে যাওয়া ভালো।`,

`Sub + would prefer to + v1 + other words.
I would prefer to play cricket. আমি ক্রিকেট খেলতেই বেশি পছন্দ করি।, অথবা, ক্রিকেট খেলতেই আমার বেশি ভালো লাগে।`,



`Sub + would like to + v1 + other words.
Saima would like to talk over the phone rather than chat. সাইমা মেসেজ করার চাইতে ফোনে কথা বলা বেশি পছন্দ করে।`,



`Sub + would like to + v3 + other words. অতীতে কোন কিছু করতে চেয়েছিল কিন্তু করা হয়নি এরূপ অর্থ প্রকাশ করার জন্য উপরের structure টি ব্যবহার করা হয়।
My friend would like to have scored a good result in the exam, but he could not sit for the exam. আমার বন্ধু পরীক্ষায় একটি ভালো রেজাল্ট করতে চেয়েছিল, কিন্তু সে পরীক্ষা দিতে পারেনি।`,




`Sub + would love to + v1 + other words.
I would love to tell stories. আমার গল্প বলতে ভালো লাগে।`,




`Sub + would hate to + v1 + other words.
I would hate to tell a stories. আমার গল্প বলতে ভালো লাগেনা।`,







`Imaginary situation এর ক্ষেত্রে would এর ব্যবহার করা হয়।
Would that + sub + were + other words.
Would that I were rich! যদি আমি ধনী হতাম!`,





`Would এর passive voice.
Would be + v3 + other words.
He would be brought back as soon as money would be collected. টাকা যোগাড় হলে যথা শীঘ্রই সম্ভব তাকে ফিরে আনা হবে।`,





`2nd conditional sentence এ দিতে হতো, করতে হতো এরূপ অর্থ প্রকাশ করার জন্য Would have to এর ব্যবহার করা হয়।
If he didn’t have a lot of money, he would have to sell his land. যদি তার অনেক টাকা না থাকতো তবে তাকে জমিটা বিক্রি করতে হতো।
If I were rich, I would have to help you. যদি আমি ধনী হতাম তবে আমার তোমাকে সাহায্য করতে হতো।
If he had a lot of money, he would have to buy a car. যদি তার অনেক টাকা থাকতো তবে তাকে একটা গাড়ি কিনতে হতো।
 At that time, he was with me, or else I would have to be beaten. (passive) সে সময় সে আমার সাথে ছিল, তা-না হলে আমাকে মার খেতে হতো।
Fortunately, he helped me, otherwise I would have to suffer. (Hypothetical) সৌভাগ্যক্রমে সে আমাকে সাহায্য করেছিল, তা-না হলে আমাকে কষ্ট করতে হতো।`,






`3rd conditional sentence এ দিতে হতো, করতে হতো এরূপ অর্থ প্রকাশ করার জন্য Would have had to এর ব্যবহার করা হয়।
If you had come here, I would have had to help you. তুমি যদি এখানে আসতে তবে তোমাকে আমার সাহায্য করতে হতো।
If he hadn’t come here, we would have had to cancel our meeting. যদি সে এখানে আসতো তবে আমাদেরকে মিটিংটা বাতিল করতে হতো।
If he hadn't had a lot of money, he would have had to sell his land. যদি তার অনেক টাকা না থাকতো তবে তাকে তার জমিটা বিক্রি করতে হতো।
At that time, he had been with me, or else I would have had to be beaten. (Hypothetical) সে সময় সে আমার সাথে ছিল তা-না হলে আমাকে মার খেতে হতো।
Fortunately, he had helped me, otherwise I would have had to suffer. সৌভাগ্যক্রমে সে আমাকে সাহায্য করেছিল, তা-না হলে আমাকে কষ্ট করতে হতো।`,


`Who would love me? আমাকে কে ভালবাসবে?


The princess wouldn’t be awake yet. রাজকুমারীর ঘুম এখনও ভাঙ্গেনি।


I would have seen him to my eyes and heart content. ওকে দুচোখ দিয়ে প্রাণ ভরে দেখতাম।


I would have decided about him. আমি তার বিচার করতাম।


We would have gone at night. আজ রাতে চলে যেতাম।

How would I know? আমি কি করে জানব?


What else would happen? কি আর হবে?


Wouldn’t you brush my hair? আমার চুল আঁচড়ে দেবে না?


She would have so many wishes. সে কতই না আবদার করত।



Wouldn't it hurt your conscience  to hand me over to  an evil? একটা শয়তানের হাতে আমাকে তুলে দিতে তোমার বিবেক বাঁধলো না?



It would be great if it would get today. আজকে পেলে ভালো হয়।


They would not be able to contain excitement.
তারা আনন্দ সহ্য করতে পারল না। অথবা, তারা আনন্দ ধরে রাখতে পারল না।


It would be wrong if I call her a mere governess. শুধু গভর্নেস বললে ভুল হবে।



Or else, we wouldn’t have been able to save our sister. তা-না হলে আমরা আমাদের বোনকে বাঁচাতে পারতাম না।


It would be okay if I tell you as well. তা আপনাকে বললেও চলবে।


I wouldn’t have got married to anyone except the girl I have got married to. আমি যাকে বিয়ে করেছি তাকে ছাড়া অন্য কাউকে বিয়ে করতাম না।


Why would I have a problem? আমার আপত্তি থাকবে কেন?


He wouldn't have got married for the rest of his life. সে সারা জীবন বিয়েই করতো না।


I wouldn’t  like anyone to take advantage of our poverty and show mercy to us. আমাদের আর্থিক অনটনের সুযোগ নিয়ে কেউ আমাদের দয়া দেখাবে এটা আমি চাইনা।


I would like my son to mercy you. আমি চাই আমার ছেলে তোমার প্রতি দয়াবান হউক।


Why would you pay if she has a son? তার ছেলে থাকতে আপনি দিবেন কেন?




I would have touched her with the pride of love. প্রেমের অহংকারে আমি তাকে ছুঁতাম।


But these things wouldn’t work here in front of me. কিন্তু এখানে আমার সামনে এগুলো চলবে না।

If my father would have been alive today. আজ যদি আমার বাবা বেঁচে থাকতো।


In that case, there wouldn't be any chaos. তাহলে তো আর কোন বিশৃঙ্খলা হবে না।


I wouldn't have to sing with some other woman. তাহলে আর অন্য মেয়ের সাথে গান গাইতে হবে না।


He wouldn't have let go of him so easily. সে অত সহজে ওকে ছাড়তো না।



I would have made my business. আমি আমার ব্যবসাকে দাঁড় করাতে পারতাম।


Why would I be aloaf? আমি দূরে দূরে থাকবো কেন?`,
];

export default function UsedToScreen() {
  return <GrammarScreen sectionTitles={sectionTitles} sectionText={sectionText} />;}
