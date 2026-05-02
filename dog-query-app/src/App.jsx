import { useState } from 'react'
import './App.css'
import BreedDetails from './BreedDetails'
import DogBreeds from './DogBreeds'
import DogFacts from './DogFacts'
import DogGroups from './DogGroups'

function App() {
  const [breedId, setBreedId] = useState(null)

  return (
    <>
      <DogBreeds onSelectBreed={(id) => setBreedId(id)}/>
      {breedId && <BreedDetails id={breedId} />}

      <DogFacts/>
      <DogGroups/>
    </>
  )
}

export default App
