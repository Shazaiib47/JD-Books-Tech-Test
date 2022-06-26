# JD-Bookstore Tech Test

## Introduction to Task

The JD Bookstore is a webpage created using HTML/CSS and JavaScript to list a variety of books through the Google Books API URL.
The webpage is completely responsive and has JavaScript functionality to ensure the listing page has been met through the requirements.

## Requirements met

1) Each book in the list displays book cover, title, subtitle, authors, number of pages and description

2) Able to select on a book anywhere on the page by clicking on it.
    - Made clear through the use of user clicking on it and a selection is made via is-selected class

3) Able to click on the selected book a second time to remove the class

4) Reloading the page remembers the state of selected books
    - This currently has limited functionality and does not perform as expected

5) Book description has a max character limit of 140 characters.

## This is cross-browser compatible and has been used on Google Chrome, Firefox, Safari and Microsoft Edge

## Issues Faced / Functional Errors

## 1. Card Div Duplication, listing 16 over 8.

This following issue had occured where I had 8 declared empty div's in my HTML and 2 extra for my featured.

The problem I did not realize was, I was using markup in my script to declare and append dynamic data to the div's that were being created. 

As the div's had similar naming conventions in terms of classes, this had produced 8 additional divs that were empty, as the static div's in the HTML were unpopulated.

### How was this fixed?

I had fixed this by commenting out the div's in HTML to notice a difference whilst also appending the dynamic data. This had seemed to work and I had then deleted the commented out 8 declared static Divs.

The below image demonstrates the issue, as it highlights some of the cards.

![alt text](/documentation/duplicate-error.png)

## 2. localStorage not saving every card when "is-selected", just the 1.

This issue revolves around the localStorage functionality. The use of storing upon browser reload. In this case I had to ensure the selected cards had their click state saved upon browser refresh. As of now this only works on 1 card and not multiple; but the click event on-and-off still works as intended.

I will be amending this issue to ensure this has been resolved through the use of function debugging.

## Validation

This has been checked and ran through multiple Identifiers, checkers and errors using resources such as JSHint and NU HTML Checker