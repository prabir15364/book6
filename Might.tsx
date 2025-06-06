import React from "react";
import GrammarScreen from "../../common/GrammarScreen";

const sectionTitles = [
"Passive of might.",
"Interrogative of might",
"Negative of might.",
"Negative interrogative of might.",
"Might have to.",
"Might have to be + v3",
"Might have had to",
"Might have had to be + v3",
];

const sectionText = [
  `Might একটি modal verb। এই অধ্যায় আমরা might এর ব্যাপক ব্যবহার সম্পর্কে শিখব। যেমন: might + v1, might be, might be + noun/pronoun, might be + v3, might be + v4, might have + might have + v3, might have been + v3, might have been + v4 etc.




Might 20%-- 25% possibility or surety এর ক্ষেত্রে মাইকের ব্যবহার করা হয়।
It might rain. বৃষ্টি হতে পারে।
I might call you. আমি তোমাকে ডাকতে পারি।
They might come to visit us. তারা আমাদেরকে দেখতে আসতে পারে।`,






`Suggestion দেওয়ার ক্ষেত্রে might এর ব্যবহার করা হয়।
 You might catch a taxi. তুমি টেক্সি ধরতে পার। ( তাড়াতাড়ি পৌঁছার জন্য suggestion দেওয়া।) 
You might go to the mall. তুমি শপিং মহলে যেতে পার। (তুমি যদি এরকম একটা জামা কিনতে চাও তাহলে শপিং মহলে যাও)
You might like the mango flavored ice creams. তুমি আমের ফ্লেভার পছন্দ করতে পারো। ( আমরা আইসক্রিম খেতে গেলাম। আমার বন্ধু জিজ্ঞেস করল কোন আইসক্রিম খাবো ম্যাঙ্গো না ভেনিলা। তখন আমি সাজেস্ট করলাম ম্যাংগো ফ্লেভার।)`,




`Formal and polite request and permission এর ক্ষেত্রে might এর ব্যবহার করা হয়।
Might I have a cup of tea? আমি কি এক কাপ চা পেতে পারি?
Might I join the meeting? আমি কি মিটিংয়ে যেতে পারি?
Might I borrow your pen? আমি কি আপনার কলম ধার নিতে পারি ‍?
(Permission দেওয়ার ক্ষেত্রে কখনো might এর ব্যবহার হয় না।)`,






`May এর past tense হিসাবে might এর ব্যবহার করা হয়।
He said that he might be late. সে বলেছিল যে তার দেরি হতে পারে।
I thought I might go to the party. আমি ভেবেছিলাম আমি হয়তো পার্টিতে যেতে পারি।`,




`Conditional sentence এ might এর ব্যবহার করা হয়।
If I participate I might win the competition. যদি আমি অংশগ্রহণ করি তাহলে প্রতিযোগিতায় জিততে পারি।
If I get late I might not get the entry. আমার দেরি হলে আমি পাস না পেতে পারি।
If we leave now we might catch the train. যদি আমরা এখন বেরিয়ে পড়ি আমরা ট্রেনটা ধরতে পারবো।`,





`Sub + might be + other words 
Your phone might be on the tower. তোমার ফোন টেবিলের উপর থাকতে পারে।
He might be in the room. সে রুমে আছে মনে হয়।
He might be in. হতে পারে সে অসুস্থ। (অথবা সে অসুস্থ হতে পারে)
He might be a good teacher, but he is weak in English. সে একজন ভালো শিক্ষক হতে পারে কিন্তু সে ইংলিশে দুর্বল।
He might be a farmer. সে একজন কৃষক হতে পারে।
This hotel might be luxurious. হোটেলটি বিলাসবহুল হতে পারে।`,







`Sub + might have to + v1 + other words.
He might have to go. তাকে যেতে হতে পারে।
You might have to pay some money. তোমাকে কিছু টাকা দিতে হতে পারে। (তোমাকে হয়তো কিছু টাকা দিতে হবে)



Object + might have to be + v3 + other words. (Passive voice of might have to) ইউটিউবে সার্চ দিয়ে দেখতে হবে।`,






`Sub + might be + v4 + other words.
Aman might be doing his homework. আমার তার বাড়ির কাজ করছে মনে হয়।
He might be having a cup of tea. সে চা খাচ্ছে মনে হয়।
Mom might be cooking rice. মা ভাত রান্না করছে মনে হয়।`,




`Sub + might have + v3 + other words.
He might have been late as he missed his exam.  হয়তো তার দেরি হওয়াতে সে পরীক্ষায় অংশগ্রহণ করতে পারেনি।
You might have watched the movie. তুমি হয়তো সিনেমাটি দেখে ফেলেছ।
He might have played football. মনে হয় সে ফুটবল খেলে ফেলেছে।`,




`Object + might have been + v3 +  other words.
The movie might have been watched. সিনেমাটি হয়তো দেখা হয়ে গেছে।
Football might have been played. হয়তো ফুটবল খেলা হয়ে গেছে।



Object + might be + v3 + other words. (বাংলা ভাত খেয়ে ক্রিয়ার শেষে যাইতে পারে, হয়েছে বলে মনে হয় ইত্যাদি থাকলে উপরের structure টি ব্যবহার করা হয়।
He might be given a pen. তাকে একটি কলম দেওয়া যেতে পারে। (অথবা তাকে একটা কলম দেওয়া হয়েছে মনে হয় / হয়তো তাকে একটি কলম দেওয়া হয়েছে।)
Price of rice might be dropped. চালের দাম কমে যাইতে পারে।`,






`Possession এর ক্ষেত্রে might এর ব্যবহার করা হয়। 
He might have a bungalow. তার একটি ছোট বাড়ি থাকতে পারে।
He might have a dog. তার একটি কুকুর থাকতে পারে।




Sub + might have + v3 of verb be + other words.
He might have been a doctor. সে ডাক্তার হয়ে গেছে বলে মনে হয়। (সে হয়তো ডাক্তার হয়ে গেছে।)
The price of price might have been as usual. চালের দাম স্বাভাবিক (যথারীতি) হয়ে গেছে বলে মনে হয়।`,



`Sub + might have been + v4 + other words.
He might have been going to the doctor last match. হয়তো গতরাতে সে ডাক্তারের কাছে যাচ্ছিল। (গতরাতে সে ডাক্তারের কাছে যাচ্ছিল বলে মনে হয়।),










This might be a reflection of that. এটা মনে হয় তারই একটা প্রতিশোধ।




He might get killed any day because of that and. তার জন্য সে যে কোন সময় খুন হতে পারে।




Where might she be? সে কোথায় থাকতে পারে?






Nisha might get a misconception. নিশাতো ভুল বুঝতে পারে।`,

];

export default function MightScreen() {
  return <GrammarScreen sectionTitles={sectionTitles} sectionText={sectionText} />;
}
