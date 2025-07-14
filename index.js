//Random joke generator
const jokeList = [
  "Why don't scientists trust atoms?Because they make up everything!Even this joke.",
  "I told my computer I needed a break.It gave me a blue screen.So considerate!",
  "Why did the scarecrow win an award?Because he was outstanding in his field.Corny, I know.",
  "Parallel lines have so much in common.It's a shame they'll never meet.Tragic geometry.",
  'I asked the gym instructor if he could teach me to do the splits.He said, "How flexible are you?"I said, "I can\'t make it on Tuesdays."',
  "Why don't skeletons fight each other?They don't have the guts.Just bones about it",
  "I tried to catch fog yesterday.Mist.Again today.",
  "What's orange and sounds like a parrot?A carrot.Gotcha.",
  "I told my wife she was drawing her eyebrows too high.She looked surprised.Permanently.",
  "Why did the bicycle fall over?It was two-tired.Needed a nap.",
];
let randNum = Math.floor(Math.random() * 10);
let joked = jokeList[randNum];
document.getElementsByTagName("joke")[0].innerHTML = `${joked}`;
