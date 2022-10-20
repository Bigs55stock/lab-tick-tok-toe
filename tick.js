//div with clickable buttons 3x3 done
// need to define the two X/O or players 
//declare variables
//do if statements to have it saying if one person



let person1 = "x"
let person2 = "o"
const gridboxs=document.querySelector(".gridbox")
const box1=document.querySelector("#box0")
const box2 = document.querySelector("#box1")
const box3 = document.querySelector("#box2")
const box4 = document.querySelector("#box3")
const box5 = document.querySelector("#box5")
const box6 = document.querySelector("#box6")
const box7 = document.querySelector("#box7")
const box8 = document.querySelector("#box8") 
const box9 = document.querySelector("#box4")
let box = document.querySelector(".box")
const resetButton = document.querySelector(".reset")
//we pulled the boxes from the html 

//Now we need to make the divs clickable
//now we have to make function that will pass boxes that were clicked;

box1.addEventListener("click", move)
box2.addEventListener("click", move)
box3.addEventListener("click", move)
box4.addEventListener("click", move)
box5.addEventListener("click", move)
box6.addEventListener("click", move)
box7.addEventListener("click", move)
box8.addEventListener("click", move)
box9.addEventListener("click", move)

//function that will mark the square when clicked.
// Marked square can't be changed.
// Arrays that will cause win [[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
function move(event){
    console.log(event.target.id)
     if(box === event.target.id) 
     let colors =[ 'red','blue']
     for(let i=0; i>= colors.length; i++){
     return box.style.background= colors[i]}
    
}
 move()
//function not working. was unsure of function syntex.  I tried to connect the event of clicking on boxes two colors and then
//trying to use the for loop to go through those color. First color is first player scond color is second player. I got the
//win arry figured out but didnt know how to use it. 