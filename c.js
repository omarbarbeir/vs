let menu = document.getElementById("menu")
let nav = document.getElementById("nav")
let exitMenu = document.getElementById("exitMenu")
let home = document.getElementById("home")


let who = document.getElementById("who")
let WhoNames = document.getElementById("WhoNames")
let WhoMain = document.getElementById("WhoMain")
let WhoTimer = document.getElementById("WhoTimer")
let WhoStop = document.getElementById("WhoStop")
let showE = document.getElementById("showE")
let showM = document.getElementById("showM")
let t = document.getElementById("t")
let WhoAudio = document.getElementById("WhoAudio")
let exitWho = document.getElementById("exitWho")

let five = document.getElementById("five");
let showQ = document.getElementById("showQ");
let fTimer = document.getElementById("fTimer");
let exitFive = document.getElementById("exitFive");
let f = document.getElementById("f");
let fStop = document.getElementById("fStop");


let tra = document.getElementById("tra");
let showP = document.getElementById("showP");
let Next = document.getElementById("Next");
let showPlayer = document.getElementById("showPlayer");
let playerName = document.getElementById("playerName");
let n = document.getElementById("n");
let exitTra = document.getElementById("exitTra");


menu.onclick=()=>{
    nav.classList.add("active");
    home.classList.add("active");
    menu.classList.add("active")
}
exitMenu.onclick=()=>{
    nav.classList.remove("active");
    home.classList.remove("active");
    menu.classList.remove("active")

}
t.onclick=()=>{
    who.classList.add("active")
}
exitWho.onclick=()=>{
    who.classList.remove("active")
}
f.onclick=()=>{
    five.classList.add("active")
}
exitFive.onclick=()=>{
    five.classList.remove("active")
}
n.onclick=()=>{
    tra.classList.add("active")
}
exitTra.onclick=()=>{
    tra.classList.remove("active")
}

function show(){
    showE.onclick=()=>{
        let {name,img} =players[Math.floor(Math.random() * players.length)];
        document.querySelector("#WhoNames").innerHTML = name;
        WhoMain.src = img;
        WhoMain.classList.add("active");
        WhoTimer.classList.remove("active");
        WhoTimer.classList.remove("none");
        function resAlarm(){
            time = 59;
            let seconds = time;
            WhoTimer.innerHTML = seconds;
        }
        resAlarm()
    }
    showM.onclick=()=>{
        let {name,img} =photos[Math.floor(Math.random() * photos.length)];
        document.querySelector("#WhoNames").innerHTML = name;
        WhoMain.src = img;
        WhoMain.classList.add("active");
        WhoTimer.classList.remove("active");
        WhoTimer.classList.remove("none");
        function resAlarm(){
            time = 59;
            let seconds = time;
            WhoTimer.innerHTML = seconds;
        }
        resAlarm()
    }
}
show()



function WhoAlarm(){
    WhoTimer.onclick=()=>{
        WhoTimer.classList.add("none")
        let time = 59;
        let stop = setInterval(()=>{
            let seconds = time;
            WhoTimer.innerHTML = seconds;
            time--;
            if(seconds === 0){
                clearInterval(stop);
                alarmWho();
                WhoTimer.classList.add("active")
            }

            WhoStop.onclick=()=>{
                function stoper(){
                    clearInterval(stop);
                    time=59;
                    let seconds = time;
                    WhoTimer.innerHTML = seconds;
                    WhoTimer.classList.remove("none")
                }
                stoper()
            }
        },1000)
    }
}
WhoAlarm()
function alarmWho(){
    WhoAudio.play()
}
function fivee(){
    showQ.onclick=()=>{
        let {quest} =quests[Math.floor(Math.random() * quests.length)];
        document.querySelector("#board").innerHTML =quest ;
        fTimer.classList.remove("none")
        function resFive(){
            time = 9;
            let seconds = time;
            fTimer.innerHTML = seconds;
        }
        resFive()
    }

}
fivee()

function fiveTimer(){
    fTimer.onclick=()=>{
        let time = 9;
        let stop = setInterval(()=>{
            let seconds = time;
            fTimer.innerHTML = seconds;
            time--;
            fTimer.classList.add("none")
            if(seconds === 0){
                clearInterval(stop);
                alarmWho()
            }

            fStop.onclick=()=>{
                function fStoper(){
                    clearInterval(stop);
                    time=9;
                    let seconds = time;
                    fTimer.innerHTML = seconds;
                    fTimer.classList.remove("none")
                }
                fStoper()
            }
        },1000)
    }
}
fiveTimer()

function Transfer(){
    Next.onclick=()=>{
        let {p,pName} =Player[Math.floor(Math.random() * Player.length)];
        document.querySelector("#showP").innerHTML = p;
        playerName.innerHTML = pName;
        playerName.classList.remove("active");
        pArrow.classList.remove("active");
    }
    showPlayer.onclick=()=>{
        playerName.classList.toggle("active");
        pArrow.classList.toggle("active");
    }
}
Transfer()

let currentPlayerIndex=0;
let hintIndex=0;


function showHints() {
    let hints = Object.entries(passE[currentPlayerIndex].hints);
    let para = document.createElement("p");
    para.setAttribute("id","hintPara")
    if(hintIndex < hints.length){
        let [hintKey , hintValue] = hints[hintIndex];
        para.textContent = `${hintValue}`;
        hintIndex++;

        if(hintIndex === hints.length){
            passClue.classList.add("none");
            passClue.innerHTML = "لا يوجد أي كلو"
        }

    }
    passBoard.appendChild(para)
}

function showNextPlayer() {
    hintIndex = 0;
    currentPlayerIndex = Math.floor(Math.random() * passE.length);
    let currentPlayer = passE[currentPlayerIndex];
    passShow.onclick=()=>{
        passName.textContent = `${currentPlayer.player}`;
        passName.classList.toggle("active");
        passArrow.classList.toggle("active");
        
    }
    passNextP.onclick=()=>{
        passBoard.textContent = "";
        passName.innerText = "";
        passClue.classList.remove("none");
        passClue.innerHTML = "اعرض الكلو"
        passName.classList.remove("active");
        passArrow.classList.remove("active")
    }
}


passClue.addEventListener("click",showHints);
passNextP.addEventListener("click",showNextPlayer);
showNextPlayer()


let teamImg = document.getElementById("tImg");
let teamNext = document.getElementById("teamNext");
let teamName = document.getElementById("teamName");
let nameTeam = document.getElementById("nameTeam");
let teamsArrow = document.getElementById("teamsArrow");
let nTeamShow = document.getElementById("nTeamShow");
let teamShow = document.getElementById("teamShow");
let g = document.getElementById("g");
let exitteam = document.getElementById("exitteam");
let tteams = document.getElementById("teams");

g.onclick=()=>{
    tteams.classList.add("active")
}
exitteam.onclick=()=>{
    tteams.classList.remove("active")
}


function Teame(){
    teamShow.onclick=()=>{
        let {team,img} = teams[Math.floor(Math.random() * teams.length)];
        console.log(team,img);
        teamImg.src= img;
        nameTeam.classList.remove("active")
        teamsArrow.classList.remove("active")
        teamImg.classList.add("active")

        teamName.onclick=()=>{
            document.querySelector("#nameTeam").innerHTML = team;
            nameTeam.classList.toggle("active")
            teamsArrow.classList.toggle("active")
        }
    }

    nTeamShow.onclick=()=>{
        let {nTeam,nImg} = nTeams[Math.floor(Math.random() * nTeams.length)];
        console.log(nTeam,nImg);
        teamImg.src =nImg;
        nameTeam.classList.remove("active")
        teamsArrow.classList.remove("active")
        teamImg.classList.add("active")

        teamName.onclick=()=>{
            document.querySelector("#nameTeam").innerHTML = nTeam;
            nameTeam.classList.toggle("active")
            teamsArrow.classList.toggle("active")
        }
    }
    

    
}
Teame()






















