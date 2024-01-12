function showenterOTP() {
  console.log("showing section");
  var phone = document.getElementById("phonenumber");
  var appointmentdate = document.getElementById("appointment");
  var enterOTPsection = document.getElementById("enterOTPsection");
  var bookbtn = document.getElementById("bookappointmentbtn");
  var generateOTPbtn = document.getElementById("generateOTPbtn");
  if (phone.value != "" && appointmentdate.value != "") {
    enterOTPsection.style.display = "block";
    generateOTPbtn.style.display = "none";
    bookbtn.style.display = "flex";
  }
}
