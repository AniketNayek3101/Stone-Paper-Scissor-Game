function game(user) {
    const combo = user + compchoice;
    if (combo == "pr" || combo == "rs" || combo == "sp") {
        document.querySelector('.winn').innerText = "You won!!!";
    }
    else if (combo == "rp" || combo == "sr" || combo == "ps") {
        document.querySelector('.winn').innerText = "Computer won!!!";
    }
    else {
        document.querySelector('.winn').innerText = "It's a tie";
    }
    var img = document. createElement('img');

    if(compchoice == 'r')
    {
        img.src = './Images/stone.jpeg';
    }
    else if(compchoice == 'p')
    {
        img.src = './Images/paper.jpeg'
    }
    else {
        img.src = './Images/scissor.jpeg'
    }
    document.querySelector('#cc1').innerText = 'Computer\'s choice';
    document. getElementById('cc1'). appendChild(img);
}


const stone = document.getElementsByClassName('stone');
const paper = document.getElementsByClassName('paper');
const scissor = document.getElementsByClassName('scissor');
const button = document.getElementsByClassName('btn');

stone[0].addEventListener('click', function () {
    game('r')
    /*console.log("Stone")*/;
})
paper[0].addEventListener('click', function () {
    game('p')
        /*console.log("paper")*/;

})
scissor[0].addEventListener('click', function () {
    game('s')
        /*console.log("Scissor")*/;

})

button[0].addEventListener('click', function () {
    window.location.reload();
})
const comp = ['r', 'p', 's'];
const choice = Math.floor(Math.random() * 3);
const compchoice = comp[choice];
/*console.log(compchoice)*/;
