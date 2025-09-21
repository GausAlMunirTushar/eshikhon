function generateOTP() {
  console.log(454545);
}
const otp = generateOTP();

// function registerUser(name, email, password, otp) {
//   console.log(
//     "Registering user",
//     name,
//     email,
//     "Sending to OTP",
//     // otp,
//     "Please check your email"
//   );
// }

// registerUser("Tamim", "tamim@gmail.com", "123456");
// registerUser("Sakib", "sakib@gmail.com", "123456");

let email = "admin@gmail.com";
let password = "admin";

// login function
function login(userEmail, userPassword) {
  if (userEmail === email && userPassword === password) {
    console.log("You are Valid your , You can login in system");
    console.log(userEmail);
  } else {
    console.log("Invalid credentials");
  }
}
login("admin@gmail.com", "admin");

function handleLogin() {}
