import { useLoaderData } from "react-router";
import GameList from '../components/Gamelist'
export default function Homepage() {

  const games = useLoaderData();
  console.log(games);


  return (
    <>
      <h1 className="font-electro text-3xl text-center font-bold">Reactor</h1>
      <GameList>
        {games.map((game) => {
          return (
            <GameList.Card key={game.dealID} game={game} />
          )
        })}
      </GameList>
    </>
  );
}