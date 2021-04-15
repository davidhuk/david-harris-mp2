var cardClicked = null; /*Needed to add null to enable logic for rule later to run on 1st, then 2nd click for color match logic for the game.*/

function onCardClicked(event) {
    let target = event.currentTarget;

    if (target.className.includes("disable-card-click")) {
        return; /*Required to stop the code breaking between 1st & 2nd clicks*/
    }

    target.className = target.className.replace("black", "").trim(); /*Removes "black" css class from clicked square. This should sit outside of the logic below. The is because the remove "black" CSS class needs to run on every click. This saves duplicate code in the below rules.*/

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
            cardClicked = null;
        }
    }
}