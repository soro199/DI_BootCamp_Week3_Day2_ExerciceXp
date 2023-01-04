const list = document.querySelector('.list');

list.addEventListener('click', () => {
    list.style.left = `${Math.random() * 100}px`;
  });

  // Add a mouseover event listener t
  list.addEventListener('mouseover', () => {
    list.style.top = `${Math.random() * 100}px`;
  });

  // Add a mouseout event listener 
  list.addEventListener('mouseout', () => {
    list.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  });

  // Add a dblclick event listener 
  list.addEventListener('dblclick', () => {
    list.style.fontSize = `${Math.random() * 50 }px`;
  })