const figure = document.getElementById("figure")

figure.onmouseover = function () {
  if (figure.classList.contains("square")) {
    figure.classList.replace("square", "rounded")
  } else if (figure.classList.contains("rounded")) {
    figure.classList.replace("rounded", "triangle")
  } else {
    figure.classList.replace("triangle", "square")
  }
}

//onouseOver	マウスが乗った時に発生
//onMouseOut	マウスが離れた時に発生
//onMouseUp	マウスで押していたのを離した時に発生
//onMouseDown	マウスで押した時に発生
