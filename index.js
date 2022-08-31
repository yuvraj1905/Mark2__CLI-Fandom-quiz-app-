const readLineSync = require("readline-sync");
const userName = readLineSync.question("What is your name? ");
console.log(`Hello ${userName.toUpperCase()}!!!
Welcome to FANDOM quiz on PUBG ! My Favourite Esports mobile game 🤠`);

var Score = 0;
const play = function (question, answer) {
  var userAns = readLineSync.question(question);

  if (userAns === answer) {
    console.log("Correct!!");
    Score++;
  } else {
    console.log("Wrong answer!");
  }
};

var questions = [
  {
    Question: "When was PUBG mobile launched? ",
    Answer: "2017",
  },
  {
    Question: "What is the most popular map of PUBG? ",
    Answer: "Erangel",
  },
  {
    Question: "What ammunation does M416 uses? ",
    Answer: "5.56",
  },
  {
    Question: "Who is my favourite PUBG mobile streamer? ",
    Answer: "Mortal",
  },
  {
    Question: "Which is my Favourite esports team in PUBG mobile? ",
    Answer: "Soul",
  },
];

for (var i = 0; i < questions.length; i++) {
  var currentQ = questions[i];
  play(currentQ.Question, currentQ.Answer);
}

if (Score > 0) {
  console.log(`YAY!! Your score is: ${Score} ✨`);
} else {
  console.log(`Bad luck! Your score is, ${Score}
I guess you dont know me much !😒`);
}
