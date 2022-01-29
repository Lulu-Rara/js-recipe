const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function () {
  count += 1
  display.textContent = count / 100
}

let id = null

button.onclick = function () {
  if (id === null) {
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
/*
Q.ストップウォッチがわずかに正確でない理由
A.不動点小数の誤差である。
jsではIEEE754という浮動小数点演算標準規格が実装されている。
そのため、微妙に数字が違う。
*/
