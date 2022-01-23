const imageElement = document.getElementById("dog-image")

// fetchで指定したサーバーに行く
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json() // fetchの結果を jsonのファイルに読み込む
  })
  .then((data) => {
    imageElement.src = data.message
    // imageElementの関数に追加。(jsonに入っている画像をhtmlのsrc = ""に表示する)
  })
