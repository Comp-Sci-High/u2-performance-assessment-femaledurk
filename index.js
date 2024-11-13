async function cats (){
const response  = await fetch ("https://meowfacts.herokuapp.com/")
const data = await response.json()
console.log (data.data[0])
return data
}
cats()
