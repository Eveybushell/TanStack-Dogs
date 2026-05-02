import { useState } from 'react'
import './App.css'
import DogBreeds from './DogBreeds'
import DogFacts from './DogFacts'
import DogGroups from './DogGroups'

function App() {

  return (
    <>
      <DogBreeds onSelectBreed={(id) => setBreedId(id)}/>
      <DogFacts/>
      <DogGroups/>
    </>
  )
}

export default App
