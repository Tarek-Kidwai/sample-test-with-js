// https://rickandmortyapi.com/api/character

const apiLink = "https://rickandmortyapi.com/api/character"

// fetch(apiLink)
// .then((res)=>res.json())
// .then((res)=>console.log(res))
// .catch(()=>console.log('this is red'))


fetch(apiLink)
    .then((response) => response.json())
    .then((response) => console.log(response.results[3].name))
    .catch((response) => console.log("this is an error"))
    .finally((response) => console.log('this will run anyways, whether the api is a success or a failure'))

// fetch(apiLink)
// .then((response )=>response.json())
// .then((response) =>console.log(response))
// .catch((response)=> console.log("this is an error"))

// fetch (apiLink)
// .then((response) => response.joson())
// .then((response) =>console.log(response))
// .catch ((response)=>console.log("this is an error"))

// fetch (apiLink)
// .then((response)=> response.json())
// .then ((response)=>console.log(response))
// .catch ((response)=> console.log("this is an error"))
// (response)=>