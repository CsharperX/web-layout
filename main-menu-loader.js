fetch("main-menu.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("main-menu-wrapper").innerHTML = data;
  });
