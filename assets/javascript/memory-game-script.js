function onCardClicked(event) {
    let cardClicked = event.currentTarget;
    cardClicked.className = cardClicked.className.replace('black', '')

    /* testing accessing the card color. Easiest (basic way) was to use data attribute. */
    console.log(cardClicked.getAttribute('data-card-color'))
}