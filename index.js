//GET
async function cats (){
    const response  = await fetch ("https://meowfacts.herokuapp.com/")
    const data = await response.json()
    console.log (data.data[0])
    return data
}
cats()

//POST
async function catImage(catData){
const options = {
    method: "POST",
    headers: {
        Authorization: "Bearer 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",
        "Content-Type": "application/json",
    },
    body: JSON.stringify(catData),
}
const response = await fetch ("https://api.openai.com/v1/images/generations", options);
const data = await response.json();
console.log(data.data[0].url)
}

catImage({
    prompt:"orange cat"
})

 



