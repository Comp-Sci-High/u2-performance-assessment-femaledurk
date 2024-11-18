//GET

const prompt = require("prompt-sync")()

async function cats (){
   try{
    const response  = await fetch ("https://meowfacts.herokuapp.com/")
    if (response === false){
        console.log ("HTTP error! Status: " + response.status);
    }
    const data = await response.json()
    console.log (data.data[0])
    return data
   } catch (error){
    console.log("an error occured:" + error.message)
   }
}

//POST
async function catImage(catData){
    try{
    const options = {
        method: "POST",
        headers: {
            Authorization: "Bearer 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",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(catData),
    }
    const response = await fetch ("https://api.openai.com/v1/images/generations", options);
    if (response === false){
        console.log ("HTTP error! Status: " + response.status);
    }
    const data = await response.json();
    console.log(data.data[0].url)
}catch (error) {
    console.log ("an error occured:" + error.message)
}
}


async function main(){

  const fact = await cats()

    let q1 = prompt("What cat would you like to see?")

    let sentence = "Based on this random cat fact: " + fact + " and my description of a cat: " + q1 + " generate a photo"
    
    const image = await catImage({
        prompt: sentence
    })
}

main()



