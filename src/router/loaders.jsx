export async function getAllGamesLoader() {
  const promise = await fetch(`https://www.cheapshark.com/api/1.0/deals`);
  const json = await promise.json();
  return json;
}

export async function getSearchedGames({ params }) {
  // console.log(params);
  const promise = await fetch(`https://www.cheapshark.com/api/1.0/games?title=${params.slug}`); 
  const json = await promise.json();
  return json;
}