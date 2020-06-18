# Types of error

Generally speaking, when you do something wrong in code, there are two main types of error
that you'll come across:
***Syntax error***: These are spelling errors in your code that actually cause the program
not to run at all, or stop workig part way through - you will usually be rpvided with some
error messages too. These are usually okey to fix, as long as you are familiar with the 
right tools and know what the error messages mean!
***Logic error***: These are errors where the syntax is actually correct but the code is 
not what you intended it to be, meanung that program runs successfully but gives incorrect
results. These are often harder to fix than syntax errors, as there usually isn't an error
message to direct you to the source of the error.

It's not that simple - there are some other differentiators as you drill down deeper. But
the above classifications will do at this early stage in your career. We'll look at both
of these types going forward.

Elementary we can download existing project and discover it on presence of different bugs.
[Download](https://github.com/Jenuaz/js_beginner_course/tree/master/00_Practice_Material/ex02%5BGuessTheNumber%5D)
We will deliberately make a mistake in syntax. Open js/core.js file and replace capital letter
'E' in guessSubmit.addEventListener to see something like this -> guessSubmit.addeventListener.
Also notice that JS in case sensative language. Save all changes and run the project again.
In browser you will see the same form as previouse. Exclusion only that nothing works. To
find out what the reason of not working game open a console. There you will notice an red text
where will be shown error reason. In ous case the reason is: 'Uncaught TypeError: guessSubmit.
addeventListener is not a function'. So as you guess problem there where we left it.



