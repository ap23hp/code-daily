//Understand how click events travel from child → parent (bubbling).
const card = document.querySelector(".card");
const btn = document.querySelector(".btn");

card.addEventListener("click", function () {
  console.log("Card clicked");
});

// btn.addEventListener("click", function () {
//   console.log("Button clicked");
// }); //event bubbles up to the parent element.

btn.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("Button clicked");
});

//event delegation

const containerCards=document.querySelector(".container")

// not correct way
// const allCards=document.querySelectorAll(".card1")
// console.log(allCards)
// allCards.forEach((card)=>{
// card.addEventListener("click",function(){
// console.log("cards clciked")
// })
// })


// correct way
containerCards.addEventListener("click",function(event){
    if(event.target.classList.contains("card1")){
  console.log(event.target.textContent + " clicked")
    }
  
})

//When you click an element, the event starts at the clicked element and travels up the DOM tree.
//event.stopPropagation() Then the event stops at that element.

//Event delegation still uses bubbling.The event still travels upward exactly the same way.
// But instead of adding listeners to every child element, 
// we attach one listener to a parent.When the event reaches container, we check:Which child triggered this?Using:event.target

//Event delegation works because bubbling exists.Without bubbling, 
// delegation would not work
//It reduces the number of event listeners in the DOM, improving memory usage and performance.

//target = where the event started

//currentTarget = where the listener is attached
//Event bubbling is when an event triggered on a child element propagates upward through its ancestors in the DOM tree.
//Default Direction 
// :Child → Parent, This is bubbling phase.
//event.stopPropagation() prevents the event from propagating further in the DOM tree.
//event.target	element that triggered the event
//event.currentTarget	element where the listener is attached

//Event capturing is the opposite direction of bubbling.

// Event flow becomes:

// document
// ↓
// html
// ↓
// body
// ↓
// container
// ↓
// target

// Instead of upward.

//When you click an element, the browser does 3 phases.
// CAPTURING PHASE
// document
// ↓
// html
// ↓
// body
// ↓
// container
// ↓
// button

// TARGET PHASE
// button

// BUBBLING PHASE
// button
// ↑
// container
// ↑
// body
// ↑
// html
// ↑
// document

// So event actually travels down first, then up.

//javaScript listens during bubbling phase.
// Capturing means we listen during the downward phase.

// Example:

// document.addEventListener("click", handler, true)

// That true means:

// listen during capturing phase

// So event triggers while coming down the DOM tree.
//modern syntax :
// element.addEventListener("click", handler, {
//   capture: true
// })