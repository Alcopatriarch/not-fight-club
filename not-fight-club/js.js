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
      }
    };

function openPopup() {
    document.getElementById("overlay").style.display = "flex";
}
    
function closePopup() {
    document.getElementById("overlay").style.display = "none";
}

function changeAvatar(newImagePath) {
    const avatarElement = document.getElementById('avatar');
    avatarElement.src = newImagePath;
    localStorage.setItem('characterAvatarImg', newImagePath);
}

function loadAvatar() {
    const savedAvatar = localStorage.getItem('characterAvatarImg');
    if (savedAvatar) {
        changeAvatar(savedAvatar);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadAvatar();
});