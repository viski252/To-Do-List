window.onload = (event) => {
  function submitFunction() {
      const li = document.createElement('li')


      const checkbtn = document.createElement('button')
      checkbtn.id = 'check-button'
      checkbtn.innerHTML = "check";
      checkbtn.classList = "check-class"
      checkbtn.addEventListener("click", checkFunction);
  
      const deletebtn = document.createElement('button')
      deletebtn.id = 'delete-button'
      deletebtn.innerHTML = "delete";
      deletebtn.addEventListener("click", deleteFunction);

      
      if (input.value !== "") {
        div.appendChild(li);
        li.innerText = input.value; 
        li.appendChild(checkbtn);
        li.appendChild(deletebtn);
        input.value = '';  
      }      
  }
  function checkFunction(el){
    let strike = el.target;
    strike.parentElement.classList.toggle("mystyle");
  }

  function deleteFunction(event) {
    const delbtn = event.target
    delbtn.parentElement.remove();
  }


  const submitButton = document.querySelector('#submit-to-do');
  
  const div = document.querySelector('.divklasa');

  const input = document.querySelector('.inp');

  submitButton.addEventListener("click", submitFunction);


 }


