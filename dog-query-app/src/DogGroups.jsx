import {useQuery} from '@tanstack/react-query';

export default function DogGroups() {
    const {isPending, isError, data, error} = useQuery({
        queryKey: ['group'],
        queryFn: () => fetch('https://dogapi.dog/api/v2/groups')
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
                {data.data.map((group) => (
                    <li key={group.id}>{group.attributes.name}</li>
                ))}
            </ul>
        </div>
    );
}