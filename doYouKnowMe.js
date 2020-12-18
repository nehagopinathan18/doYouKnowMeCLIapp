var readlineSync = require('readline-sync');
var userName = readlineSync.question(" Hi! What is Your Name? ");
console.log("---------------------------");
console.log(" Welcome "+ userName +'! ' + "Lets see how well do you Neha?");
console.log("---------------------------");
var score = 0;
//function to play quiz
function play(ques, ans){
   var userAns = readlineSync.question(ques);
   if(userAns == ans){
     console.log("You are Right!");
     score = score+1;
     console.log(score);
     console.log("---------------------------");
   }
   else{
     console.log("You are Wrong!");
     score = score-1;
     console.log(score);
     console.log("---------------------------");
   }
  
 
}

//question objects
var questions = [
 {
   ques : "What is my full name? a. Neha Jain b. Neha Gopinathan ",
  ans : "b"
 },
{
  ques : "Where do I belong? a. Delhi b.Jaipur ",
  ans : "b"
},
{ques : "One of my favourite food? a. Pizza b.Biryani  ",
  ans : "b",
},
{ques : "One of my favourite place? a.Bangalore b. Pune ",
  ans : "a",
},
]
//for loop to itierate all questions
for(var i=0; i<questions.length; i=i+1){
var currentQues = questions[i];
// console.log(currentQues);
play(currentQues.ques, currentQues.ans);

}
console.log("Your Total Score is "+ score);
   console.log("Thanks for Playing! " + userName);
  console.log("---------------------------");