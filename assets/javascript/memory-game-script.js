var userClickedCard = null;

function onCardClicked(event) {
    let cardClicked = event.currentTarget;
    cardClicked.className = cardClicked.className.replace('black', '').trim(); /*Removes the 'black' css class from square clicked. Needed to move this code outside of the below loop. The 'black' css class needs to be remove every time the user clicks a square, including between 1st & 2nd click for colour match.*/

    if(!userClickedCard) {
        userClickedCard = cardClicked; /*Keeps track of when a card is clicked.*/
    } else if (cardClicked) {
        if (userClickedCard.getAttribute('data-card-color') === cardClicked.getAttribute('data-card-color')) /*Compares the data type of the 2 x clicked squares to determine a valid colour match.*/ {
            console.log('This is a test to check if logic is working correctly so far.'); 
        }
    }
}