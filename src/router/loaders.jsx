export async function getAllGamesLoader() {
  const promise = await fetch(`https://www.freetogame.com/api/games`);
  const json = await promise.json();
  return json;
}

export async function getSearchedGames({ params }) {
  // console.log(params);
  const promise = await fetch(`https://www.freetogame.com/api/game?id=${params.slug}`); //per momento cosi :/
  const json = await promise.json();
  return json;
}