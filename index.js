
const chalk = require ("chalk");
var readlineSync = require("readline-sync");

console.log(chalk.bold.bgGreen.black(" Are you a Big Bang Theory Fan? If yes,then this is for you "+ "\n"));

console.log(chalk.bold.black.bgYellow(" Let's see how Well Do You Know The Big Bang Theory? "+ "\n"));

console.log(chalk.bold.greenBright("Things to remember before you get started: " +"\n"));
console.log(chalk.bold.cyanBright("1.Options for each question is present above the respective Question" + "\n"+ "2.please enter option number to answer"+"\n"));

var userName = readlineSync.question("What's your name? ");
console.log(chalk.bold.magentaBright("hello "+ userName.toUpperCase() + "! Let's start out!!")+"\n");

var score = 0;

var questionSet = [
  {
    question : "What is Sheldon's sister called? ",
    optionSet : ['Sissy' , 'Missy' , 'Misty'],
    answer: "1",
  },
  {
    question : "What does Bernadette's dad say to Howard when he walks her down the aisle at their wedding?",
    optionSet : ['She is yours now', "dont screw up" , 'here ya go'],
    answer: "2",
  },
  {
    question: "What number is Sheldon's apartment? ",
    optionSet : ["2A", "3A" , "4A"],
    answer: "2",
  },
  {
    question : "What is Penny's surname? ",
    optionSet : [ "nobody knows" , "Farah Fowler", "Bloom"],
    answer : "0",
  },
  {
    question : "What is the name of Raj's dog? " ,
    optionSet : ["Ginger" , "Cinnamon" ,"nutmeg"],
    answer : "1",
  },
];



for ( var i=0; i<questionSet.length; i++)
{
  var currentQuestion = questionSet[i];
  // console.log(currentQuestion.answer);
  // console.log(currentQuestion.optionSet[0]);
  // var userAnswer = readlineSync.keyInSelect(food, question);
  play (currentQuestion.question,currentQuestion.optionSet,currentQuestion.answer);
  // var userAnswer = readlineSync.keyInSelect(currentQuestion.optionSet,currentQuestion.question)
}

function play(question,options,answer)
{
  var userAnswer = readlineSync.keyInSelect(options,question);
  if (userAnswer === parseInt(answer))
{
  console.log(chalk.bold.green("Right!!"));
  score=score+1;
}
else
{
  console.log(chalk.bold.red("Wrong!"));
}
console.log(chalk.magentaBright("Currrent Score : "+ score+"\n"));
}

console.log(chalk.bold.greenBright("Your final Score : "+ score+"/"+questionSet.length+"\n"));
console.log(chalk.yellow("--------------------------------------------------------"));
console.log(chalk.cyan.bold("   Thank you for playing the quiz!"));
console.log(chalk.yellow("--------------------------------------------------------"+"\n"));

var highScorers =[
{
  name: "Aneena",
  userScore : "5",
},
{
  name: "Sharukh",
  userScore : "4",
},
]

for ( var j=0;j<highScorers.length ; j++)
{
  if (score < highScorers[j].userScore)
  {
    highScorers.splice((highScorers.length-1),0,{name : userName ,userScore :score });
  }
}



console.log(chalk.bgGreen.bold.yellow("Checkout the Scores"));

for ( var k=0; k<highScorers.length; k++)
{
console.log(chalk.bold.rgb(20, 100, 100)((k+1) +"." + highScorers[k].name+" : "+highScorers[k].userScore));
}


  
