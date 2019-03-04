// $(document).ready(function(){
//     $(".btn").on("click", function(event){
//         console.log(this.getAttribute("data-id"))
//         console.log($(this).attr("data-id"))

//         // jquery object, top is js object
//     })
// })

$("#target").html("Target: " *** ");
$("#total").html("Total:" *** ");
$("#wins").html("Wins:" *** ");
$("#losses").html("Losses:" *** ");

var wins = 0,
    losses = 0,
    targetScore,
    score = 0,
    gemScores = [];

document.addEventListener("DOMContentLoaded", init); //$(document).ready(init);

function init() {
    //add event listeners
    var gems = document.querySelectorAll(".gem"); // var gems = $(".gem");

    for (let i = 0; i < gems.length; i++) {
        //i is the index of the array/nodelist
        gems[i].addEventListener("click", handleClick); //$(gems[i]).on("click", handleClick);
    }

    function setup() {
        //get random target integer
        targetScore = getRandomInt(19, 120); //19 and 120 are "arguments" (values)
        //reset gemScores
        gemScores = []; //whatever was in it before is now gone
        //set random button integers
        for (let i = 0; i <= 3; i++) {
            //make sure gem values are different...TODO -- JS Sets
            gemScores.push(getRandomInt(3, 12, gemScores));
            //push adds an element to the end of the array (could also pop to remove)
        }
        //set score to zero
        score = 0;

        function handleClick(e) { //event handling
            //e is the event object originally from the OS
            //e.target is the button (or div) clicked
            //
            //get color from button and then its value
            var dataId = e.target.getAttribute("data-id"), //number, 0-3
                val = gemScores[dataId];
            //add button value to score
            score += val; //same as score = score + val;
            //check if score === targetScore
            if (score === targetScore) {
                //win condition
                //tell player they won...
                document.getElementById("winner").textContent = "You win! Great job!"
                //update wins
                wins++;
                //reset
                setup();
            }
            //check if score > targetScore
            else if (score > targetScore) {
                //lose condition
                //tell player they lost...
                document.getElementById("lost").textContent = "You went over the target score. Try again"
                //update losses
                losses++;
                //reset
                setup();
            }

            
function getRandomInt(min, max, excludeArray = []){ //min and max are "parameters" (variable names)
min = Math.ceil(min);
  max = Math.floor(max);
  let rand = Math.floor(Math.random() * (max - min + 1)) + min;
  //if rand is in the exclude array, try again
  if (excludeArray.includes(rand)){
    return getRandomInt(min, max, excludeArray); //call itself (recursion)
}
//otherwise, return rand
return rand;
}