export default function GameCard({ game }) {
  return (
    <>
      <div className="h-50 relative">
        <img src={`${game.background_image}`} alt={game.name} className="w-full h-full brightness-50" />
        <p className="absolute bottom-px w-full text-center text-white">{game.name}</p>
      </div>
    </>
  )
}