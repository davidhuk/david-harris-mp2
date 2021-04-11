function onCardClicked(event) {
    let cardClicked = event.currentTarget;
    cardClicked.className = cardClicked.className.replace('black', '')
}