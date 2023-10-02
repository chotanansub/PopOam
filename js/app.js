function pop(){
    const oam = document.getElementById("oam"); 
    oam.classList.toggle("pop");

    const score = document.getElementById("score");
    score.innerText = parseInt(score.innerText)+1;

    setTimeout(() => {
        oam.classList.toggle("pop");
    }, 500);
}


