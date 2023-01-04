  // 1) Retrieve the form and console.log it.
  let form = document.forms[0];
  console.log(form);

  // 2) Retrieve the inputs by their id and console.log them.
  const fnameInput1 = document.querySelector('#fname');
  const lnameInput1 = document.querySelector('#lname');
  console.log(fnameInput1, lnameInput1);

  // 3) Retrieve the inputs by their name attribute and console.log them.
  const fnameInput2 = document.forms[0].elements.fname;
  const lnameInput2 = document.forms[0].elements.lname;
  console.log(fnameInput2, lnameInput2);


// 4)  When the user submits the form (ie. submit event listener)
        // use event.preventDefault(), why ?
        // get the values of the input tags,
        // make sure that they are not empty,
        // create an li per input value,
        // then append them to a the <ul class="usersAnswer"></ul>, below the form.
        //The output should be :

  
  form.addEventListener('submit', (event) => {
     
      event.preventDefault();

      
      const fname = fnameInput1.value;
      const lname = lnameInput1.value;

      
      if (fname === '' || lname === '') {
          return;
      }

 
      const fname1 = document.createElement('li');
      fname1.textContent = fname;
      const lname1 = document.createElement('li');
      lname1.textContent = lname;

      const list = document.querySelector('.usersAnswer');
      list.appendChild(fname1);
      list.appendChild(lname1);
  });