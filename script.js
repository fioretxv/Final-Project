let timesplayed =0;
let rocksclimb =0;
function run(x) {
    let rocksclimb = sessionStorage.getItem("won");
    let timesplayed = sessionStorage.getItem("gameCount");
    let choiceresult = x;
    let randNum = Math.floor(Math.random() * 10);
    let chanceresult;
    let gameresult;
    if (randNum === 1) {
        chanceresult = 'Rock 1';
    } else {
        chanceresult = 'Rock 2';
    };
    if (chanceresult === choiceresult){
        gameresult = "You climbed higher!";
        rocksclimb+++++;
    } else {
        gameresult = "That Rock is Too Hot!";
    };
    timesplayed++;

    let chance = document.getElementById('chance');
    chance.innerText = chanceresult;

    let result = document.getElementById('result');
    result.innerText = gameresult;

    let gameCount = document.getElementById('count');
    gameCount.innerText = timesplayed;
    sessionStorage.setItem("gameCount",timesplayed)
    
    let won = document.getElementById('wins');
    won.innerText = rocksclimb;
    sessionStorage.setItem("won",rocksclimb)
}
function reset(){
    sessionStorage.setItem("won",0);
    sessionStorage.setItem("gameCount",0);
    document.getElementById('wins').innerHTML = sessionStorage.getItem("won");
    document.getElementById('count').innerHTML = sessionStorage.getItem("gameCount");
}