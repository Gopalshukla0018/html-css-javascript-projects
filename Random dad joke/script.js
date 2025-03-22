const btn=document.querySelector('button');
const image = document.querySelector(".img")


btn.addEventListener('click',()=>{
   console.log('hello');
   fetch('https://dog.ceo/api/breeds/image/random')
   .then((Response)=> response.json())
   .then((json)=>{
      image.src=json.message
   })

   

   

})