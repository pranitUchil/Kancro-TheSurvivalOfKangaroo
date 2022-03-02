audio2 = new Audio('bg.audio.mp3')
setTimeout(()=>{

    audio2.play()
},100)

score = 0;
cross = true;
document.onkeydown = function(even){

    console.log('this key down:',even.code)
    if(even.code =='ArrowUp'){
        kangaroo = document.querySelector('.kangaroo');
        console.log('This is working')
        kangaroo.classList.add('moveUp');
        setTimeout(()=>{
            kangaroo.classList.remove('moveUp')
        },700)

    }
    if(even.code =='ArrowRight'){
        kangaroo = document.querySelector('.kangaroo');
        kangaroox = parseInt(window.getComputedStyle(kangaroo,null).getPropertyValue('left'));
        kangaroo.style.left = kangaroox+112+'px'
        kangaroo.style.transform ="rotatey(0deg)";
        
    }
    if(even.code =='ArrowLeft'){
        kangaroo = document.querySelector('.kangaroo');
        kangaroox = parseInt(window.getComputedStyle(kangaroo,null).getPropertyValue('left'));
        kangaroo.style.left = kangaroox-112+'px'
        kangaroo.style.transform ="rotatey(180deg)";

    }
}
kangaroo = document.querySelector('.kangaroo');
kangaroo.addEventListener('click',
 function(){
    // console.log('this key down:',even.code)
 
        // kangaroo = document.querySelector('.kangaroo');
        console.log('This is working')
        kangaroo.classList.add('moveUp');
        setTimeout(()=>{
            kangaroo.classList.remove('moveUp')
        },700)

  
}
)

setInterval(()=>{
    kangaroo = document.querySelector('.kangaroo');
    gameOver = document.querySelector('.gameOver');
    crocodile = document.querySelector('.crocodile1')

    kx = parseInt(window.getComputedStyle(kangaroo,null).getPropertyValue('left'));
    ky = parseInt(window.getComputedStyle(kangaroo,null).getPropertyValue('top'));

    cx = parseInt(window.getComputedStyle(crocodile,null).getPropertyValue('left'));
    cy = parseInt(window.getComputedStyle(crocodile,null).getPropertyValue('top'));

    offsetX = Math.abs(kx-cx);
    offsetY = Math.abs(ky-cy);

    audio1 = new Audio('dead.audio.mp3')
    // console.log(offsetX,offsetY)
    if(offsetX < 80 && offsetY < 80){
        gameOver.style.visibility = 'visible';
        crocodile.classList.remove('crocodile1')
        audio2.pause()
        audio1.play();

    }
    else if(offsetX < 80 && cross){
        audio2.play()
        score++
        update(score)
        cross = false;
        setTimeout(()=>{
            cross = true;
        },1000)
        setTimeout(()=>{
            
            crocodile1 = parseFloat(window.getComputedStyle(crocodile,null).getPropertyValue('animation-duration'))
            newD=  crocodile1 - 0.1;

            console.log(newD)
            if(newD>=3.3){

                crocodile.style.animationDuration = newD + 's'
            }
        },500)
    }


},100)
function update(score){
    scoreCont.innerHTML = "Your is Score:" + score
}