let btn = document.querySelector('.generate-meme-btn');
let img = document.querySelector('img')
let title = document.querySelector('.meme-title')
let author = document.querySelector('.meme-author')

const fetchData = async () => {
    let data = await fetch('https://meme-api.com/gimme/wholesomememes');
    let response = await data.json()
    console.log(response)
    img.src = response.url;
    title.innerHTML = response.title;
    author.innerHTML = response.author
}

fetchData();
btn.addEventListener('click', fetchData)