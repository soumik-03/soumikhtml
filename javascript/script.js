//PROMISES
//GET https://icanhazdadjoke.com/
const jokes = document.querySelector('#joke');
const jokesbtn = document.querySelector('#jokebtn');

const generatejokes = () => {

    const setHeader ={
        Headers:{
            accept:"application/json"
        }
    }
    fetch('GET https://icanhazdadjoke.com', setHeader)
    .then((res)=>res.json())
    .then((data)=>{
        jokes.innerHTML = data.joke ;
    }).catch((error)=>{
        console.log(error);
    })
}

    fetch('GET https://icanhazdadjoke.com')
    .then((res)=>{
        console.log(res.json());
    }).catch((error)=>{
        console.log(error);
    })

generatejokes();