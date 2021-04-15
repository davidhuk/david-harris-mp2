var cardClicked = null; /*Needed to add null to enable logic for rule later to run on 1st, then 2nd click for color match logic for the game.*/

function onCardClicked(event) {
    let target = event.currentTarget;
    target.className = target.className.replace("black", "").trim(); /*Removes "black" css class from clicked square.*/
    target.className += " user-matched-card"; /*Add css class to clicked square.*/

    if (!cardClicked) {
        console.log(target.getAttribute("data-card-color"));
        console.log("This should be the first click color.") /*Testing logic works.*/
        cardClicked = target;
    } else if (cardClicked) {
        
        if (cardClicked.getAttribute("data-card-color") === target.getAttribute("data-card-color")) {
            console.log(cardClicked.getAttribute("data-card-color"));
            console.log("This is a confirmed match of 1st & 2nd color");/*Testing logic works.*/
        }
    }
}