
let start = document.querySelector('.card');
let toggle = document.querySelector('.start');
let grid = document.querySelector('.grid');
let count = document.querySelector('.count');
let placeholder = document.querySelector('.cards');
//console.log(placeholder)
let startGame = ()=>{
    if(document.querySelector('.play-again')!== null)
        document.querySelector('.play-again').remove();
    count.classList.add('.no-find');
    toggle.classList.remove('inside-container');
    start.setAttribute('style',"display:none");
    grid.setAttribute('style',"display:flex");
    
    let selected = selectCards();
    for(let k=0;k<selected.length;k++)
        console.log(selected[k].src)
    console.log(selected.length)
    for(let i =0;i<4;i++){
        if(i>0){
           placeholder.innerHTML += ' <div class="w-100"></div>';
        }
        for(let j=0;j<4;j++){
            placeholder.innerHTML += (` <div class="card card-grids" onClick="flipCards(this)">
            <img class="card-img-top front" src="img/card-back.png" >
            <img class ="card-img-top back" src="${selected[j].src}">
        </div>`);
         console.log(selected)
        }
        selected = _.drop(selected,4);
    }
}

let selectCards = () =>{
    let images = [];
    for(let i =1;i<=32;i++){
        images[i] = new Image();
        images[i].src = `img/card${i}.jpg`;
    }
    images = _.drop(images);
    console.log(images)
    console.log(images.length)
   let shuffled =  _.shuffle(images)
   console.log(shuffled);
   shuffled = _.drop(shuffled,24)
   console.log(shuffled);
   shuffled = _.concat(shuffled,shuffled)
   console.log(shuffled)
   shuffled = _.shuffle(shuffled);
   console.log(shuffled)
   return shuffled;
}

console.log(placeholder)
let counter = 0;
let prev;
let flipCards = (obj) =>{
    obj.childNodes[3].setAttribute('style',"visibility:visible");
    obj.childNodes[3].classList.add('selected')
    counter++;
    setTimeout(()=>{
        if(counter!==0 && counter%2===0){
            if(obj.childNodes[3].src !== prev.childNodes[3].src){
                    obj.childNodes[3].setAttribute('style',"visibility:hidden");
                    obj.childNodes[3].classList.remove('selected');
                    prev.childNodes[3].setAttribute('style',"visibility:hidden");
                    prev.childNodes[3].classList.remove('selected')
                
            }
            else if(obj.childNodes[3].src === prev.childNodes[3].src){
                obj.classList.add('find');
                prev.classList.add('find');
              }
          }
        count.innerHTML = `Number of attempts ${counter}`;
        prev = obj
        checkComplete();
    },100)
    console.log(counter)
    
}

let checkComplete = ()=>{
    let check =0;
    for(let i=0;i<placeholder.children.length;i++){
        if(placeholder.children[i].classList.contains('find')){
            check++;
            console.log(check)
        }
            
    }
    if(check === 16)
        {
            placeholder.innerHTML = "";
            count.innerHTML = "";
            document.querySelector('.start').classList.add('inside-container')
            document.querySelector('.start').innerHTML = `<div class="card play-again">
            <div class="card-body">
              Game Over
              <a href="#" class="card-link again" onClick= "startGame()">Play Again?</a>
            </div>
          </div>`
        }
}