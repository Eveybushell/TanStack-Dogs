import {useQuery} from '@tanstack/react-query';
import BreedDetails from './BreedDetails'
import { useState } from 'react';

export default function DogBreeds({ onSelectBreed }) {
    const [breedId, setBreedId] = useState(null)
    const {isPending, isError, data, error} = useQuery({
        queryKey: ['breeds'],
        queryFn: () => fetch('https://dogapi.dog/api/v2/breeds')
            .then(res => res.json())
    });

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div>
            <h1>Dog Breeds</h1>
            <ul>
                {data.data.map((breed) => (
                    <li onClick={() => setBreedId(breed.id)} key={breed.id}>{breed.attributes.name}
                        {breedId === breed.id && (
                            <div>
                            <BreedDetails id={breed.id} />
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}