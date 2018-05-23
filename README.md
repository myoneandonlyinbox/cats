# Programming challenge
A json web service has been set up at the url: http://agl-developer-test.azurewebsites.net/people.json

You need to write some code to consume the json and output a list of all the cats in alphabetical order under a heading of the gender of their owner.

You can write it in any language you like. You can use any libraries/frameworks/SDKs you choose.

Example:
Male
Angel
Molly
Tigger
Female
Gizmo
Jasper
Notes

Most of this problem could have been solved using the native JS array methods and preferably I'd want to go that way - and use native methods. 

I used es6 and template strings as using a framework for this problem would in my mind be overkill. I could use reduce to sort but arrays had sort as a method so... yeah ... :D

I assumed that you wanted the gender of each owner with the list of sorted cat names underneath - not a gender title for each gender with all sorted cat names underneath. i.e. not like 

Male 

All cat names with male owners

Female

All cat names with female owners

I've added in testing of the 2 main functions that were most important. You can find tests within the app/tests folder. I use Karma + Jasmine. 


# To Run

Just double click on the app/index.html - no need for servers or anything. However, be sure to be connected to the internet as the fetch request to your URL needs to execute. 

Most of the execution code is in ap/scripts/execute.js

Other helper methods I broke apart are in the remaining 2 files - app/scripts/filtered-object.js and app/scripts/pop-cat-names.js

# Run Tests

In the command line - run:

npm install

to install dependencies.

Next just run karma start in the root directory. That should run the unit tests. 