let userchoice;
let rock = 1;
let paper = 2;
let scissor = 3;
let max = 3;
let min = 1;

let gamestats = document.getElementById("Gamestats")
let masterji = document.getElementById("masterji")
let btn1 = document.getElementById("PLAY1");
let btn2 =document.getElementById("PLAY2")
let btn3 = document.getElementById("PLAY3")


// Use Math.random() and not Math.random* for generating random numbers


btn1.addEventListener("click", function() {
  userchoice = 1
  let user2 = Math.floor(Math.random() * (max - min + 1) + min);
  if (userchoice === user2) {

    console.log("DRAW")
} else if (
    (userchoice === rock && user2 === scissor) ||
    (userchoice === scissor && user2 === paper) ||
    (userchoice === paper && user2 === rock)
) {
    console.log(user2)
    gamestats.innerText = "YOU HAVE A LUCK TODAY BOI"
    
} else {
    console.log(user2)
    console.log("You lose.");
    gamestats.innerText="YOU LOSER"
}

})


btn2.addEventListener("click",function(){
     userchoice = 2
     let user2 = Math.floor(Math.random() * (max - min + 1) + min);

     if (userchoice === user2) {

        console.log("DRAW")
    } else if (
        (userchoice === rock && user2 === scissor) ||
        (userchoice === scissor && user2 === paper) ||
        (userchoice === paper && user2 === rock)
    ) {
        console.log(user2)
        gamestats.innerText = "YOU HAVE A LUCK TODAY BOI"   
        masterji.innerHTML =user2       

    } else {
        console.log(user2)
        console.log("You lose.");
        gamestats.innerText = "YOU LOSER"   
        masterji.innerHTML = user2


    }
    
})

btn3.addEventListener("click",function(){

let user2 = Math.floor(Math.random() * (max - min + 1) + min);
userchoice = 3
if (userchoice === user2) {

    console.log("DRAW")
} else if (
    (userchoice === rock && user2 === scissor) ||
    (userchoice === scissor && user2 === paper) ||
    (userchoice === paper && user2 === rock)
) {
    console.log(user2)
    console.log("You won!");
    gamestats.innerText = "YOU HAVE A GOOD LUCK TODAY BOI"   
    masterji.innerHTML = user2


} else {
     let masterji = console.log(user2)
    console.log("You lose.");
    gamestats.innerText = "YOU LOSER"   
    masterji.innerText = user2


}

})


