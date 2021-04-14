var notClicked = null; /*Needed a default JavaScript type of null to run some logic at 1st & 2nd clicks. Documentation here - https://www.w3schools.com/js/js_datatypes.asp*/

function onCardClicked(event) {
    let cardClicked = event.currentTarget;
    
    if (!notClicked) {
        cardClicked.className = cardClicked.className.replace('black', '').trim(); /*Removes the 'black' css class from square clicked.*/
        cardClicked.className += ' user-matched-first-card'; /*Add's 'user-matched-cards' css class to clicked square. This css class will disable clicking the same square.*/
        firstCardClickedDataColorValue = cardClicked.getAttribute('data-card-color');
        console.log(firstCardClickedDataColorValue);
        notClicked = true;
    } else if (notClicked) {   
        cardClicked.className = cardClicked.className.replace('black', '').trim(); /*Removes the 'black' css class from square clicked.*/
        cardClicked.className += ' user-matched-second-card'; /*Add's 'user-matched-cards' css class to clicked square. This css class will disable clicking the same square.*/
        notClicked = null;
        console.log('This should be the second colour click.');
    }
}