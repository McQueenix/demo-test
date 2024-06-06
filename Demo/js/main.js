const view1= document.getElementById("view1");
console.log(view1);

const view2= document.querySelector("#view2");
console.log(view2);

view1.style.display="flex";
view2.style.display="flex";

const views = document.getElementsByClassName("view");
console.log(views);

const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

evenDivs[4].style.backgroundColor ="red"

for (i=0;i < evenDivs.length;i++){
    evenDivs[i].style.height="50px";
    evenDivs[i].style.backgroundColor="Green";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent ="Hi Welcome to my page";

const navBar = document.querySelector("nav");
navBar.innerHTML='<h1> Demo </h1> <p> Welcome to my page </P>'
console.log(navBar);

navBar.style.justifyContent ="auto"

console.log(evenDivs);
 
view1.style.display="none";
view2.style.display="flex";
view2.style.flexDirection="row";
view2.style.flexWrap ="wrap";
view2.style.margin="10px";

console.log(view2.lastChild);

while (view2.lastChild){
    view2.lastChild.remove();
}

console.log(view2.lastChild)


const createDiv = (parent,iter)=>{
    const newDiv =document.createElement("div");
newDiv.textContent=iter;
newDiv.style.width="100px";
newDiv.style.height="100px";
newDiv.style.backgroundColor="black";
newDiv.style.display="flex";
parent.append(newDiv);
}
for(i=0;i<=20;i++){
    createDiv(view2,i)
}






