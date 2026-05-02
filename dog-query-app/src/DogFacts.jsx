import {useQuery} from '@tanstack/react-query';

export default function DogFacts() {
    const {isPending, isError, data, error} = useQuery({
        queryKey: ['fact'],
        queryFn: () => fetch('https://dogapi.dog/api/v2/facts?limit=5')
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
            <h1>Did you know...</h1>
            <ul>
                {data.data.map((fact) => (
                    <li key={fact.id}>{fact.attributes.body}</li>
                ))}
            </ul>
        </div>
    );
}