const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const url="https://icanhazdadjoke.com/"

const options={
  headers: {Accept:"application/json"}
}

const generateJoke = async()=>{

  const res = await fetch(url,options)
  const data =await res.json();
   jokeEl.innerHTML=data.joke;
  

}
generateJoke();

jokeBtn.addEventListener('click',()=>{
              generateJoke();
})