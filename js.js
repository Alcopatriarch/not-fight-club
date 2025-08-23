function saveName() {
    const name = document.getElementById("username").value.trim();
    if (name) {
        localStorage.setItem("username", name);
        window.location.href = "welcome.html";
    } else {
        alert("Please, enter your name!");
    }
}

window.onload = () => {
      const name = localStorage.getItem("username");
      if (name) {
        document.getElementById("nickname").innerText = name;
      } else {
        window.location.href = "index.html";
      }
    };