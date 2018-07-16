
let start = document.querySelector('.card');
let toggle = document.querySelector('.start');
let grid = document.querySelector('.grid');

let startGame = ()=>{
    toggle.classList.remove('inside-container');
    start.setAttribute('style',"display:none");
    grid.setAttribute('style',"display:flex");
}

let selectCards = () =>{
    let images = [];
    for(let i =0;i<32;i++){
        images[i] = new Image();
        images[i].src = `img/card${i}.jpg`;
    }
    let arr = [1,2,3,4]
    _.shuffle(arr);
    console.log(arr);
}
selectCards();