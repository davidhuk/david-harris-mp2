var cardClicked = null; //Needed to add null to enable logic for rule later to run on 1st, then 2nd click for color match logic for the game.
var gameWin = 0; //Needed a variable to track total colors matched count to trigger the game win condition when all colors have been matched.
var gameRunning = false; //Used to track if game is/is not in a running state to apply logic.
var gameStartModal = document.getElementById("game-start-modal"); //Used to enable JavaScript to modify "game-start-modal" hidden modal.
var gameFinishModal = document.getElementById("game-finish-modal"); //Used to enable JavaScript to modify "game-finish-modal" hidden modal.
var seconds = 0; //Tracks seconds for game played total time.
var gameCurrentTimeCounter = document.getElementById("seconds-counter"); //Used to enable JavaScript to modify DOM seconds timer for game window.

//Run the game logic. This only runs when the user has clicked the "Start Game" button hidden in "game-start-modal" hidden modal.
function playGameClick(event) {

    if (!gameRunning) return; //Needed a way to disable game from working until button click. Located documentation here - "https://stackoverflow.com/questions/7130114/disable-onclick-until-js-function-is-done"

    let target = event.currentTarget;

    if (target.className.includes("disable-card-click")) {
        return; //Required to stop the code breaking between 1st & 2nd clicks
    }

    target.className = target.className.replace("black", "").trim(); //Removes "black" CSS class from clicked square. This should sit outside of the logic below. The is because the remove "black" CSS class needs to run on every click. This saves duplicate code in the below rules.

    if (!cardClicked) {
        target.className += " disable-card-click";
        cardClicked = target;
    }
    else if (cardClicked) {
        //Needed to add a timeout delay. This was to allow the 2nd clicked card to show the color before reverting back to black. Found an example here - "https://www.sitepoint.com/delay-sleep-pause-wait/#:~:text=The%20standard%20way%20of%20creating,()%20%3D%3E%20%7B%20console."
        if (cardClicked.getAttribute("data-card-color") !== target.getAttribute("data-card-color")) setTimeout(() => {
            cardClicked.className = cardClicked.className.replace("disable-card-click", "").trim() + " black";
            target.className = target.className.replace("disable-card-click", "").trim() + " black";
            cardClicked = null;
        }, 550);
        else if (cardClicked.getAttribute("data-card-color") === target.getAttribute("data-card-color")) {
            target.className += " disable-card-click";
            gameWin++;
            cardClicked = null;
        }
    }
    if (gameWin === 8) {
        gameRunning = false;
        gameFinishModal.style.display = "block";
    }
}

//Displays the "game-start-modal".
function openGameStartGameModal() {
    gameStartModal.style.display = "block";
}

//Closes the "game-finish-modal" and resets the HTML DOM back to game start required conditions."
function finishGameButtonClick() {
    gameFinishModal.style.display = "none";
    //Researched and found code below to reset all the DOM elements back to start condition logic. Required to enable game to be played on a loop. Documentation found here - "https://stackoverflow.com/questions/22270664/how-to-remove-a-class-from-elements-in-pure-javascript".
    Array.from(document.querySelectorAll(".card")).forEach((el) => el.classList.remove("disable-card-click"));
    Array.from(document.querySelectorAll(".card")).forEach((el) => el.classList.add("black"));
    gameWin = 0;
    location.reload(true); //Force refresh of website due to bug with timer function constantly running after game close. Documentation located  here - "https://stackoverflow.com/questions/2099201/javascript-hard-refresh-of-current-page".
}

//Starts the game on user click.
function startGameButtonClick() {
    gameStartModal.style.display = "none";
    gameRunning = true; //Used to trigger the game start condition.
    startGamePlayedSecondsTimer(); //Used to call the second timer count on game start click.
}

//Researched JavaScript count timers. Documentation found here – "https://stackoverflow.com/questions/37187504/javascript-second-counter".
function startGamePlayedSecondsTimer() {
    function incrementSeconds() {
        seconds += 1;
        gameCurrentTimeCounter.innerText = seconds + " ";
    }
    setInterval(incrementSeconds, 1000);
}