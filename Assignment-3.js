//1) Select the section with an id of container without using querySelector.
const part1 = document.getElementById("container")
console.log(part1)

// 2) Select the section with an id of container using querySelector.
const part2 = document.querySelector('#container')
console.log(part2)

// 3) Select all of the list items with a class of "second".
const part3 = document.querySelectorAll('.second')
part3.forEach(element => {
    console.log(element)
})

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
const part4 = document.querySelectorAll('ol .third')
console.log(part4)

// 5) Give the section with an id of container the text "Hello!".
const part5 = document.getElementById("container")
part5.append("Hello")
console.log(part5)

// 6) Add the class main to the div with a class of footer.
const part6 = document.getElementsByClassName("footer")[0]
part6.classList.add("main")
console.log(part6)

// 7) Remove the class main on the div with a class of footer.
part6.classList.remove("main")

// 8) Create a new li element.
const part8 = document.createElement("LI")
console.log(part8)

// 9) Give the li the text "four".
const part9 = document.createTextNode("four")
part8.appendChild(part9)

// 10) Append the li to the ul element.
const part10 = document.querySelector('ul')
part10.append(part9)
console.log(part10)

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
const ol = document.querySelector("ol");
let arr = Array.from(ol.children);
for(let back of arr){
    back.style.backgroundColor = "green";
}

// 13) Remove the div with a class of footer.
part6.remove();