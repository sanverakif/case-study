const baseUrl = "https://6377c6440992902a2510e1f3.mockapi.io/api/v1/users"

//fetch
// function responseStatus(res) {
//     if (res.status === 200) {
//         console.log("başarılı", res.ok)
//         return res
//     } else {
//         console.log("başarısız", res.ok)
//         return res
//     }
// }

// function jsonParse(data) {
//     return data.json()
// }

// function getData() {
//     let dataControl;
//     fetch(baseUrl)
//         .then(responseStatus)
//         .then(jsonParse)
//         .then((val) => {
//             dataControl = val
//         })
// }

//framework
// const axios = require("axios")
// function getData() {
//     axios.get(baseUrl).then((res) => {
//         if (res.status === 200) {
//             console.log("başarılı")
//             return res
//         } else {
//             console.log("başarısız")
//             return res
//         }
//     })
// }

//async
// async function getData() {
//     const result = await axios.get("https://6377c6440992902a2510e1f3.mockapi.io/api/v1/users");
//     console.log(result.status)
// }