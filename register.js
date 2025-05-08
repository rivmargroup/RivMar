
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Register | RivMar</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body class="auth-page">
  <div class="login-container">
    <div class="login-form">
      <img src="logo.png" alt="RivMar Logo" class="form-logo">
      <h2>Create Your Account</h2>
      <input type="text" id="firstname" placeholder="First Name..." />
      <input type="text" id="lastname" placeholder="Last Name..." />
      <input type="email" id="email" placeholder="Enter email..." />
      <input type="password" id="password" placeholder="Create password..." />
      <button onclick="register()">Create Account</button>
      <p>Already have an account? <a href="login.html">Login</a></p>
    </div>
    <img src="login-side.jpg" alt="Robot Cleaning" class="side-img">
  </div>
  <script src="firebase.js"></script>
</body>
</html>
