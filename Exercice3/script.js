


// 1) Declare a global variable named allBoldItems.
let allBoldItems;
            
// 2) Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable
  function getBoldItems() {
      allBoldItems = document.querySelectorAll('p strong');
  }

// 3) Create a function called highlight() that changes the color of all the bold text to blue
  function highlight() {
    
      for(let p of allBoldItems){
          p.style.color='blue'

      }
  }

// 4) Create a function called return_normal() that changes the color of all the bold text back to black.
function returnNormal() {
    for(let n of allBoldItems){
     
          n.style.color = 'black';
         
     
        }
}


// 5) Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

  getBoldItems();


  let paragraph = document.querySelector('p');
  paragraph.addEventListener('mouseover', highlight);
  paragraph.addEventListener('mouseout', returnNormal);