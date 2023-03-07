const form = document.getElementById('contactForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('subject').value;

  if (!name|| !email || !subject) {
    alert('Please fill out all fields');
  }
  else {
    form.reset(); 
    alert('Your message has been recieved')
  return false;
  }
    
       
})