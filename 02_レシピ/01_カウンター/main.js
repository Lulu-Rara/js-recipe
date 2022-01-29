const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const doubleButton = document.getElementById("double-button")

let count = 0
plusButton.onclick = function () {
  count += 1
  display.textContent = count
}

doubleButton.onclick = function () {
  count *= 2
  display.textContent = count
}
