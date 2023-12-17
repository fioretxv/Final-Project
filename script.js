let timesplayed =0;
let rocksclimb =0;
let burn =0;
function run(x) {
    let percent;
    let chanceresult;
    let gameresult;
    let timesplayed = sessionStorage.getItem("gameCount");
    let rocksclimb = sessionStorage.getItem("won");
    if (rocksclimb >= 10) {
        alert("You Made it Out! Reset Score to Try Again!")
    } else if (burn >= 3) {
        alert("Your Burned Hand Made You Fall! Reset to Try Again!")
    }   else {
    let choiceresult = x;
    let randNum = Math.floor(Math.random() * 2) + 1;
    if (randNum === 1) {
        chanceresult = 'Rock 1';
    } else {
        chanceresult = 'Rock 2';
    };
    if (chanceresult === choiceresult){
        gameresult = "You climbed higher!";
        rocksclimb++;
    } else {
        gameresult = "That Rock is Too Hot, You Got Burned!";
        burn++;
    };
    timesplayed++;
    if (rocksclimb === 1) {
        percent = 'You are 10% to the Top!';
    } else if (rocksclimb === 2) {
        percent = 'You are 20% to the top!';
    }else if (rocksclimb === 3) {
        percent = 'You are 30% to the top!';
    }else if (rocksclimb === 4) {
        percent = 'You are 40% to the top!';
    }else if (rocksclimb === 5) {
        percent = 'You are half way to the top!';
    }else if (rocksclimb === 6) {
        percent = 'You are 60% to the top!';
    }else if (rocksclimb === 7) {
        percent = 'You are 70% to the top!';
    }else if (rocksclimb === 8) {
        percent = 'You are 80% to the top!';
    }else if (rocksclimb === 9) {
        percent = 'You are 90% to the top!';
    }else if (rocksclimb === 10) {
        percent = 'You Climbed Out of the Volcano!';
        alert("You Made it Out! Reset Score to Try Again!")
    }else {
        percent = 'You Climbed no Further!';
    };

    let percentclimb = document.getElementById('percent');
    percentclimb.innerText = percent;

    let chance = document.getElementById('chance');
    chance.innerText = chanceresult;

    let result = document.getElementById('result');
    result.innerText = gameresult;

    let gameCount = document.getElementById('count');
    gameCount.innerText = timesplayed;
    sessionStorage.setItem("gameCount",timesplayed);
    
    let won = document.getElementById('wins');
    won.innerText = rocksclimb;
    sessionStorage.setItem("won",rocksclimb);

    let toohot = document.getElementById('burned');
    toohot.innerText = burn;

} }
function reset(){
    burn = 0;
    sessionStorage.setItem("gameCount",0);
    sessionStorage.setItem("won",0);
    document.getElementById('count').innerHTML = sessionStorage.getItem("gameCount");
    document.getElementById('wins').innerHTML = sessionStorage.getItem("won");
}