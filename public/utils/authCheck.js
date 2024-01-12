const login = $("#logincheck");

function getToken() {
  var token = localStorage.getItem("token");
  if (token) {
    return "Bearer " + token;
  }
}

function checkAuthorization() {
  // Checks if the user is logged in by looking at the token stored in Local Storage
  console.log("checking auth");
  const authToken = getToken();
  console.log(authToken); SS
  if (!authToken) {
    // window.location.replace("/login");
  } else {
    login.html(`<div style="padding:0" class="profileicon" href="./Baioam-Dashboard/index.html">
    <i class="fa-solid fa-user"></i>
  </div>`);
  }
}

// checkAuthorization();


// Replace login button to avator
function toggleLoginStatus() {
  var loginLink = document.getElementById('logincheck');
  var avatar = document.getElementById('avatar');
  var LogoutLink = document.getElementById('logoutcheck');

  // Get user from localStorage
  var user = JSON.parse(localStorage.getItem('User'));
  console.log(user)
  if (user) {

    loginLink.style.display = 'none';
    avatar.style.display = 'block';
    LogoutLink.style.display = 'block';
  } else {

    loginLink.style.display = 'block';
    avatar.style.display = 'none';
    LogoutLink.style.display = 'none';
  }

}

// Call the function when the page loads
window.onload = toggleLoginStatus;

// logout
function logout() {

  localStorage.clear();
  window.location.href = "./index.html";
}