// const h1 = document.querySelector("#head");
// h1.innerHTML = "shahmeer"


// function greetuser (){
//     if(h1.innerHTML === "changed through java script")
//     { h1.innerHTML= "hello world"}
//     else{h1.innerHTML = "changed through java scripts"}

// console.log("hello world") }



// DOM MANIPULATION :


// const mybody = document.body;
// mybody.style.backgroundColor = 'yellow'


// const box1 = document.querySelector('.box');
// console.log(box1);

// const box2 = document.getElementById('box-2');
// console.log(box2);
//  box2.innerHTML = '<h1>shah</h1>';


// box1.style.backgroundColor = 'red';
// box1.classList.add('round-border');

// const boxes = document.getElementsByClassName('.box');
// for(let i = 0; i<boxes.length; i++) {
//     boxes[i].classList.add('round-border');
// }

// const mybody = document.body;
// mybody.style.backgroundColor = 'yellow'


// const box1 = document.querySelector('.box');
// console.log(box1);

// const box2 = document.getElementById('box-2');
// console.log(box2);
//  box2.innerHTML = 'shah';



// DOM :

// ASSIGNMENT 3 :

// document.write("<p>Lorem ipsum dolor sit amet <strong>CONSECTUS</strong> adipisicing elit. Rerum repudiandae omnis <b>mollitia</b'> beatae <strong>HTML</strong> cupiditate eligendi ad obcaecati nobis odit perspiciatis.</p>");

// ASSIGNMENT 3 (b) :

        // document.addEventListener("DOMContentLoaded", function() {
        //     // Get the paragraph element
        //     var paragraph = document.querySelector("p");

        //     // Add mouseover event listener
        //     paragraph.addEventListener("mouseover", function() {
        //         // Get all strong elements within the paragraph
        //         var boldWords = paragraph.querySelectorAll("strong");

        //         // Add a class to each bold word to change its style
        //         boldWords.forEach(function(boldWord) {
        //             boldWord.classList.add("highlight");
        //         });
        //     });

        //     // Add mouseout event listener to reset the style
        //     paragraph.addEventListener("mouseout", function() {
        //         // Get all strong elements within the paragraph
        //         var boldWords = paragraph.querySelectorAll("strong");

        //         // Remove the class from each bold word to reset its style
        //         boldWords.forEach(function(boldWord) {
        //             boldWord.classList.remove("highlight");
        //         });
        //     });
        // });


        // ASSIGNMENT 4 :

        // function countAndDisplayItems() {
        //     // Get the dropdown list element
        //     var dropdown = document.getElementById("dropdown");

        //     // Get the number of items in the dropdown list
        //     var itemCount = dropdown.options.length;

        //     // Prepare a string to display the items
        //     var itemsString = "Items in the dropdown list:\n";

        //     // Loop through the options and add each item to the string
        //     for (var i = 0; i < itemCount; i++) {
        //         itemsString += (i + 1) + ". " + dropdown.options[i].text + "\n";
        //     }

        //     // Display the items in an alert window
        //     alert(itemsString);
        // }

        //
        //
        //

// WRONG ;

// let nodeToAdd = document.createElement('ul');
// let textNode = document.createTextNode('<li></li>');
// let li = document.createElement('li');

// console.log(nodeToAdd);
// console.log(li);

// const input = document.querySelector('#todo');

// function addTodo(){
//         console.log(input.value);
//         input.value = ''

// }