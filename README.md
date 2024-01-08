# **InPhysical Quiz Project**

## **Milestone Project 2 for Code Institute Full Stack Software Development.**
### Author - Daniel Cave

The InPysical quiz is designed as a functional game but to also educate the users on the body and exercise. The Quiz is centred around questions related to Exercise and the Body. The Quiz is a free-to-play game, it educates the user while giving them a way to have fun and learn at the same time.

Live version of the site avalible - <a href="https://danieljcave.github.io/inphysical-quiz/" target="_blank">Click Here!</a>

![Homepage Responsive Image](/readME-assets/images/homepage_responsive.png)
<details>
<summary>QuizPage Responsive Image</summary>

![QuizPage Responsive Image](/readME-assets/images/quizpage_responsive.png)
</details>

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
    * [**Responsiveness**](#responsivness)
* [**Features**](#website-features)
    * [**Homepage**](#homepage)
    * [**Homepage Popup**](#homepage-popup)
    * [**Quiz Page**](#quiz-page)
    * [**Quiz Questions**](#quiz-questions)
    * [**Quiz Results**](#quiz-results)
    * [**Future Features**](#future-features)
* [**Technologies Used**](#technologies-used)
    * [**Programming Languages**](#programming-languages)
    * [**Programs & Libraries Used**](#programs--libraries-used)
* [**Testing**](#testing)
    * [**W3C Markup Validator**](#w3c-markup-validator)
    * [**W3C CSS Validator**](#w3c-css-validator)
    * [**JSHint Testing**](#jshint-testing)
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
### Target Audience
The target audience of the quiz is all users that are interested in fitness and exercise. The Audience is new beginners entering the fitness journey. Or experienced users with years of training and knowledge. The quiz is free and designed for new users and experienced users to test their knowledge.

### Website Goals
The primary goal of the website is to operate a functional quiz that users can use and enjoy to test their knowledge. Another goal of the website is to expand the quiz as more users complete the quiz tasks. To help new users learn and test the experienced users with harder questions.

## **User Stories**
### New User Visitor Goals
1. The website is designed to allow new users to complete a quiz on fitness and experience.
2. Provide a knowledge-based quiz to test the user's experience and information.
3. Have a range of questions for the user to test their knowledge on.

### Returning Visitor Goals
1. To have users that did not score all questions correctly try again for the top score.
2. Test their knowledge on each question and allow them to experience the quiz.
3. Center point for returning users with updating questions.

## **Design**
### Color Scheme
- In the website design I had chosen to use 5 colors. First being #f5f5f5 (Off-White) and 17181A (Dark Grey). When first thinking of how the website should look, the primary goal was a clean and simplistic-looking site. The Main colour of the quiz is (Navy Blue) 007DA7 this is a dark blue that gives the quiz a sleek and professional view. All of the text uses the Off White colour to display over the blue. Both Red and Green are used for answering questions and displaying Green, for correct answers and Red for incorrect answers.
![Color Palette](/readME-assets/images/color_palette.png)

### Imagery
- The quiz contains a single image, which is displayed as the background image for the website. This is to show the user that straight away is a fitness-related quiz without needing to read into the quiz or information. The image was found on [Pexals](https://www.pexels.com/) which is a free image library. 

### Typography
- When selecting the font to choose, the same goals were alongside the colour scheme. To find a clean and simplistic font that gives the website the look of professional and friendly. The font that was chosen was "Outfit" a free available font found on [Google Fonts](https://fonts.google.com/)

### Responsivness
The website is fully responsive for all devices. The website has media queriy tags for all size of devices. The Quiz is made fully responsive for all devices down to 320px width, An example would be the iPhone 4 is the current smallest device. All the way up to Extra Large Devices 1200px and up.

## **Features**
### Homepage
The Homepage is the first thing that a user sees when entering the webiste. It displays the title of the Quiz along with a small excerp of what the quiz is for. Giving the user a small amout of information before they enter the quiz.
![Homepage View](/readME-assets/images/homepage.png)
<details>
<summary>Homepage View Mobile</summary>

![Homepage View Mobile](/readME-assets/images/homepage-mobile.png)
</details>

### Homepage Popup
The Homepage popup is used for the user to start the quiz. It displays a pop that the user can then start the quiz or exit if they change their minds. The quiz has a guide for the user to follow and holds information about what the quiz is and how the quiz works. Giving them the information before they start.

The popup uses current tags for the class. When the start quiz button is clicked the current.js tag uses a onlcik event to add current tags that display the popup using opactiy css to display.
![Homepage Popup View](/readME-assets/images/quiz-popup.png)
<details>
<summary>Homepage Popup Mobile</summary>

![Homepage Popup Mobile](/readME-assets/images/quiz-popup-mobile.png)
</details>

### Quiz Page
The quiz page holds the main functionality of the quiz for the user. It holds all of the questions for the user to answer. It displays the score counter, that keeps track of the users current score and the total score at the end.

The Quiz also displays the questions title and the options for the user to select. Each question has four options and one correct answer. If the user wants to restart the quiz or cancel the quiz. They can select the 'Cancel' Button on the quiz page to cancel
![Quiz Page View](/readME-assets/images/quiz-page.png)
<details>
<summary>Quiz Page Mobile View</summary>

![Quiz Page Mobile View](/readME-assets/images/quiz-page-mobile.png)
</details>

### Quiz Questions
The quiz questions will show an correct or incorrect answer when a user selects an option. If the user selects a correct answer it will display a green glow border.

If the user selects a incorrect answer it will display a red glow border around the option that is selected and then a green glow will display around the correct answer.

The next button will be greyed out and unable to be clicked until the user has selected an option. Once the option has been selected the next button will be able to be selected and all the questions will have a a pointer event of none, so they cannot keep selecting the options.
<details>
<summary>Quiz Questions Correct Answer</summary>

![Quiz Questions Correct Answer](/readME-assets/images/quiz-correct.png)
</details>
<details>
<summary>Quiz Questions Incorrect Answer</summary>

![Quiz Questions Incorrect Answer](/readME-assets/images/quiz-incorrect.png)
</details>

### Quiz Results
The quiz results are to display the users score at the end of the quiz. Once the user has completed all the questions they can then view their score. It will show total score of all the correct answers. 

The user can then select an option to try again, if they want to do it again or beat there score. Or the user can select home to go back to the home page.
![Quiz Results Mobile View](/readME-assets/images/quiz-results.png)

<details>
<summary>Quiz Results Mobile View</summary>

![Quiz Results Mobile View](/readME-assets/images/quiz-results-mobile.png)
</details>

### Future Features
- A timer would be a good adition to the quiz, as it puts another varible to the users experiance. It will have a set time for the user to complete the questions, this will help with the user presure and deter any cheating by googling the answers.
- API, an api would be a good adition to the quiz as it can select a range of questions for the user to complete and when they complete the quiz again the questions will be different or in a different order to test the users knowledge further.
- Final feature that i would like to introduce is a scoreboard 

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
    - Youtube was users to follow many different guides to help with Javascript functionality.

## **Testing**
The W3C Markup Validator and W3C CSS Validator Services were used to test each of the html pages to make sure there were no syntax errors in the website. Then JSHint was used to test the javascript code.
### W3C Markup Validator
<details><summary>Home Page HTML Validation</summary>

![HTML Validator Test](/readME-assets/testing/index_html_test.png)
</details>

<details><summary>Quiz Page HTML Validation</summary>

![HTML Validator Test](/readME-assets/testing/quiz_html_test.png)
</details>

### W3C CSS Validator
When testing the css validator, there were 8 warning that were displayed. This first was that the font was imported into the css. This was corrected by importing the font directly to the home page as good html, css practices.

The next warning was that the next button that used a opacity of 0.1 to display as unuseable was fixed by changed the color on each color by one value. This kept the color alsmost the same and fixed the warning.

Final issue was the pointer event as auto was not defined by any specification but was supported by browsers. So i had changed the value from auto to inherit. This inherited the value and since the buttons default was to be clicked. This solveed the warning and the css passwed with no warnings or errors.

<details><summary>Style Sheet CSS Validation Warnings</summary>

![Style Sheet CSS Test Warnings](/readME-assets/testing/css_warnings.png)
</details>

<details><summary>Style Sheet CSS Validation Passwed</summary>

![Style Sheet CSS Test Passed](/readME-assets/testing/css_test_complete.png)
</details>

### JSHint Testing
JSHint was used to test all of the javascript files used for the quiz.

<details><summary>Current.js Passed</summary>

![Current.js Passed](/readME-assets/testing/current_js_test.png)
</details>
<details><summary>Script.js Passed</summary>

![Script.js Passed](/readME-assets/testing/script_js_test.png)
</details>

### Lighthouse Testing
<details><summary>Lighthouse Homepage Testing</summary>

![Lighthouse Testing](/readME-assets/testing/index_lighthouse.png)
</details>

<details><summary>Lighthouse Quizpage Testing</summary>

![Lighthouse Testing](/readME-assets/testing/quiz_lighthouse.png)
</details>

## **Further Testing** 
### Browser Testing
The website responsiveness was tested in the browsers below.
- Google Chrome
- Safari
- Brave

All testing of quiz functionality was correct and all working correctly.
Each question reports the correct answer to the user and displays the correct answer when an incorrect answer is selected.

## **Bugs**
~~First noticeable bug is when the user selects to start the quiz. The popup icon shows and the rest of the page is blurred to allow the user to focus on the page. On the left-hand side of the screen, the blur overlaps the hidden overflow of the quiz background and container. So the user can see a faint blue line on the left side of the page.~~

~~Another issue that has been found is the responsiveness on mobile view. Due to the width of the page and the sliding view of the quiz. I was unable to locate a solution to show a smaller view on the mobile device.~~

All bugs were fixed as the quiz was seperated onto two pages and code was restructed to work as seperate pages. Along with media queries were added to allow for all devices. From extra small (320px wide) all the was too extra large (1200px wide) and above

## **Deployment**
### Github Pages
The project was deployed to git hub pages using the following steps.
1. Log into GitHub and navigate to the project repository [InPhysical Quiz](https://github.com/danieljcave/inphysical-quiz)
2. At the top of the repository, find an option for "Settings" on the menu.
3. Scroll down in the settings until an option for the "GitHub Pages" section.
4. Under the source dropdown, select "Deploy from Main Branch"
5. The Page should then refresh automatically.
6. Scroll back down the page and then find the link to the published page [link](https://github.com/danieljcave/inphysical-quiz) in the GitHub Pages section.

### Making a Local Clone
1. Log into GitHub and navigate to the project repository [InPhysical Quiz](https://github.com/danieljcave/inphysical-quiz)
2. Under the repository at the top of the page, select "Clone".
3. There will be 3 options to clone from. HTTPS, SSH or Github CLI. Or Download the repository.
4. Cloning with HTTPS, copy link and open git bash.
5. Then type `git clone` and paste the URL following. It should look like this 
> `git clone https://github.com/danieljcave/inphysical-quiz`
6. Followed by pressing Enter, the repository will then be cloned locally.
If there are any issues with cloning the repository, GitHub has a detailed guide with extra information if any issues arise. [Click Here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

### Forking the Repository
Forking a repository will make a copy of that repository and edit without making any changes to the original repository to mainly test ideas or changes with the repository.
1. Log into GitHub and navigate to the project repository [InPhysical Quiz](https://github.com/danieljcave/inphysical-quiz)
2. Scroll to the top of the repository to top where there is an option called "Fork"
3. This will then allow you to make a copy of the repository in your GitHub account.

## **Credits**
### Website Content
All Questions and information were provided by author and developer - Daniel Cave
Javascript functionality of scoring, question number and display viewports was sourced from a range of youtube guides and MDN Web Docs for assistance and help with functionality and understanding.
## Media
- [Pexals](https://www.pexels.com/) - Background image sourced and found from Pexals.

## **Special Acknowledgements**
- My Mentor **Spencer Barriball** for overall feedback and guidance along my project journey to improve the overall website and assist me as a developer.