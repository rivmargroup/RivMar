
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Login | RivMar</title>
  <link rel="stylesheet" href="style.css" />
  <script src="https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js"></script>
</head>
<body class="auth-page">
  <div class="login-container">
    <div class="login-form">
      <img src="logo.png" alt="RivMar Logo" class="form-logo">
      <h2>Welcome Back!</h2>
      <input type="email" id="email" placeholder="Enter email..." />
      <input type="password" id="password" placeholder="Enter password..." />
      <button onclick="login()">Login</button>
      <a href="#">Forgot your password?</a>
      <p>Don't have an account? <a href="register.html">Sign up</a></p>
    </div>
    <img src="login-side.jpg" alt="Robot Cleaning" class="side-img">
  </div>
  <script src="firebase.js"></script>
</body>
</html>
