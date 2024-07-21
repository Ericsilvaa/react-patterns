import { useState } from 'react'
import { allSports } from './sports'
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

export const ContainerSports = () => {
  const [sportList] = useState<Array<SportData>>(() => Object.values(allSports))

  const [selectedSport, setSelectedSport] = useState<SportData | null>(null)

  return (
    <>
      <h1>Choose a sport</h1>
      <h6>Sport {selectedSport && <>{selectedSport.name} selected</>}</h6>
      <List
        listItems={sportList.map((p) => (
          <li key={p.id}>
            <SportListItemButton
              sport={p}
              onClick={() => setSelectedSport(p)}
            />
          </li>
        ))}
      />
    </>
  )
}

export default List
