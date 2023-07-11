# **InPhysical Quiz Project**

## **Milestone Project 2 for Code Institute Full Stack Software Development.**
### Author - Daniel Cave

The InPysical quiz is designed as a functional game but to also educate the users on the body and exercise. The Quiz is centred around questions related to Exercise and the Body. The Quiz is a free-to-play game, it educates the user while giving them a way to have fun and learn at the same time.

The sit will be a single page website with a quiz built into the HTML. The code will use javascript to complete tasks and functions for the quiz.
Along with ability to move around the page while staying on a single page.

Live version of the site avalible - <a href="https://danieljcave.github.io/inphysical-quiz/" target="_blank">Click Here!</a>

## Table Of Contents
* [**User Experience**](#user-experience)
    * [**Target Audience**](#target-audience)
    * [**Website Goals**](#website-goals)
    * [**User Stories**](#user-stories)
        * [**New User Visitor Goals**](#new-user-visitor-goals)
        * [**Returning Visitor Goals**](#returning-visitor-goals)
* [**Design**](#design)
    * [**Color Scheme**](#color-scheme)
    * [**Imagery**](#imagery)
    * [**Typography**](#typography)
* [**Website Features**](#website-features)
* [**Technologies Used**](#technologies-used)
    * [**Programming Languages**](#programming-languages)
    * [**Programs & Libraries Used**](#programs--libraries-used)
* [**Testing**](#testing)
    * [**W3C Markup Validator**](#w3c-markup-validator)
    * [**W3C CSS Validator**](#w3c-css-validator)
    * [**Lighthouse Testing**](#lighthouse-testing)
    * [**Browser Testing**](#browser-testing)
* [**Bugs**](#bugs)
* [**Deployment**](#deployment)
    * [**Github Pages**](#github-pages)
    * [**Making a Local Clone**](#making-a-local-clone)
    * [**Forking the Repository**](#forking-the-repository)
* [**Credits**](#credits)
    * [**Website Content**](#website-content)
    * [**Media**](#media)
    * [**Special Acknowledgements**](#special-acknowledgements)

## **User Experience**
### **Target Audience**
The target audience of the quiz is all users that are interested in fitness and excersice. The Audience is from new begginers entering the fitness journey. Or experianced users with years of training and knowledge. The quiz is free and designed for new users and experianced users to test knowledge.

### **Website Goals**
The primary goal of the website is to operate a functional quiz that users can use and enjoy to test there knowledge. Another goal of the website is to expand the quiz as more users complete the quiz tasks. To help new users learn and test the experianced users with harder questions.

## **User Stories**
- ## New User Visitor Goals
1. The website is designed to allow new users to complete a quiz on fitness and experiance.
2. Provide a knowledge based quiz to test the users experiance and information.
3. Have range of questions for the user to test there knowledge on.

- ### Returning Visitor Goals
    1. To have users that did not score all questions correctly to try again for the top score.
    2. Test there knowledge on each questions and allow to experince the quiz.
    3. Center point for returning user with updating questions.

- ## Design
    - ### Color Scheme
        - In the website design I had choose to use 5 colors. First being #f5f5f5 (Off-White) and 17181A (Dark Grey). When first thinking of how the website should look, the primary goal was a clean and simplistic-looking site. The Main color of the quiz is (Navy Blue) 007DA7 this is a dark blue that gives the quiz a sleek and profestional view. All of the text uses the Off White color to display over the blue. Both Red and Green are used for answering questions and displaying Green, for correct answers and Red for incorrect answers.
    - ### Imagery
        - The quiz contains a single image, which is displayed as the background image for the website. This is to show the user that straight away is a fitness related quiz without needing to read into the quiz or information. The image was found on [Pexals](https://www.pexels.com/) which is a free image library. 
    - ### Typography
        - When selecting the font to choose, the same goals were alongside the colour scheme. To find a clean and simplistic font that gives the website the look of professional and friendly. The font that was chosen was "Outfit" a free available font found on [Google Fonts](https://fonts.google.com/)

## **Website Features**
The First feature of the website is the "Start Quiz' button. When selecting the button the user is then displayed a popup information container that contains the title of the page along with any information that the user might need to complete the quiz. It contains a Exit and Continue button inside. Clicking the exit button with take the user back to the home page of the quiz. If the user selects continue, the popup icon with be coverd with a sliding page that holds the quiz container.

This uses a width of 200% and hides the overflow. Using Javascript to add "current" tags to elements that is then targets by CSS to complete the display of the Quiz. The quiz contains 5 Different questions. Each question has a quetion amount and a score keeping header. When the user selects a correct answer the quiz score is increased by 1. When the user enters an incorrect answer the score is not changed and user can select the next question.

Once the user has completed the quiz, they are then take to a results popup. Using the current tag selector and javascript to hide the quiz tab and show the results information. It then uses javascript to show the user there score for the website. Lastly, the user has to option to try again, in which the quiz will be shown again and question and score will have been reset. Or select Home button to be taken back to the home page of the quiz.

## **Technologies Used**

### Programming Languages
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [Javascript](https://en.wikipedia.org/wiki/JavaScript)

1. [Visual Studio Code (VSCode)](https://code.visualstudio.com/)
    - Primary programming editor for creating and editing the website.
2. [Pexals](https://www.pexels.com/)
    - Used to locate and use free images for the website.
3. [Google Fonts](https://fonts.google.com/)
    - Google Fonts was used to import the "Outfitt" Font to the style.css and to be used on the website.
4. [Google Docs](https://docs.google.com)
    - Primarily used for Pre note planning and for making notes and planning.
5. [Font Awesome](https://fontawesome.com/)
    - Font Awesome provides free icons that were used on the website pages.
6. [Git](https://git-scm.com/)
    - Git is used to commit changes to website code and then push them to the Github repository.
7. [Github](https://github.com/)
    - Github was used to store the website code when created on VSCode and pushed with Git.
    - The website is also hosted via GitHub pages.
8. [VSCode Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    - Prettier Formater was used in vs code to beautify and format the code for best practices.
9. [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - MDN Web Docs was used to assist in javascript functionality and understanding.
10. [Youtube](https://www.youtube.com/)
    - Youtube was user to follow many different guides to help with Javascript functionality.

## **Testing**
The W3C Markup Validator and W3C CSS Validator Services were used to test each page to make sure there were no syntax errors in the website.
### W3C Markup Validator
<details><summary>Home Page HTML Validation</summary>

![HTML Validator Test](/assets/readME/html-validator.png)
</details>

### W3C CSS Validator
<details><summary>Style Sheet CSS Validation</summary>

![Style Sheet CSS Test](/assets/readME/css-validator.png)
</details>

### Lighthouse Testing
<details><summary>Lighthouse Testing</summary>

![Lighthouse Testing](/assets/readME/lighthouse-test.png)
</details>

## Further Testing 

### Browser Testing
The website responsiveness was tested in the browsers below.
- Google Chrome
- Safari
- Brave

All testing of quiz functionality was correct and all working correctly.
Each questions reports the correct answer to the user and displays the correct answer when incorrect answer is selected.

## Bugs
- First noticable bug is when the user selects to start the quiz. The popup icon shows and rest of the page is blured to allow the user to focus on the page. On the left hand side of the screen the blur overlaps the hidden overflow of the quiz background and container. So the user can see a faint blue line on the left side of the page.
- Another issue that has been found is the responsiveness on mobile view. Due to the width of the page and sliding view of the quiz. I was unable to locate a solution to showing a smaller view on the mobile device.

## Deployment
### Github Pages
The project was deployed to git hub pages using the following steps.
1. Log into GitHub and navigate to the project repository [InPhysical Project](https://github.com/danieljcave/inphysical-website)
2. At the top of the repository, find an option for "Settings" on the menu.
3. Scroll down in the settings until an option for the "GitHub Pages" section.
4. Under the source dropdown, select "Deploy from Main Branch"
5. The Page should then refresh automatically.
6. Scroll back down the page and then find the link to the published page [link](https://github.com/danieljcave/inphysical-website) in the GitHub Pages section.

### Making a Local Clone
1. Log into GitHub and navigate to the project repository [InPhysical Project](https://github.com/danieljcave/inphysical-website)
2. Under the repository at the top of the page, select "Clone".
3. There will be 3 options to clone from. HTTPS, SSH or Github CLI. Or Download the repository.
4. Cloning with HTTPS, copy link and open git bash.
5. Then type `git clone` and paste the URL following. It should look like this 
> `git clone https://github.com/danieljcave/inphysical-website`
6. Followed by pressing Enter, the repository will then be cloned locally.
If there are any issues with cloning the repository, GitHub has a detailed guide with extra information if any issues arise. [Click Here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

### Forking the Repository
Forking a repository will make a copy of that repository and edit without making any changes to the original repository to mainly test ideas or changes with the repository.
1. Log into GitHub and navigate to the project repository [InPhysical Project](https://github.com/danieljcave/inphysical-website)
2. Scroll to the top of the repository to top where there is an option called "Fork"
3. This will then allow you to make a copy of the repository in your GitHub account.

## Credits
### Website Content
All Questions and information was provided by author and developer - Daniel Cave
Javascript functionality of scoring, question number and display view ports was sourced from range of youtube guides and MDN Web Docs for assistance and help with functionality and understanding.
## Media
- [Pexals](https://www.pexels.com/) - Hero image and workout plan preview plan images sourced and obtained from Pexals.

## Special Acknowledgements
- My Mentor **Spencer Barriball** for overall feedback and guidance along my project journey to improve the overall website and assist me as a developer.