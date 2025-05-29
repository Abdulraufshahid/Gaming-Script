// This is a placeholder API route
// In a real implementation, you would connect to a database or external API

export default function handler(req, res) {
  // Simulated game data
  const games = Array.from({ length: 20000 }, (_, index) => ({
    id: index + 1,
    title: `Game ${index + 1}`,
    thumbnail: `https://picsum.photos/seed/${index}/400/300`, // Placeholder images
    category: ['Action', 'Puzzle', 'Strategy', 'Racing', 'Sports'][Math.floor(Math.random() * 5)],
    description: 'An exciting game for all ages!',
    url: `/game/${index + 1}`
  }));

  // Pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedGames = games.slice(startIndex, endIndex);

  res.status(200).json({
    games: paginatedGames,
    totalGames: games.length,
    currentPage: page,
    totalPages: Math.ceil(games.length / limit)
  });
} 