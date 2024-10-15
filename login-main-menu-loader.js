fetch("main-menu.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("login-main-menu-wrapper").innerHTML = data;
  });
