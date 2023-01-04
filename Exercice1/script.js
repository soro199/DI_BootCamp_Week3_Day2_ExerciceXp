// Exercise 1 : Change The Article



// 1) Using a DOM property, retrieve the h1 and console.log it.


let h = document.querySelector("article h1")



// 2) Using DOM methods, remove the last paragraph in the <article> tag.

let p = document.querySelectorAll("article p")[3]
p.remove()


// 3) Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let h2= document.querySelector("article h2")


h2?.setAttribute("click", changeb());

function changeb(){

    h2?.classList.add("red")
 

}



// 4) Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

let h3= document.querySelector("article h3")

h3.addEventListener("click",RespondClick)

function RespondClick(){
h3?.classList.add("h3_s")


}


// 5) Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

let btn = document.querySelector("article button")
let paragraph = document.querySelectorAll("article p")

btn.addEventListener("click",RespondClickp)

function RespondClickp(){
    for(let i of paragraph){

        i?.classList.add("paragraphe")
       
    }
}



// 6) BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

h.setAttribute("id","h")

let h1 = document.getElementById("h")

h1.addEventListener("click", RespondClick);
h1.addEventListener("mouseover",RespondMouseOver)

function RespondClick(){
h1.style.fontSize = (Math.floor(Math.random() * 100+ 1))+"px"

}

function RespondMouseOver(){

    h1.style.fontSize = (Math.floor(Math.random() * 100+ 1))+"px"
}




// 7) BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)



let p2 = document.querySelectorAll("article p")[1]
p2.setAttribute("id","p2")

let p2id = document.getElementById("p2")

p2id.addEventListener("click",RespondClicp2)

p2id.addEventListener("mouseover",RespondMouseOverp2)


function RespondClicp2(){
    
    p2id.style.opacity= 0.4;
   
   




    
    }
function RespondMouseOverp2(){
    

    p2id.style.opacity= 0.4;



    }