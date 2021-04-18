<h1 align="center">David Harris - Milestone Project 2</h1>

The aim of this project is to build a fully interactive front-end only website using the skills that I have learnt with HTML, CSS & JavaScript. I will be building a memory based visual card game. The purpose of the game is firstly to be a fun and enjoyable game but to also be used for education for younger children. The game will be designed with the view to aid in early learning and development for younger children.

## User Experience (UX)

### User stories

#### First Time Visitor Goals
- As a first-time visitor I want to easily understand the main purpose of the website.
- As a first-time visitor I want the game to be very basic and easy to understand as the audience demographic will be younger children.
- As a first-time visitor I want to enjoy the game on the first play through and not hit and frustrations with an overly complicate game or rules.

 #### Returning Visitor Goals
- As a returning visitor I want to see if I can improve on my personal time score since the last visit to the website.
- As a returning visitor I want to continue to enjoy the game on multiple play throughs.

#### Frequent User Goals
- As a frequent visitor I want to be able to see if I can beat my all-time high time score of the game over the course of my multiple visits to the website to enjoy the game.
- As a frequent visitor I want to see if I can notice an improvement to my pattern matching skills because I have been training my memory abilities by playing the game many times.

### Design

#### Colour Scheme
- I will be using bold and bright colours to have the content of the website be visually appealing for a younger audience. I have done some research into games aimed at younger children and they all use various colour schemes but always have bright and bold colours.
- The theme of the game was going to be cartoon based animals. I had done some research into younger children’s books and a lot of books involve cartoon animals. Due to time constraints with the project deadline, I decided to swap to a basic colour matching theme to achieve a minimum viable product build.

#### Typography
- The font that I have chosen is for this website is “Gloria Hallelujah” via “Google Fonts”. I have chosen this font to appeal to the younger children. I like that this is a non-business, non-serious font. I find that it is a relaxed font and leads itself well to a younger audience.

#### Wireframes
- Please use the links below to download my wireframe designs in PDF format.
- [Desktop View Wireframe](assets/wireframes/wireframe-desktop-view.pdf)
- [Mobile View Wireframe](assets/wireframes/wireframe-mobile-view.pdf)
- [Tablet View Wireframe](assets/wireframes/wireframe-tablet-view.pdf)

### Features
- Feature 1 – “Welcome message & Game Instructions”. There will be an automatic pop-up when the page has loaded to offer a welcome message and a brief set of simple instructions on how to start the game and how to win the game. This is designed to make it as easy as possible for younger children to both understand and enjoy playing the game.
- Feature 2 – “Memory-based Card Game”. This will be the bulk of the content of the website. There will be a 4 x 4 flip card-based memory game. The object of the game will be to correctly match all pairs of cards in as least moves as possible.
- Feature 3 – “Timer countdown”. There will be a countdown clock starting from 60 seconds that will start when the user starts the game. The user will fail the game if the time limit is reached.
- Feature  4 – “Responsive Design”. I want the website a mobile first friendly design. I want all content to appear clear and present a good design across all device sizes.

## Technologies Used

### Languages Used
- [HTML:](https://en.wikipedia.org/wiki/HTML) This project uses HTML for the basic structure of the data.
- [CSS:](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) This project uses CSS for applying custom styles to the HTML.
- [JavaScript:](https://en.wikipedia.org/wiki/JavaScript) This project uses JavaScript to modify the HTML & CSS to allow the user to interact with and play the memory-based game.

### Frameworks, Libraries & programs Used
- [Google Fonts:](https://fonts.google.com/) Google Fonts were used to import the "Gloria Hallelujah" font into the style.CSS file which is used on all pages throughout the project.
- [Font Awesome:](https://fontawesome.com/) Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
- [Git:](https://git-scm.com/) Git was used for version control by utilizing the GitPod terminal to commit to Git and Push to GitHub.
- [GitHub:](https://github.com/) GitHub is used to store the projects code after being pushed from Git.
- [Balsamiq:](https://balsamiq.com/) Balsamiq was used to create the wireframes during the design process.

## Testing

### Errors Testing During build
- Bootstrap, Grid Layout, Multiple Stacked Images: I struggled with getting 2 x images to stack over each other, take up the same size, remain hidden then flip. I encountered many problems with grid alignment at various view sizes and layouts. I ended up spending way too much time troubleshooting HTML, CSS, Bootstrap. This was detrimental to the time scale for project deadline and was not a requirement as this project is focused on the JavaScript. I decided to remove Bootstrap and the images.
- JavaScript: As the game needed to match 2 x colours, I needed a way to get HTML elements and compare them. I tried to use the class names, but it was not as simple as accessing by class name as this would mean I would have to code 8 or 16 different logic. I did some research and it seemed like using data type would be a basic method that I could use for the game. I used the following links - "https://www.w3schools.com/tags/att_data-.asp" & "https://stackoverflow.com/questions/20030162/getting-data-attribute-for-onclick-event-for-an-html-element" for guidance.
- Game Timer: Timer keeps running after game win. I noticed that once the timer function is started it would not stop. I researched online and discovered that you can stop a JavaScript function with another function is running. I thought you could, so planned to call a function to stop the timer function on game win, but this is not possible. A solution was to force a refresh of the webpage to restart the game and all the code logic. Although this is not an ideal fix, for this project it is a perfect working solution to complete the game loop with a working timer.

## Deployment

### GitHub Pages
The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository]( https://github.com/davidhuk/david-harris-mp2)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [GitHub Pages]( https://davidhuk.github.io/david-harris-mp2/) in the "GitHub Pages Live Website" section.

### Forking the GitHub Repository
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone
1. Log in to GitHub and locate the [GitHub Repository]( https://github.com/davidhuk/david-harris-mp2)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/davidhuk/david-harris-mp2
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/davidhuk/david-harris-mp2
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Font
- “Gloria Hallelujah” font taken directly via Google Fonts - https://fonts.google.com/specimen/Gloria+Hallelujah?preview.text_type=custom#standard-styles Licence details - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL

### Images
- - Winner Medal – Image by <a href="https://pixabay.com/users/axxlc-1861698/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1548239">AxxLC</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1548239">Pixabay</a>.

## Conclusion
- Bootstrap - Stacked multiple images & Grid Layout. My initial idea for this project was to use an animal memory game, have an image of a playing card as a default on page load, once clicked, flip and show an image of an animal. I had issues with getting this lined up in a grid within Bootstrap, then scaling images correctly, then hiding and showing images. I would be able to fix these given more time but decided against this due to 1. The images not being required for the project, 2. Needed to focus of the JavaScript part of the game to get a function game rather than a nice-looking game and 3. The project deadline fast approaching, I needed to focus on a producing a minimum viable build product that fits the criteria.
- Time management Issues & Initial Project Miss-Scoped. This module focuses on the JavaScript aspect of interaction and manipulation of the DOM. I am still learning HTML, CSS, Bootstrap and have added in JavaScript to this product. I am still struggling and learning the basics of all these languages. I started this project slightly later than planned as I needed to take more time to really explore and understand the fundamentals of JavaScript, this led to me having a tighter deadline. The second mistake I made was not fully exploring the difficulties of having images for the game. It seemed easy enough but added a level of complexity that was not required for the project. I found that I was spending way too much time troubleshooting HTML, CSS & Bootstrap and not working on JavaScript, which is the primary driver for this product. I decided to reduce complexity and focus on a colour matching game and remove the images to allow me to explore the JavaScript.