let progress=document.getElementById('progress')
function run(){
    const w= window.innerWidth-70
    const h=window.innerHeight-70
    let img=document.querySelector('.img')
    let randomX=Math.round(getRandomArbitrary(70,w))
    let randomY=Math.round(getRandomArbitrary(70,h))
    console.log(progress.value)
    if(progress.value<=9){
        img.style.top=randomY+'px'
        img.style.left=randomX+'px'
    }
    else{
        img.style.top='100px'
        img.style.left='100px'
    }
    setTimeout(run,800)
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
const audio=document.getElementById('audio')
let img=document.querySelector('.img')
let count=0
img.onclick=function(){
    audio.play()
    count++
    progress.value=count
    if(count===10){
       const main=document.querySelector('.main')
       main.classList.add('active')
    }
}
