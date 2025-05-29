import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function GameDetail() {
  const router = useRouter();
  const { id } = router.query;

  // In a real implementation, this would fetch the game data from an API
  const game = {
    id,
    title: `Game ${id}`,
    description: 'An exciting game for all ages!',
    category: 'Action',
    thumbnail: `https://picsum.photos/seed/${id}/800/600`,
    instructions: 'Use arrow keys to move. Space to jump. Collect coins and avoid obstacles!'
  };

  return (
    <Layout
      title={`${game.title} - Play Free Online Game | GameZone`}
      description={`Play ${game.title} online for free. ${game.description}`}
    >
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
              <p className="text-gray-600 mb-4">{game.description}</p>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">How to Play</h2>
                <p className="text-gray-700">{game.instructions}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Game Controls</h2>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Arrow Keys: Move</li>
                  <li>Space: Jump</li>
                  <li>Enter: Pause</li>
                </ul>
              </div>

              <div className="flex justify-between items-center">
                <button
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={() => {
                    // In a real implementation, this would load the game
                    alert('Game loading...');
                  }}
                >
                  Play Now
                </button>

                <Link href="/" className="text-blue-600 hover:text-blue-800">
                  ← Back to Games
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 