let memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

//memoContainerの中にcreateCardで作った
//divの中身を入れている
addButton.onclick = function () {
  const sheet = createCard(memoInput.value)
  memoContainer.append(sheet)
  memoInput.value = ""
}

//memoContainerに入れるために、
//memoInout(text)の中身をどうやってcardにするかを書いている
//（最終的に、）cardにmemoInputの中身を入れている
const createCard = function (text) {
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  //発展 削除ボタンを作ってそれを押すとcardが消去される。
  const deletes = document.createElement("button")
  deletes.className = "delete"
  deletes.textContent = "削除"

  deletes.onclick = function () {
    card.remove()
  }
  todo.append(deletes)
  return card
}
