# Elements Battle
Elements Battle is a webiste that allows users to play a game themed around the interactions of 5 different elements based on  "Rock, Paper Scissors, Lizard, Spock". The site's target user is anyone wishing to play a game with elements of chance, and is suitable for all ages. The game's simple premise would suit anyone who is new to computer games, but can be enjoyed by anyone.
![Site responsiveness view](assets/readme-images/image-1.png)

## Features
The site's html has been constructed to provide an uncomplicated layout. Aside from the title, it also contains an explanation of the rules of the game and an area for displaying the player's choice and the computers, as well as a counter to keep track of the player's score and the computer's.

### Title
The game's name, prominently displayed at the top of the page, along with a tagline to let the user know it's a game of chance:
![Header and tagline](assets/readme-images/image-2.png)

### Rules
The Modal button at the top of the screen can be opened for an explaination of how the various interactions work.
![Modal and button](assets/readme-images/image.png)

### Options
Allows the user to select their element for a given round.
![Player's options](assets/readme-images/image-3.png)

### Graphics
Displays the elements selected by the player and the computer for the round.
![Image display](assets/readme-images/image-4.png)

### Scoreboard
Tracks number of player & computer wins.
![alt text](assets/readme-images/image-5.png)

### Potential Features
Due to time constraints, I was unable to implement a feature to enable the player to enter a username.

## Testing
Manual testing was conducted after the implementation of the javaScript to govern the interactions of the various elements by selecting each one in turn until the computer had cycled through all of the options to test that they had been implemented correctly. console.log() was used to confirm that these worked. Similar testing was conducted after the addition of each new feature.

The site was tested in Google Chrome, Microsoft Edge and Firefox for functionality and responsivity, and worked equally well in each browser. The alerts to declare loss or victory appeared as expected and the game reset without difficulty.

Lighthouse testing was conducted also:
![Lighthouse test results](assets/readme-images/image-6.png)


|Test|Outcome|
|----|----|
|Testing button for each element to ensure each selected the right one|Passed|
|Testing image alt text by removing characters from the html link to the image|Passed|
|Modal displays when called|Passed|
|Game areas change from horizontal to vertical alignment on mobile screens|Passed|
|Score increments on player or computer winning a draw|Passed|
|Alert to end the round and reset the page appears after the result of the final draw|Passed|


### Validation
The HTML, CSS and javaScript were each run through the relevant validator websites, W3C for HTML and javaScript, Jigsaw for CSS 

HTML:
![HMTML validation result](assets/readme-images/image-7.png)

CSS:
![CSS validation result](assets/readme-images/image-8.png)

javaScript
![javaScript validation result](assets/readme-images/image-9.png)

## Bugs
Alignment of score areas was not in complete sync with picture areas, this was due to  them being in a separate div and not arrayed in a column. This was recitified by moving the score into the same div as the picture. 

The function to display computer choices initially didn't work, examining the core revealed this was because the onclick attribute had not been added to the buttons. Once added, I initially got an error message on clicking the buttons because options for choice by the player were not defined. Once defined, testing would not return steel as a computer choice. This was due to the Math function being used incorrectly - a multiplication factor of 4 was being used on the random number generated to attempt to capture steel in the array of choices, not realising that 5 was the correct factor as math.floor was being used in conjunction with math.random. 

On introduction of a switch statement to govern choice interactions, an error was produced to say the gameManager function was undefined. Previously when using console.log to display computer selections, this had worked and the computer's pick had been shown. This was due to the switch statement outcome not being assigned to the result of the function. A further problem arose when 2 alerts were being displayed for all outcomes except draws. Attempts to rectify this by using a separate interaction for each other element resulted in the gameManager error arising again. The error was corrected by inserting a break between each line of the switch statement used to create the interactions, and by combining the previous 2 lines of each case into one line using || between options for that case. 

Initial attempts to change the pictures displayed according to the player's and computer's choice were unsuccessful. This was remedied through use of classes that changed whether the display of an image was set to none or block, and setting the gameManager function to add or remove these classes to given images depending on what the player chose. A subsequent issue was found in the images only displaying for the player's choice, and the alert arising before the image changed. This was rectified and the alert for winning each draw was removed and replaced with one at the end of a round to declare win/loss. A subsequent problem emerged in the computer's image not relating to its choice. On re-examination of the code, it was determined that the old system was making the computer's image be chosen separately from its choice of element as the array for the image to be chosen from had been included in the function to choose the computer's image, resulting in a disconnect between the two. The code was changed so that the results of the gameManager function fed into the setPicture function, resulting in the computer's image matching its chosen element. A final problem was images stacking on top of each other in the game areas. This was resolved by expanding the if statements governing the display of images to add and remove the class conferring visibility on each button click.

On adding the function to increment the player's score on a win, initial attempts to implement it were unsuccessful as the call for the score function could not be added successfully to the gameManager function. Subsequent testing revealed that the function to increment the score had not been referencing the correct element in the html. On fixing this, a new bug emerged as the player's score would not increment past 1. On adding the function to increase the computer's score, it initially didn't work. On re-examination of the code, the line in the function to update the computer's score that updated the element's inner html was not referencing the correct variable. On correction, it worked properly, and on implementation of both functions across all outcomes, the scores continued past 1. 

The functions to increase the player's and computer's scores were modified to introduce a "lives" system to make the game more interesting, with the first to 5 victories being the winner. There was an issue with the order of operations in this, as the alert to say a game was won or lost was declared before the score rolled over to 5. The functions were then further modified to reset the page on closing the alert, but the order of operations was again an issue, and the player could no longer see the outcome of the final round. These were resolved by setting a delay on the alerts through the setTimeout method to allow the images and score to load in first. Additionally, the alert was being displayed twice. This was because the alert was written on its own as well as being part of the if statement to reset the page. On removing the one on its own. the alert only displayed once.

## Deplyoment
### This was done by using the following steps:
1. Going to the Settings page in the repository, and there selecting Pages
2. Selecting "Deploy from a Branch" under Source, from there setting branch to main and folder to /root, then saving the chosen branch
3. Returning to the code page, and wait 5 minutes before refreshing.
4. Opening deployments on the right of the code page, selecting it and then opening the site once inside

## Credits
1. The following was used as a reference to help solve the bug of the computer displaying the wrong pictures: https://stackoverflow.com/questions/30179489/how-do-i-make-images-change-with-a-rock-paper-scissors-game

2. The functions used in LoveMaths to increment scores were used as a template to achieve the same goal here.

3. The following tutorial was used to help write the gameManager function https://www.youtube.com/watch?v=3uKdQx-SZ5A&t=697s 

4. The following was used to help implement the victory/game over states: https://stackoverflow.com/questions/16955019/how-to-reload-a-page-after-the-ok-click-on-the-alert-page

5. The following was used to resolve the order of operations bug on a win/loss https://www.sitepoint.com/delay-sleep-pause-wait/#:~:text=The%20standard%20way%20of%20creating,()%20%3D%3E%20%7B%20console.

6. The following was used as a reference for the modal:https://www.w3schools.com/howto/howto_css_modals.asp

7. The images used in the site were taken from the following sources:

    a. Water image: https://www.stockio.com/free-icon/nature-icons-water-drop?utm_content=cmp-true

    b. Fire image: https://stock.adobe.com/search?k=fire+icon&asset_id=235263034
    
    c. Earth image: https://www.vecteezy.com/vector-art/9660869-earth-element-nature-vector-round-icon-for-design
    
    d. Air image: https://www.vectorstock.com/royalty-free-vector/abstract-air-symbol-vector-18170953
    
    e. Steel image: https://www.vecteezy.com/vector-art/35241602-silver-shield-icon-flat-vector-design-heraldic-symbol-award-badge-shape-medieval-metal-weapons
    
    f. Question Mark image: https://www.iconsdb.com/white-icons/question-mark-icon.html
    
    g. Favicon: https://icons8.com/icons/set/fire

## Acknowledgements
I wish to acknowledge my mentor, Alan Bushell, who provided me with feedback and advice throughout this project. I wish also to acknowledge the Code Institute tutors, who provided valuable advice and insight when I had questions