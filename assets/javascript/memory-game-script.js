function onCardClicked(event) {
    let cardClicked = event.currentTarget;
    cardClicked.className = cardClicked.className.replace('black', '').trim(); /*Removes the 'black' css class from square clicked.*/
    cardClicked.className += ' user-matched-cards';/*Add's 'user-matched-cards' css class to clicked square. This css class will disable clicking the same square.*/
}