# Proyecto-Knights-Travails

This project implements an algorithm to find the shortest path a knight can take to move from one square to another on a chessboard.

## Description

The `knightMoves` function calculates and returns the shortest path for a knight to travel between two given squares on a chessboard. The chessboard is represented as a grid, and the squares are identified by their coordinates \[x, y]. The function uses a Breadth-First Search (BFS) algorithm to explore possible paths and find the shortest one.

## Features

- **Shortest Path Calculation:** Finds the minimum number of moves required for a knight to travel between two squares.
- **Path Visualization:** Returns an array containing the sequence of squares visited by the knight, representing the shortest path.
- **BFS Implementation:** Utilizes the Breadth-First Search algorithm for efficient pathfinding.
- **Coordinate-Based Input:** Accepts square coordinates as input, making it easy to specify start and end positions.

## Usage

To use the `knightMoves` function, provide the starting and ending coordinates as arrays \[x, y].

```javascript
knightMoves([0, 0], [3, 3]);
// Example output:
// You made it in 2 moves! Here's your path:
// [0, 0]
// [1, 2]
// [3, 3]

knightMoves([0, 0], [1, 2]);
// Example output:
// You made it in 1 moves! Here's your path:
// [0,0]
// [1,2]

knightMoves([3, 3], [0, 0]);

// Example output.
// You made it in 2 moves! Here's your path:
// [3, 3]
// [1, 2]
// [0, 0]

knightMoves([0, 0], [4, 4]);

// Example output.
// You made it in 4 moves! Here's your path:
// [0, 0]
// [2, 1]
// [4, 2]
// [2, 3]
// [4, 4]

knightMoves([2, 2], [2, 2]);

// Example output:
// You made it in 0 moves! Here's your path:
// [2, 2]
```
