const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function loginUser() {
  const username = document.getElementById("loginusername").value;
  const password = document.getElementById("loginpassword").value;

  const apiUrl = "http://localhost:8080/api/v1/auth/login";

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: username,
      password: password,
    }),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        return response.json().then((data) => {
          throw new Error(data.message || "User authentication failed");
        });
        alert(response.json());
        // throw new Error("User authentication failed");
      }
    })
    .then((data) => {
      console.log(data.user.admin);
      localStorage.setItem("User", JSON.stringify(data));
      // Redirect to the dashboard
      if (data.user.admin == 'true') {
        window.location.href = "file:///D:/portfolio/boiam/baoiam/public/Baioam-admin-Dashboard/index.html";
      } else {
        window.location.href = "file:///D:/portfolio/boiam/baoiam/public/baoiam-user-dashboard/index.html";
      }
      // window.location.reload();
    })
    .catch((error) => {
      alert(error.message);
      console.error("Error:", error);
      // Handle errors here
    });
}

function signupUser() {
  const email = document.getElementById("signupemail").value;
  const username = document.getElementById("signupusername").value;
  const password = document.getElementById("signuppassword").value;
  const data = {
    userName: username,
    email: email,
    password: password,
  };
  console.log(data);

  //const words = username.split(" ");
  const apiUrl = "http://localhost:8080/api/v1/auth/register";

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      } else {
        return response.json().then((data) => {
          throw new Error(`User authentication failed: ${data.message}`);
        });
      }
    })
    .then((data) => {
      console.log(data);
      localStorage.setItem("User", JSON.stringify(data));
      // Redirect to the dashboard
      window.location.reload();
      // window.location.href =
      //   "http://localhost:3000/public/Baioam-Dashboard/index.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
      console.error("Error:", error);
      // Handle errors here
    });
}