export async function getAllGamesLoader() {
  const promise = await fetch(`https://www.freetogame.com/api/games`);
  const json = await promise.json();
  return json;
}