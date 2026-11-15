import { useLoaderData, useParams } from "react-router";
import GameList from "../components/Gamelist";

export default function GenrePage() {
  const games = useLoaderData();
  const { slug } = useParams();
  return (
    <>
      <h1 className="text-center text-3xl mt-10">Filtered by genre: {slug}</h1>
      <GameList>
        {games && games.map((game) => (
          <GameList.Card key={game.id} game={game} />
        ))}
      </GameList>
    </>
  );
}