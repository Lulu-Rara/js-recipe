const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

// 追加ボタンを押したとき カードの作成→入力を空にして次の入力ができるように。
addButton.onclick = function () {
  const card = createCard(inputElement.value)
  container.append(card)
  inputElement.value = ""
}

// カードを入れるhtmlの場所→テキスト表示場所→削除ボタン の作成
const createCard = function (text) {
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"
  deleteButton.onclick = function () {
    card.remove()
  }
  card.append(deleteButton)
  return card
}
