export default function GameCard({ game }) {
  return (
    <>
      <div className="h-50 relative">
        <img src={`${game.thumb}`} alt={game.title} className="w-full h-full brightness-50" />
        <p className="absolute bottom-px w-full text-center text-white">{game.title}</p>
      </div>
    </>
  )
}