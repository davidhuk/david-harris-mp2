function onCardClicked(event) {
    let cardClicked = event.currentTarget;
    cardClicked.className = cardClicked.className.replace('black', '').trim(); /*Removes the 'black' css class from square clicked.*/
    cardClicked.className += ' user-matched-first-card'; /*Add's 'user-matched-cards' css class to clicked square. This css class will disable clicking the same square.*/
    firstCardClickedDataType = cardClicked.getAttribute("data-card-color"); /*Need this variable to use to apply comparing logic to compare 1st and second click if true for match*/

    console.log(firstCardClickedDataType);/*Testing if console logs data type on click of square*/
}