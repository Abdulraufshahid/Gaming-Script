import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { getGameById } from '../../data/games';
import CookieConsent from '../../components/CookieConsent';

export default function GameDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const gameData = getGameById(id);
      if (gameData) {
        setGame(gameData);
      } else {
        setError('Game not found');
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <Layout title="Loading...">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title="Game Not Found">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Game Not Found</h1>
            <p className="text-gray-600 mb-8">Sorry, the game you're looking for doesn't exist.</p>
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              ← Back to Games
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Schema.org markup for VideoGame
  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": game.title,
    "description": game.description,
    "genre": game.category,
    "gamePlatform": "Web Browser",
    "applicationCategory": "Game",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "ratingCount": "1000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "GameZone",
      "url": "https://yourdomain.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GameZone",
      "url": "https://yourdomain.com"
    },
    "image": game.thumbnail,
    "url": `https://yourdomain.com/game/${game.id}`,
    "inLanguage": "en",
    "gameItem": {
      "@type": "Thing",
      "name": game.title,
      "description": game.description
    },
    "gameServer": {
      "@type": "GameServer",
      "serverStatus": "Online",
      "playersOnline": "1000+"
    },
    "playMode": "SinglePlayer",
    "gamePlatform": ["Web Browser", "Mobile Browser"],
    "device": ["Desktop", "Mobile", "Tablet"],
    "gameTip": game.instructions,
    "gameLocation": {
      "@type": "WebPage",
      "url": `https://yourdomain.com/game/${game.id}`
    }
  };

  // Game descriptions with gameplay, controls, tips, and fun facts
  const gameDescriptions = {
    'flappy-bird': {
      gameplay: `Flappy Bird is an addictive arcade-style game where you control a bird flying through a series of pipes. The goal is simple yet challenging: navigate your bird through the gaps between pipes without hitting them. The game features smooth physics-based gameplay that requires precise timing and quick reflexes. As you progress, the pipes get closer together, increasing the difficulty and testing your skills.`,
      controls: `The controls are straightforward - press the Space bar or tap the screen to make the bird flap its wings and gain altitude. Release to let it fall naturally. The key to success is finding the right rhythm between flaps to maintain the perfect height. Remember, each tap gives you a small boost upward, so timing is crucial.`,
      tips: [
        'Start with gentle taps to get a feel for the bird\'s movement',
        'Don\'t tap too rapidly - this can cause the bird to gain too much height',
        'Try to maintain a steady rhythm between the pipes',
        'Focus on the gap ahead rather than the bird itself',
        'Take breaks between attempts to maintain focus'
      ],
      funFacts: [
        'Flappy Bird was created by Vietnamese developer Dong Nguyen in 2013',
        'At its peak, the game was making $50,000 per day from ad revenue',
        'The game was removed from app stores in 2014 due to its addictive nature',
        'The original game used the same pipe graphics as Super Mario Bros',
        'The highest possible score in the original game was 999'
      ]
    },
    'snake-game': {
      gameplay: `Snake Game is a classic arcade experience where you control a snake that grows longer as it eats food. The objective is to guide your snake to eat as much food as possible without hitting the walls or your own tail. The game starts simple but becomes increasingly challenging as your snake grows longer, requiring careful planning and quick reflexes to navigate the increasingly crowded playing field.`,
      controls: `Use the arrow keys to control the snake's direction. The snake moves continuously in the current direction until you change it. You can't reverse direction directly (e.g., if moving right, you can't immediately move left). The key is to plan your route ahead and avoid trapping yourself in corners or against your own tail.`,
      tips: [
        'Always leave yourself an escape route',
        'Try to keep the snake in the center of the screen when possible',
        'Plan your route before making sharp turns',
        'Don\'t chase food that would trap you',
        'Use the walls to your advantage when cornered'
      ],
      funFacts: [
        'The first Snake game was created in 1976 for arcade machines',
        'The Nokia phone version of Snake was one of the first mobile games',
        'The game was inspired by the concept of a snake eating its own tail',
        'Some versions of Snake can be played with over 100,000 segments',
        'The world record for the original Nokia Snake is over 400 points'
      ]
    },
    'memory-game': {
      gameplay: `Memory Game is a classic card-matching game that tests your memory and concentration. The game features a grid of cards face down, each with a unique image. Your goal is to find matching pairs by flipping cards two at a time. If the cards match, they remain face up. If they don't match, they flip back face down, and you must remember their positions for future turns. The game ends when all pairs are found, with your score based on the number of moves taken.`,
      controls: `Simply click or tap on a card to flip it. You can flip two cards at a time, and they will automatically flip back if they don't match. The game keeps track of your moves and matches, so you can focus on remembering the card positions. Take your time to plan your moves and try to minimize the number of attempts needed to find all pairs.`,
      tips: [
        'Start by flipping cards in a systematic pattern',
        'Remember the positions of non-matching cards',
        'Try to clear one section of the grid at a time',
        'Don\'t rush - take time to memorize card positions',
        'Use the process of elimination to find remaining pairs'
      ],
      funFacts: [
        'Memory games have been used in psychological studies since the 1950s',
        'The first computerized memory game was created in 1978',
        'Memory games can help improve cognitive function in all age groups',
        'The world record for completing a memory game is under 30 seconds',
        'Memory games are used in brain training programs worldwide'
      ]
    }
  };

  // Get the game description
  const gameDescription = gameDescriptions[game.id] || {
    gameplay: game.description,
    controls: game.instructions,
    tips: [],
    funFacts: []
  };

  return (
    <Layout
      title={`${game.title} - Play Free Online Game | GameZone`}
      description={`Play ${game.title} online for free. ${game.description}`}
    >
      <Head>
        {/* Primary Meta Tags */}
        <title>{`${game.title} - Play Free Online Game | GameZone`}</title>
        <meta name="title" content={`${game.title} - Play Free Online Game | GameZone`} />
        <meta name="description" content={game.description} />
        <meta name="keywords" content={`${game.title}, online game, free game, ${game.category.toLowerCase()}, browser game, play ${game.title.toLowerCase()}, ${game.title.toLowerCase()} online`} />
        <meta name="author" content="GameZone" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://yourdomain.com/game/${game.id}`} />
        <meta property="og:title" content={`${game.title} - Play Free Online Game | GameZone`} />
        <meta property="og:description" content={game.description} />
        <meta property="og:image" content={game.thumbnail} />
        <meta property="og:site_name" content="GameZone" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://yourdomain.com/game/${game.id}`} />
        <meta name="twitter:title" content={`${game.title} - Play Free Online Game | GameZone`} />
        <meta name="twitter:description" content={game.description} />
        <meta name="twitter:image" content={game.thumbnail} />

        {/* Additional Meta Tags */}
        <meta name="application-name" content="GameZone" />
        <meta name="apple-mobile-web-app-title" content="GameZone" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://yourdomain.com/game/${game.id}`} />

        {/* Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
        />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-96">
              <img
                src={game.thumbnail}
                alt={game.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = '/game-icon.png';
                }}
              />
            </div>
            
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{game.title}</h1>
              
              {/* Gameplay Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Gameplay</h2>
                <p className="text-gray-700 leading-relaxed">{gameDescription.gameplay}</p>
              </div>

              {/* Controls Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Controls</h2>
                <p className="text-gray-700 leading-relaxed">{gameDescription.controls}</p>
                <ul className="list-disc pl-6 text-gray-700 mt-4">
                  {game.controls.map((control, index) => (
                    <li key={index}>
                      <span className="font-medium">{control.key}:</span> {control.action}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tips Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Pro Tips</h2>
                <ul className="list-disc pl-6 text-gray-700">
                  {gameDescription.tips.map((tip, index) => (
                    <li key={index} className="mb-2">{tip}</li>
                  ))}
                </ul>
              </div>

              {/* Fun Facts Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Fun Facts</h2>
                <ul className="list-disc pl-6 text-gray-700">
                  {gameDescription.funFacts.map((fact, index) => (
                    <li key={index} className="mb-2">{fact}</li>
                  ))}
                </ul>
              </div>

              {/* Game Section with Responsive Container */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Play Game</h2>
                <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  {/* 16:9 Aspect Ratio Container */}
                  <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      src={game.gameFile}
                      className="absolute inset-0 w-full h-full border-0"
                      title={game.title}
                      allow="fullscreen"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Game may take a moment to load. Please wait...
                </p>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold mb-4">About {game.title}</h2>
                <p className="text-gray-700 mb-4">
                  Welcome to {game.title}, one of the most exciting {game.category.toLowerCase()} games available online! 
                  This browser-based game offers hours of entertainment with its engaging gameplay and intuitive controls.
                </p>
                <p className="text-gray-700 mb-4">
                  Whether you're a casual gamer looking for quick entertainment or a dedicated player seeking a challenge, 
                  {game.title} provides the perfect balance of fun and skill. The game's responsive design ensures a smooth 
                  experience across all devices, from desktop computers to mobile phones.
                </p>
                <p className="text-gray-700">
                  Join thousands of players who have already discovered the joy of playing {game.title}. 
                  With its simple yet addictive gameplay, you'll find yourself coming back for more. 
                  Challenge your friends, beat your high score, and become a master of {game.title}!
                </p>
              </div>

              <div className="flex justify-between items-center mt-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800">
                  ← Back to Games
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CookieConsent />
    </Layout>
  );
} 