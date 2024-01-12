function showRegistrationForm() {
    document.getElementById('registrationPopup').style.display = 'flex';
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbx4KuBtkzeGm7T-qUbfdaxlm4ckek0PnB9p0Bq-jQG9anQ370yvZzVthzV3N6E_Fi5swg/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    document.querySelector('.formReg .btn-enroll').innerHTML = "Please wait..";
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Close registration popup
            document.getElementById('registrationPopup').style.display = 'none';

            // Show thank you popup
            document.getElementById('thankyouPopup').style.display = 'block';
            document.querySelector('.formReg .btn-enroll').innerHTML = "Submit";

            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
        });
});
function closeThankYouPopup() {
    document.getElementById('thankyouPopup').style.display = 'none';
}

