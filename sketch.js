var gameState=0;
var contestantCount;
var database;
var quiz,question,contestant;
var allContestants;

function setup()
{
  canvas = createCanvas(1300,600);
  database=firebase.database();
  quiz=new Quiz();
  quiz.getState();
  quiz.start();
}


function draw()
{
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
