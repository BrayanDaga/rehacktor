import { useLoaderData } from "react-router"
import GameList from "../components/Gamelist";

export default function SearchPage() {
  const games = useLoaderData();
  console.log(games);

  return (
    <>
      <GameList>
        {games.map((game) => {
          return <GameList.Card key={game.gameID} game={game} />
        })}
      </GameList>
    </>
  )
}