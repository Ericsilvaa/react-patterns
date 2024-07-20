import { useState } from 'react'
import List, { SportListItemButton } from '../../../shared/ListSports'
import { allSports } from '../../../shared/sports'
import { SportData } from '../../../shared/types'

function ContainerSport() {
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

export default ContainerSport
