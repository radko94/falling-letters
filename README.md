# Hello there

Here I have made a simple browser game using React, React Hooks and TypeScript.

### Description

When the page loads, the game starts and letters from 'a' to 'e' begin to show up
at random position at the screen. The user can remove letters (if they are more than 2) 
by pressing corresponding keyboard key (keys from 'a' to 'e') and the removed letters
count is being added to the user score. When the score stack up, the level is increasing
accordingly. When level increases the number of spawned letters and game speed increases.
Once a letter fall to the bottom, it cant be removed. When the count of this letters 
equal to 20 game stops.

### Interesting addons

Pause/Resume button 
    - you can pause the game, go grab some coffee, and resume the game

Event tracking
    - you can see how much you get for every key press

### Prerequisites

- NodeJS
- CRA (create-react-app)

### Download and run

```javascript
git clone https://github.com/radko94/falling-letters.git
```

```javascript
npm i && npm run start
```