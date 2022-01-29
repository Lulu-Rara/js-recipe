const genkiFunction = function (number) {
  //nが1上がるごとに間を起きたい
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!!!!`)
      setInterval(n, 1000000)
    } else {
      console.log(n)
      setInterval(n, 1000000)
    }
  }
}

setInterval(genkiFunction(100), 1000000000)

const FizzBuzz = function (numbers) {
  for (let i = 1; i <= numbers; i++)
    if (i % 15 === 0) {
      console.log("FizzBuzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(i)
    }
}

FizzBuzz(100)

//3が付く数字なら"!!!"をつける

const check = function (three) {
  let th = []
  for (let n = 1; n <= three; n++) {
    th.push(n)
    if (three.indexOf(3) != -1) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}

check(100)
