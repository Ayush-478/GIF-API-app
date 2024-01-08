
const searchquery = document.getElementById('searchquery');
const api_key = 'Y5LfQG2HENBblYMGcVX57PY3NFeFcg7n'
const div_cont = document.getElementsByClassName('img_cont')[0]

class gif_search{
    constructor(query){
        this.link ='https://api.giphy.com/v1/gifs/search?api_key=Y5LfQG2HENBblYMGcVX57PY3NFeFcg7n&limit=1&q=' + query;
    }
    get_img(){
        div_cont.innerHTML = ''
        let gifimg = document.createElement('img')
        fetch(this.link)
        .then(res => res.json())
        .then(content =>{
            console.log(content.data[0].images.downsized.url)
            gifimg.src = content.data[0].images.downsized.url;
        })
        div_cont.appendChild(gifimg)
    }
}

searchquery.addEventListener('keyup', (e)=>{
    console.log(e.key)
    if (e.key == "Enter"){
        let obj = new gif_search(searchquery.value);
        obj.get_img();
    }
})
