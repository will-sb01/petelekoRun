var pontuacao = -1;
var maximopontuacao = 0;
const pete = document.querySelector('.pete');
const pipe = document.querySelector('.pipe');
const over = document.querySelector('over');
const jump= () => {
    pete.classList.add('jump');
    setTimeout(()=>{
        pete.classList.remove('jump');
    },500)
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const petePosition = +window.getComputedStyle(pete).bottom.replace('px','');
    if(pipePosition <= 90 && pipePosition > 0 && petePosition < 120){
        pipe.style.animetion= 'none';
        pipe.style.left= `${pipePosition}px`

        pete.style.animation= 'none';
        pete.src="./images/gameover.png";
        pipe.src='';
       setTimeout(() => {window.alert("Peteleko foi pego, ele andou: "+pontuacao+"m",
        window.location.reload(true));}, 250);
        clearInterval(loop);
    }

    pontuacao++
    if(maximopontuacao < pontuacao) { maximopontuacao = pontuacao;}
    document.getElementById("pontos").innerHTML = pontuacao;
    //
},10)

document.addEventListener('keydown', jump)