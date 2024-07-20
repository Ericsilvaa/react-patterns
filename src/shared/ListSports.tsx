import { SportData } from './types'

function List({ listItems }: { listItems: Array<React.ReactNode> }) {
  return (
    <div className='sport-list'>
      <ul>{listItems}</ul>
    </div>
  )
}

export function SportListItemButton({
  sport,
  onClick
}: {
  sport: SportData
  onClick: () => void
}) {
  return (
    <button
      className='sport-item'
      onClick={onClick}
      style={{ ['--accent-color' as any]: sport.color }}
      aria-label={sport.name}
    >
      <img src={sport.image} alt={sport.name} />
      <div className='sport-list-info'>
        <strong>{sport.name}</strong>
      </div>
    </button>
  )
}

export default List
