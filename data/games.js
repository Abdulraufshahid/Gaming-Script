export const games = [
  {
    id: 'flappy-bird',
    title: 'Flappy Bird',
    description: 'Navigate a bird through pipes without hitting them.',
    category: 'Arcade',
    thumbnail: '/games/flappy-bird/thumbnail.png',
    gameFile: '/games/flappy-bird/index.html',
    instructions: 'Press Space or tap to make the bird fly. Avoid the pipes!',
    controls: [
      { key: 'Space', action: 'Fly' },
      { key: 'P', action: 'Pause' }
    ]
  },
  {
    id: 'snake-game',
    title: 'Snake Game',
    description: 'Classic snake game - eat food and grow longer!',
    category: 'Arcade',
    thumbnail: '/games/snake-game/thumbnail.png',
    gameFile: '/games/snake-game/index.html',
    instructions: 'Use arrow keys to control the snake. Eat the food to grow longer!',
    controls: [
      { key: 'Arrow Keys', action: 'Move' },
      { key: 'P', action: 'Pause' }
    ]
  },
  {
    id: 'memory-game',
    title: 'Memory Game',
    description: 'Test your memory by matching pairs of cards.',
    category: 'Puzzle',
    thumbnail: '/games/memory-game/thumbnail.png',
    gameFile: '/games/memory-game/index.html',
    instructions: 'Click on cards to flip them. Find matching pairs!',
    controls: [
      { key: 'Mouse Click', action: 'Flip Card' }
    ]
  }
];

export const categories = [
  { id: 'arcade', name: 'Arcade', icon: '🎮' },
  { id: 'puzzle', name: 'Puzzle', icon: '🧩' },
  { id: 'action', name: 'Action', icon: '⚡' },
  { id: 'strategy', name: 'Strategy', icon: '🎯' }
];

export function getGameById(id) {
  return games.find(game => game.id === id);
}

export function getGamesByCategory(category) {
  return games.filter(game => game.category.toLowerCase() === category.toLowerCase());
}

export function getAllGames() {
  return games;
}

export function getAllCategories() {
  return categories;
} 