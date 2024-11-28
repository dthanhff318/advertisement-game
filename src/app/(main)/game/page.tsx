import { GameCarousel } from './components/game-carousel';
import GameCart from './components/game-cart';
import PageGame from './components/page-game';

export default function Game() {
  return (
    <div className="w-full h-[100vh]">
      <PageGame></PageGame>
      <div className="mt-[50px] flex justify-center w-full">
        <GameCart></GameCart>
      </div>
    </div>
  );
}
