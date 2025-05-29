// This is a placeholder API route
// In a real implementation, you would connect to a database or external API

import { getAllGames, getGamesByCategory } from '../../data/games';

export default function handler(req, res) {
  const { page = 1, limit = 12, category } = req.query;
  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);

  let games = category ? getGamesByCategory(category) : getAllGames();

  // Pagination
  const startIndex = (pageNum - 1) * limitNum;
  const endIndex = pageNum * limitNum;
  const paginatedGames = games.slice(startIndex, endIndex);

  res.status(200).json({
    games: paginatedGames,
    totalGames: games.length,
    currentPage: pageNum,
    totalPages: Math.ceil(games.length / limitNum)
  });
} 