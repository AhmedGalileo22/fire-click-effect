var img = document.getElementById("img");
var isClicked = false;
document.addEventListener("mousemove", function (e) {
  img.style.left = e.clientX + "px";
  img.style.top = e.clientY + "px";
});

document.addEventListener("click", function (e) {
    isClicked = true;
      const fire = document.createElement("img");
      fire.src = "fire.png";
      fire.className = "fire";
      fire.style.left = e.clientX + "px";
      fire.style.top = e.clientY + "px";
      document.body.appendChild(fire);
      sound()
  });


  function sound(){
    if (isClicked) {
        const sound = new Audio('fire-sound-222359.mp3');
        sound.play();
      }
  }