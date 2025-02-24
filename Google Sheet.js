const scriptURL = 'https://script.google.com/macros/s/AKfycbzEqZM2HCke94QOZ96-Rqps-ZWA8Exoh3RcNvqzcytCu_zH8q9XxeLySAN_KozbYsI/exec'
const form = document.forms['contact__form']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you for your submission! A doctor will reach out to via a Call/Whatsapp. "))
    .then(() => { window.location.reload();})
    .catch(error => console.error('Error', error.message))
})