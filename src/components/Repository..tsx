import styled from 'styled-components'
import { RepositoryItem } from '../components/RepositoryItem'
import { useEffect, useState } from 'react'

const Styled = styled.div`
h1{
    margin-bottom: 20px;
}
`

interface Repository {
    name : string;
    description : string;
    html_url : string;
}


export const Repository = () => {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/rocketseat/repos')
        .then(response => response.json())
        .then(repositories => setRepositories(repositories))
    }, [])

    return (
        <Styled>
            <h1>Lista de repositórios</h1>
            
            <ul>
             {repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />)}
            </ul>
        </Styled>
    )
}