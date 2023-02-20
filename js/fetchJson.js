// https://jsonplaceholder.typicode.com/users

//fetch() は Promise を返す（返り値を変数に代入する場合）
const promiseResult = fetch('https://jsonplaceholder.typicode.com/users');

let dataDom = document.querySelector(".dataDom")
let jsonDataSample = "test"

//fetch() のレスポンス（リクエストの結果）を then() メソッドで処理
promiseResult.then((response) => {
  return response.json()
})
  .then((data) => {
    jsonDataSample = data
    console.log(jsonDataSample)
    console.log(jsonDataSample[0].address.city)
    dataDom.textContent = jsonDataSample[0].address.city
  })
