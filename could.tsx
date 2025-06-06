import React from "react";
import GrammarScreen from "../../common/GrammarScreen";

const sectionTitles = [
  "Could",
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
  `Could একটি modal verb, অতীতে কোন কাজ করার ক্ষমতা ছিল এরূপ অর্থ প্রকাশ করার জন্য could এর ব্যবহার করা হয়। বাংলা ভাইকে ক্রিয়ার শেষে পারতাম থাকলে “could” এর ব্যবহার করা হয়।যেমন আসতে পারতাম, যেতে পারতাম, গান গাইতে পারতাম ইত্যাদি।  সামর্থ্য ছিল অর্ধেক কুড়ের ব্যবহার করা হয়।(past ability)
I could sing. আমি গান গাইতে পারতাম।
I could run fast. আমি দ্রুত দৌড়াতে পারতাম।
She couldn't manage attend the party. সে পার্টিতে আসতে পারল না।
I couldn't make him understand. আমি তাকে বোঝাতে পারিনি।`,


`Possibility অর্থে could এর ব্যবহার হয়।
Could it be true? এটা কি সত্য হতে পারে?
বর্তমানে কোন ঘটনা দেখে ভবিষ্যতে কিছু ঘটতে পারে বা অনুমান করা অর্থে “could” এর ব্যবহার করা হয়।
Drive carefully, you could meet with an accident. সতর্কতার সহিত গাড়ি চালাও, দুর্ঘটনা করে বসতে পারো।
Sub + could be + other words.
This business could be dangerous for you.
এই ব্যবসাটি তোমার জন্য বিপদজনক হতে পারে।`,


`ইচ্ছা প্রকাশ করার জন্য could এর ব্যবহার করা হয়।
I wish I could go to the Switzerland. আমি যদি সুইজারল্যান্ড যেতে পারতাম।
Informal suggestion দেওয়ার ক্ষেত্রে could এর ব্যবহার করা হয়।
If you want you could stay here. চাইলে তুমি এখানে থাকতে পারো।
You could take tea instead of coffee. চা এর বদলে তুমি কফি নিতে পারো। Permission দেওয়া এবং নেওয়ার ক্ষেত্রে could এর ব্যবহার করা হয়।
Could + sub + v1 + other words.
Could I have your pen?`,


`Polite request এর ক্ষেত্রে could এরব্যবহার করা হয়।
Could I take this jacket? আমি কি জ্যাকেটটা নিতে পারি।
Could I go now? আমি কি এখন যেতে পারি?
Couldn't I have a glass of water? আমি কি এক গ্লাস পানি পেতে পারি না?
Could you open the door for me. তুমি কি আমাকে দরজাটা খুলে দিবে।
Polite offer দেওয়ার ক্ষেত্রে “could” এর ব্যবহার করা হয়।
Could I give you a lift? আমি কি তোমাকে লিফট দিব?
I could carry your bag. আমি তোমার ব্যাগ নিতে পারব।`,


`Could এর passive voice.
Passive voice এর object + could be + v3 + other words.
বাংলা বাক্যে ক্রিয়ার শেষে “য়া” যুক্ত হয়ে এরপর যায় থাকলে ইংরেজি বাক্য গঠন করার সময় could এর passive form ব্যবহার করা হয়। যেমন দেওয়া যায়, খাওয়া যায়, নেওয়া যায়, ভাঙ্গা যায়, পটানো যায় ইত্যাদি।
She could be cajoled by giving her chocolate.
She could be cajoled by giving her chocolate.
চকলেট দিয়ে তাকে পটানো যায়।
Such sticks could be broken easily. এরকম লাঠিগুলো সহজে ভাঙা যায়।
Can এর past tense হিসাবে could এর ব্যবহার করা হয়।
He said, “the question can be solved”.
সে বলেছিল, ,”প্রশ্নটা সমাধান করা যায়”।
He said that the question could be solved.
সে বলেছিল যে প্রশ্নটা সমাধান করা যাবে।
Passive voice of modal verb could
Object of active voice + could be + v3 + by + subject of active voice.
The job could be done by him. কাজটি তার দ্বারা করা হতো।
The stars could not be counted by us. আমাদের দ্বারা তারা গণনা করা সম্ভব হতো না।
Could this lesson be explained by you? এই পাঠটা কি তোমার দ্বারা বুঝানো সম্ভব হতো?
I could be sent back home; but he gave me another chance. আমাকে বাড়িতে পাঠিয়ে দিতে পারতো; কিন্তু সে আমাকে আরেকটা সুযোগ দিল।
It could be easily done; but I couldn't do.
এটা সহজে করা যেত কিন্তু আমি করিনি।
 `,
 
 
 
`Sub + could + have as main verb + other words
She could have a pen. তার একটি কলম থাকতে পারে।
He could have a good house.
তার একটা ভালো বাড়ি থাকতে পারে।
Sub + could have + v3 + other words (To make conditional sentences)
He could have had a good house if he had a good job. যদি তার একটা ভালো চাকরি থাকতো তাহলে তার একটা ভালো বাড়ি থাকতো।
He couldn't have had such a great opportunity if I hadn't supported him. যদি আমি ওকে সাহায্য না করতাম তাহলে এত বড় সুযোগ সে পেত না।
You could have answered earlier. উত্তরটা প্রথমে দিয়ে দিতে পারতে। অথবা, উত্তরটা প্রথমে দিলে হতো।
Could have been + v3 
This information could have been shared among the public but I thank God, nothing happened as such. 
এই তথ্যগুলো জনগণের মধ্যে প্রকাশ হয়ে যেতে পারত কিন্তু ঈশ্বরের সহায় এরকম কিছু ঘটে নি।
Sub + could have to + v1 + other words
I could have to go. আমাকে যেতে হতে পারে।
You could have to go to school. তোমাকে স্কুলে যেতে হতে পারে।
Sub + could have had to + v1 + other words
I could have had to go. আমাকে যেতে হতো। অথবা, আমাকে যেতে হয়েছিল।`,




`অতীতে কোন কাজ কারো পক্ষে করা সম্ভব ছিল কিন্তু করেনি এরকম অর্থে “could have”ব্যবহার করা হয়।
Sub + could have + v3 + others
You + could have + come + come + to the party. তুমি পার্টিতে আসতে পারতে। ( কিন্তু আসনি)
You could have waited for me. তুমি আমার জন্য অপেক্ষা করতে পারতে।
Negative sentence of could have. 
Sub + couldn't have + v3 + other words.
I couldn't have done this without your help.
তোমার সাহায্য ছাড়া আমি এটা করতে পারতাম না।
could বর্তমান সময়ে দাঁড়িয়ে অতীতের কোন ঘটনা না ঘটার জন্য আফসোস করার ক্ষেত্রে couldn’t ব্যবহার হয়।
Sub + couldn't + other words.
I couldn't become an actor. আমি অভিনেতা হতে পারিনি। অথবা, আমি অভিনেতা হতে পারলাম না। 
He could not come home. সে ঘরে আসতে পারেনি। অথবা, সে ঘরে আসতে পারল না।
How could he buy such an expensive phone?
সে কিভাবে এত দামি ফোন কিনতে পারল?`,



`Sub + could + be as main verb.
It could be so risky; but somehow I managed. এটা ঝুঁকিপূর্ণ হতে পারতো; কিন্তু কোন প্রকারে আমি সেরে নিলাম।
It could be so risky; don't do it. এটা করো না; এটা ঝুঁকিপূর্ণ হতে পারে।`,



`Imaginary sentence তৈরি করার ক্ষেত্রে could এর ব্যবহার করা হয়।
I wish! + could/ could be/ could have + other words.
I wish! You could understand my feeling. তুমি যদি আমার অনুভূতি বুঝতে পারতে!
I wish! You come here.
তুমি যদি এখানে আসতে পারতে!
I could be sant back home if I don't perform well.
আমি কার্যসম্পাদন না করি তাহলে আমাকে ঘরে পাঠিয়ে দিতে পারে।
We could never tell her the truth to hide our shame. নিজের লজ্জা ঢাকার জন্য আমরা কোনদিনও ওকে সত্য বলতে পারেনি।
He could have done better. সে আরো ভালো করতে পারতো।
Could anyone keep balance of mind in this condition? এই অবস্থায় কি কেউ মনের ভারসাম্য ধরে রাখতে পারে?
This could have happen too. এরকমও তো হতে পারতো।
Otherwise the audience could not be handled.
নইলে দর্শকদের সামলানো যাবে না।
We could have spoken to Shalu about the alliance and fixed it properly. সালুর সাথে কথা বলে বিয়ে কথাবার্তাটা পাকা করে ফেলতে পারতাম।
I could not even imagine that you would come. আমি কল্পনাও করতে পারিনি যে আপনি আসবেন।
Couldn’t we leave after playing the race on Saturday? শনিবারের রেসটি খেলে গেলে হতো না?
Couldn't you leave after some days? আর কদিন পরে গেলে হতো না।
She could have just called me. উনি আমাকে ডেকে পাঠালেই তো পারতেন।
He could not share it with anyone. তিনি কাউকে বলতে পারেননি।
We could not see the neighbourhood in the dark. আমরা অন্ধকারের ভিতর পাড়াটি দেখতে পায়নি।
I could have done my make-up myself. আমি নিজে নিজে সেজে নিতে পারতাম।
You could have done without insulting me in front of that child. ওই ছেলেটার সামনে আমাকে অপমান না করলে কি তোমার হতো না। অথবা, তুমি আমাকে ওই ছেলেটার সামনে অপমান না করলেও পারতে।
You could have told me about your denial earlier. আপনারা অমতটা আগে জানিয়ে দিতে পারতেন। অর্থাৎ, আপনি যে রাজি ছিলেন না সে বিষয়টা আগে জানিয়ে দিতে পারতেন।
How could you say something like this? এমন কথা তুমি বলতে পারলে?
We could have collected that much among ourselves. আমরা সেই পরিমাণ টাকা নিজেরাই চাঁদা তুলে নিতে পারতাম।
He could not control his greed for this much money. সে সামান্য কটা টাকার লোভ সে ছাড়তে পারল না।
How could you accuse a nice man like him?
এরকম একটা ভালো লোকের বিরুদ্ধে এত বড় বদনাম দিতে পারলে?
You could not offer me anything I wanted. যা যা খেতে চাইলাম তার একটাও তো জুটলো না।`,




`Do you think I am happy that the surgery couldn't be performed? আপনি কি মনে করেন অপারেশন না হলে আমার খুব ভালো লাগবে?
Could I not be scared? ভয় পাবো না?
She couldn't see you in trouble. উনি আপনার কষ্ট সহ্য করতে পারল না।
It could take days it could take month. এটা দিনে হতে পারে রাতেও হতে পারে।
Hi could not sleep all night yesterday. কাল সারারাত ঘুমাতে পারিনি।
Since yesterday, I couldn't find my son. গতকাল থেকে আমার ছেলেকে খুঁজে পাওয়া যাচ্ছে না।
You could have informed me about your arrival.
তোমার আসার কথাটা তুমি আমাকে জানাতে পারতে।
Who else could have written this? এগুলো আর কে লিখিয়া থাকতে পারে?
I could even avert a storm. এমনকি আমি তুফানের মোরও ফিরিয়ে দিতে পারি।
I could forsake the world for you. আমি তোমার জন্য পৃথিবীও ছেড়ে দিতে পারি।
What could be better for me than to see you happy. তোমাকে খুশি দেখার চাইতে ভালো আমার জন্য আর কি হতে পারে।
I could have continue to love with you silently all my life. নীরব থেকে সারা জীবন আমি তোমাকে ভালবেসে যেতাম।
I could not pick up a big piece. বড় পিচ উঠলোই না। অথবা, আমি একটা বড় পিচও তুলতে পারলাম না।
You could  just drop me home. আপনি যদি আমাকে একটু বাড়ি পৌঁছে দেন।
Where could you be going? তুমি কোথায় যাচ্ছ?`,



`He could not enjoy the first night of his honeymoon. সে বাসর ঘর করতে পারেনি।
How could you insult her? তাকে তুমি এভাবে অপমান করতে পারলে?
I couldn't live without you. তোমাদের ছেড়ে থাকতে পারলাম না।
What could be so urgent? এমন কি কাজ হতে পারে?
If you could send someone along. কাউকে যদি সঙ্গে পাঠাতে পারতেন।
Just as he could not stay without you even you could not stay without him. সে যেরকম তোমাকে ছাড়া থাকতে পারত না ঠিক তেমনি তুমিও তাকে ছাড়া থাকতে পারতে না।

`,
];

export default function CouldScreen() {
  return <GrammarScreen sectionTitles={sectionTitles} sectionText={sectionText} />;
}
