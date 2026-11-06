import { useLoaderData } from "react-router"
import GameList from "../components/Gamelist";

export default function SearchPage() {
  const game = useLoaderData();
  console.log(game);

  return (
    <>
      <GameList>
        {game ? (
          <GameList.Card key={game.id} game={game} />
        ) : (
          <p>No responses :c.</p>
        )}
      </GameList>
    </>
  )
}