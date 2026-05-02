import {useQuery} from '@tanstack/react-query';

export default function BreedDetails({ id }) {
    const {isPending, isError, data, error} = useQuery({
        queryKey: ['breed', id],
        queryFn: () => fetch(`https://dogapi.dog/api/v2/breeds/${id}`)
            .then(res => res.json())
    });

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <>
            <ul>
                <li>
                    {data.data.attributes.name}
                    <br/>
                    {data.data.attributes.description}
                    <br/>
                    <span>Life is between {data.data.attributes.life.min} years and {data.data.attributes.life.max} years.</span>

                </li>
            </ul>
        </>
    );
}