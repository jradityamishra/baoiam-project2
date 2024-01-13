// document.addEventListener('DOMContentLoaded', function () {
// Add event listener for file input change
const imageInput = document.getElementById('image-input');
const previewImage = document.getElementById('preview-image');

imageInput.addEventListener('change', function () {
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// Add event listener for form submission
const profileForm = document.getElementById('profile-form');

profileForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    console.log("thsi skdk")
    // Get other form data
    const firstName = document.getElementById('first-name').value;
    const middleName = document.getElementById('middle-name').value;
    const lastName = document.getElementById('last-name').value;
    const userEmail = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobile-number').value;
    const collegeName = document.getElementById('college-name').value;
    const graduationYear = document.getElementById('graduation-year').value;
    const userBio = document.getElementById('bio').value;

    // Use the collected data as needed (e.g., send it to the server)
    console.log('Image:', previewImage.src);
    console.log('First Name:', firstName);
    console.log('Middle Name:', middleName);
    console.log('Last Name:', lastName);
    console.log('Email:', userEmail);
    console.log('Mobile Number:', mobileNumber);
    console.log('College Name:', collegeName);
    console.log('Graduation Year:', graduationYear);
    console.log('Bio:', userBio);
});
//   });