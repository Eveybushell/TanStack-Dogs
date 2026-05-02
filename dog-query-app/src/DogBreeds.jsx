import {useQuery} from '@tanstack/react-query';

export default function DogBreeds({ onSelectBreed }) {
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
            <ul>
                {data.data.map((breed) => (
                    <li onClick={() => onSelectBreed(breed.id)} key={breed.id}>{breed.attributes.name}</li>
                ))}
            </ul>
        </div>
    );
}