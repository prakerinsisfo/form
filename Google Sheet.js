
 Google Sheet.js
const scriptURL = 'https://script.google.com/macros/s/AKfycbxFYUPNETkpgVSQzibsP3wcQid1Xwstsb1gHMsdQHXokW2uYPsWzGEJBRWVCTVUnsIwLA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})



