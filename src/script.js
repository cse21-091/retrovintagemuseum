// In-memory storage for user data
const users = [
    { username: "user1", password: "password1" },
    { username: "Theo Motsisi", password: "password2" },
    // Add more users as needed
  ];
  
  // Function to check if a user exists
  function doesUserExist(username) {
    return users.some((user) => user.username === username);
  }
  
  // Function to handle user registration
  function registerUser() {
    const username = prompt("Enter your username:");
    if (!username) return; // User canceled
    if (doesUserExist(username)) {
      alert("Username already exists. Please choose a different username.");
      return;
    }
    const password = prompt("Create a password:");
    if (!password) return; // User canceled
    users.push({ username, password });
    alert("Registration successful. You can now log in.");
    loginUser();
}
  
  // Function to handle user login
  function loginUser() {
    const username = prompt("Enter your username:");
    if (!username) return; // User canceled
    const password = prompt("Enter your password:");
    if (!password) return; // User canceled
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      alert("Login successful. You can now access the page.");
    } else {
      alert("Login failed. Please check your username and password.");
    }
  }
  
  // Ask the user to register or login
  const action = prompt("Are you a new user? Type 'register'. Otherwise, type 'login'.");
  if (action === "register") {
    registerUser();
  } else if (action === "login") {
    loginUser();
  } else {
    alert("Invalid action. Please refresh the page and try again.");
  }
  

