var clickedCard = null; /*Needed a default JavaScript type of null to run some logic at 1st & 2nd clicks. Documentation here - https://www.w3schools.com/js/js_datatypes.asp*/

function onCardClicked(event) {
    const cardClicked = event.currentTarget;
    cardClicked.className = cardClicked.className.replace('black', '').trim(); /*Removes the 'black' css class from square clicked.*/
    cardClicked.className += ' user-matched-first-card'; /*Add's 'user-matched-cards' css class to clicked square. This css class will disable clicking the same square.*/

    if (!clickedCard) {
        clickedCard = cardClicked
        let userFirstCardClickDataType = cardClicked.getAttribute('data-card-color');
        console.log(userFirstCardClickDataType);
    } else if (clickedCard) {
        console.log(cardClicked.getAttribute('data-card-color'));/*Testing that logic works*/
    }
}