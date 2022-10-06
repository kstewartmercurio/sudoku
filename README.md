## Overview
This is my first project using JavaScript and React. I'm building upon a project I did a couple years ago where I used C++ and Python to solve sudoku puzzles. For that project I used the Zelle Graphics Library to create a GUI with Python and I used C++ to handle all of the puzzle solving logic. The final version of that project was only accessible from the command line so the goal for this project was to create a finished product that could be hosted on a website.

## Solution Approach
Rather than brute forcing a solution, I opt for a DFS approach where squares are filled in until the puzzle is solved or until an impasse is reached, in which case the program will backtrack. Though brute force would be a manageable task for a program, I wanted to emulate the process that a human would go through when trying to solve a sudoku puzzle.

Every empty square will have a set of values that it could potentially store. My program will find a square with the minimum number of potential values and if that minimum number is one potential value then it will fill in that square, if that minimum number is greater than one then it will make a guess with the square's first potential value. Every "move" that is made gets stored in a stack and whenever backtracking is necessary moves will be popped off of the stack and the board's potential values will be updated accordingly. This process will repeat until every square has zero remaining potential values. At this point, if every square has been filled in then the puzzle has been solved, otherwise the puzzle is not solvable.

## Future Improvements
I am learning JavaScript and React as I build this project so I undoubtedly have optimizations that I could make in the syntax and structure of my program. Additionally, my solution approach doesn't mimic human behavior exactly. A human might be able to recognize parts of the board as being easier to solve than others.
