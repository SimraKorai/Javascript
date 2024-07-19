let newBtn = document.createElement("button")
newBtn.innerText ="click me"
console.log("button")



let div = document.querySelector("div");
div.append(newBtn);



let newHeading = document.createElement("h1")
newHeading.innerText = "Hi, I am new"

document.querySelector("body").prepend(newHeading);

newHeading.remove()







// let para = document.querySelector("p")
// console.log(para.setAttribute("class", "123"))

// let div = document.querySelector("div")



// div.style.backgroundColor = "purple"


// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id")
// console.log(id)

// let name = div.getAttribute("name");
// console.log(id);


