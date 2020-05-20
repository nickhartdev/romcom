# RomCom #

Mod 1 Pair-Project  

Derek Romero: https://github.com/dereklromero13  
Nick Hart: https://github.com/nickhartdev  
Deployed site: https://nickhartdev.github.io/romcom/

## Overview ##

RomCom is a single page app that lets the user randomly generate, create, save and view their own romantic novel covers using HTML, CSS and vanilla JavaScript.  

Link to project outline: https://frontend.turing.io/projects/module-1/romcom-pair.html

## Project Timeline and Resources ##

This project was done completely remotely via video calls over a 6 day period. We used gitHub projects to track our progress alongside git version control and ultimately completed the specifications through iteration 4.   

## Successes ##

- **Dom Manipulation**: We developed a better understanding of query selectors, event listeners, and using functions to make the site more interactive.

- **Remote Collaboration**: This project was an excellent opportunity to gain experience in remote teamwork and planning.

- **Git Workflow**: We gained a better understanding of best practices using git workflow by applying our working knowledge to a larger project.

## Progression ##

#### Random Functionality (Iterations 0, 1, 2)

![Demonstrating functionality of "Show Random Cover" button](https://user-images.githubusercontent.com/60753853/82389473-8675e080-99f9-11ea-9fb4-9b0a2f4a3b20.gif)  

When the 'Show Random Cover' button was pressed, it triggered a function that put a cover together by pulling from a few arrays - one for the cover, one for the title, and then the two descriptors were pulled from the same array. We also implemented navigation by changing element visibility.

#### Saving User Created Covers (Iteration 3)

![Demonstrating user generated cover form, as well as displaying user generated form](https://user-images.githubusercontent.com/60753853/82389477-8a096780-99f9-11ea-9757-f81ecceb0edf.gif)  

After setting up navigation by manipulating the visibility of various elements, we then set up a feature that allows the user to create their own pages by pushing their field inputs to the same arrays from the last step - and then assigning those values to elements we accessed with query selectors to actually display them on the home page.

#### Saving Covers and looking at them in a Gallery (Iteration 4)

![Demonstrating saving and viewing covers, showing the saved covers in gallery view](https://user-images.githubusercontent.com/60753853/82389482-8c6bc180-99f9-11ea-8576-c8eaadbbd30d.gif)  

By clicking the "Save Cover" button, the cover displayed on the home page is added to an array of saved covers, and then that array is used to display all covers in the saved covers screen.
