# Here we go to create 'Guess the number' game
## Prerequisites: 
Basic computer literacy, a basic understanding of HTML and CSS, an understanding of what JavaScript is.
## Objective:
To have a first bit of experience at writing some JavaScript, and gain at least a basic understanding of
what writing a Javascript program involves.
## Quest:
Your boss said to you:
'I want you to create a simple guess the number type game. It should choose a random number between 1 
and 100, then challenge the player to guess the number in 10 turns. After each turn the player should
be told if they are right or wrong, and if they are wrong, whether the guess was too low or too high.
It should also tell the player what numbers they previously guessed. The game will end once the player
guesses correctly, or once they run out of turns. When the game ends, the player shpuld be given an 
option to start playing again.'
## Step to solve the task (break task in to simple subtask):
Upon looking at this brief, the first thing we can do is to start breaking it down into simple actionable
tasks, in as much of a programmer mindset as possible:
1. Generate a random number between 1 and 100.
2. Record the turn number the player is on. Start it on 1.
3. Provide the player with a way to guess what the number is.
4. Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
5. Next, check whether it is the correct number.
6. If it is correct:
	- Display congratulations message;
	- Stop the player form being able to enter more guesses (this would mess the game up).
	- Display control allowing the player to restart the game.
7. If it is wrong and the player has turns left:
	- Tell the player they are wrong.
	- Allow them to enter another guess.
	- Increment the turn number by 1.
8. If it is wrong and the player has no truns left:
	- Tell the player it is game over.
	- Stop the player from being able to enter more guesses (this would mess the game up).
	- Display control allowing the player to restart the game.
9. Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.
