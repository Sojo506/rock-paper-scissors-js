# Rock · Paper · Scissors (TOP Foundations)

Classic **Rock, Paper, Scissors** game implemented with **JavaScript**, originally designed to run in the **browser console**. Later, it can be extended with a **Graphical User Interface (GUI)** as part of the “Revisiting Rock Paper Scissors” lesson.

## 🎯 Objectives

- Practice basic JavaScript logic and control flow.  
- Use pure functions to determine the winner.  
- Interact with the user through `prompt`/console (first version).  
- Prepare the base for adding a **UI** in a future iteration.  

## 🧩 Features

- Computer randomly selects `rock`, `paper`, or `scissors`.  
- User input is normalized and validated.  
- Calculates the result of a single round and keeps score (e.g., best of 5).  
- Clear console messages showing the progress of the game.  

## 🗂️ Structure

├─ index.html
├─ script.js
└─ README.md


## 🚀 How to Run

1. Clone or download this repository.  
2. Open `index.html` in your browser.  
3. Open the **browser console** (F12 or Ctrl+Shift+I) and follow the instructions.  
   - To quickly verify the setup, try:
     ```js
     console.log("Hello World");
     ```
     You should see it logged in the console.  

## 🛠️ Technologies

- **HTML5**: minimal structure.  
- **JavaScript (ES6+)**: game logic and console interaction.  

## 🧪 What to Test

- Enter valid/invalid values and check error handling.  
- Play multiple rounds and confirm that the **score** updates correctly.  
- Verify that the computer’s **random choice** is evenly distributed.  

## 🧠 Lessons Learned

- Break the problem down: get user choice, get computer choice, **`playRound`** function, and scoring.  
- Write pseudocode first and **test in small steps** (plan → code → test).  
- Commit **early and often**, ideally using **feature branches** and merging to `main`.  

## 📚 References

- [The Odin Project — Project: Rock Paper Scissors](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors)  
- [The Odin Project — Revisiting Rock Paper Scissors](https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors)  
- [The Odin Project — Foundations Path](https://www.theodinproject.com/paths/foundations/courses/foundations)  