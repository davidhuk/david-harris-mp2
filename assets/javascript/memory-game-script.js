var cardClicked = null; /*Needed to add null to enable logic for rule later to run on 1st, then 2nd click for color match logic for the game.*/
var gameWin = 0; /*Needed a variable to track total colors matched count to trigger the game win condition when all colors have been matched.*/
var gameRunning = false; /*Used to track if game is/is not in a running state to apply logic.*/

function playGameClick(event) {
    
    if(!gameRunning) return; /*Needed a way to disable game from working until button click. Located documentation here - "https://stackoverflow.com/questions/7130114/disable-onclick-until-js-function-is-done" */

    let target = event.currentTarget;

    if (target.className.includes("disable-card-click")) {
        return; /*Required to stop the code breaking between 1st & 2nd clicks*/
    }

    target.className = target.className.replace("black", "").trim(); /*Removes "black" CSS class from clicked square. This should sit outside of the logic below. The is because the remove "black" CSS class needs to run on every click. This saves duplicate code in the below rules.*/

    if (!cardClicked) {
        target.className += " disable-card-click";
        cardClicked = target;   
    }
    else if (cardClicked) {
        /* Needed to add a timeout delay. This was to allow the 2nd clicked card to show the color before reverting back to black. Found an example here - "https://www.sitepoint.com/delay-sleep-pause-wait/#:~:text=The%20standard%20way%20of%20creating,()%20%3D%3E%20%7B%20console." */
        if (cardClicked.getAttribute("data-card-color") !== target.getAttribute("data-card-color")) setTimeout(() => { 
            cardClicked.className = cardClicked.className.replace('disable-card-click', '').trim() + ' black';
            target.className = target.className.replace('disable-card-click', '').trim() + ' black';
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
        alert("TEST - You have won the game!"); /*Testing if game win condition triggers an alert.*/
    }
}

function startGameButtonClick(event) {
    gameRunning = true; /*Used to trigger the game start.*/
}