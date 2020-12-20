var read = require("readline-sync")
var chalk = require("chalk")
console.log("WELCOME TO THE QUIZ ON CITIES OF INDIA");
var name= read.question(chalk.red("Please enter your name : \n"))
var start = console.log(chalk.red( "Let's play the QUIZ :" +name +"\n ALL THE BEST :)"))
console.log(chalk.red("Please choose the correct option  out of the following questions :"))



var score = 0
function quiz( question, answer)
{ 
  var userAnswer= read.question(question +" Choose one of the following option\n ")
  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {

    console.log(chalk.green("you are right   ✓"))
    score= score+ 1
    console.log(chalk.bold("your score is " + score))
  } else{
    console.log(chalk.red("oops, you are wrong  ✗, the right answer is option :" +answer))
    
    console.log(chalk.bold("your score is " + score+"\n"))
  } 
}


var cities=[
  {
    question:"1. Which city is TAJ MAHAL situated ? (a) Mumbai (b) Meerut (c)Agra  \n",
    answer: "c",

  },
  {  question:"2.  What is the capital of Madhya Pradesh and the site of an ecological disaster in 1984?  (a)Indore (b) Bhopal (c)Ujjain \n",
    answer: "b",

  },
  { question:"3.Once named Madras, what city is situated on the east coast and is the capital of Tamil Nadu ? (a)Madurai(b) Tirupati (c) Chennai \n", 
    answer: "c",
  },
  {
    question:"4. Which city is joint capital of two sates(a)Chandigarh (b)Pune(c) Amravati\n ",
    answer: "a",

  },
  { question:"5.What is the main seaport of the state of Goa and centre of the former Portuguese colony? (a)Vasco-Da-Gama (b)Cochin (c) Mumbai\n ",
    answer: "a",
  }, 
  { question:"6. Capital of Gujrat? (a)Surat (b)Ahmedabad (c)Gandhinagar\n ",
    answer: "c",
  },
   { question:"7. Which city is known as pink city of India (a)Jaipur (b)Jaisalmer (c) Ranchi\n",
    answer: "a",
  },  
   { question:"8. What is the capital of Meghalaya?(a)Shillong (b) Imphal (c)Itanagar\n",
    answer: "a",
  },
  { question:"9.Which is the richest city of India by per capita of GDP?(a)New Delhi(b)Bangalore(c)Mumbai\n ",
    answer: "c",
  },
  { question:"10. What is the second capital of Himachal Pradesh.(a)Dharamshala (b)Shimla (c)Mandi \n",
    answer: "a",
  }, 

]

 for(var i=0; i< cities.length; i++)
  {
   var currentQuestion = cities[i];
   quiz(currentQuestion.question, currentQuestion.answer)
  }
   console.log(chalk.green.underline("Your Final score : " + score))

var highScore= [
  {
    name: "Ankit",
    scores: "10",
  },
  {
    name: "Ankur",
    scores:"9",
  }

]
console.log("\nLEADER BOARD\n ")
for(var j=0;j<highScore.length;j++)
{
  
  console.log(highScore[j])
}
console.log(chalk.cyanBright.bold("\n If your score is greater than that on the leaderboard ,please ping me and send   a screenshot,I will update it right away "));
console.log("\nThank you "+name+" for playing this Quiz")
  
