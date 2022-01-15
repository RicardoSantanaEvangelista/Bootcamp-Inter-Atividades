const BASE_URL = "http://thatcopy.pw/catapi/rest/";

const catBtn = document.getElementById('change-cat');

const catImg = document.getElementById('cat');


const getCats = async () => {
    try{
        const data = await fetch(BASE_URL);

        const JSON = await data.json();

        return JSON.webpurl;
    }catch(e){
        console.log(e.message);

    }
}


const loadImg = async () => {
    catImg.src = await getCats();
}


catBtn.addEventListener('click', loadImg);

loadImg();
