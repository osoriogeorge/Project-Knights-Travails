function knightMoves(start = [], end = []) {
  const queue = [[start, [start]]];

  const visited = new Set([JSON.stringify(start)]);

  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  while (queue.length > 0) {
    let [current, path] = queue.shift();
    let [x, y] = current;

    if (x === end[0] && y === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach((position) => console.log(position));
      return path;
    }
    for (const [dx, dy] of moves) {
      let newX = x + dx;
      let newY = y + dy;
      let newPosition = [newX, newY];
      let newPosStr = JSON.stringify(newPosition);

      // Verificar si la nueva casilla es válida y no ha sido visitada.
      if (!visited.has(newPosStr)) {
        visited.add(newPosStr);
        let newPath = [...path, newPosition];
        queue.push([newPosition, newPath]);
      }
    }
  }

  return null; // Si no se encuentra un camino.
}

knightMoves([0, 0], [1, 2]);

knightMoves([0, 0], [3, 3]);

knightMoves([3, 3], [0, 0]);

knightMoves([0, 0], [4, 4]);

knightMoves([2, 2], [2, 2]);
