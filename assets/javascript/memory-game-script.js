function onCardClicked(event) {
    let cardClicked = event.currentTarget;

    if(cardClicked) {
        /*removes the 'black' css class from square clicked*/
        cardClicked.className = cardClicked.className.replace('black', '').trim();
    }
}