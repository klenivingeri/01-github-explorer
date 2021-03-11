import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList(){
    const repository = {
        name: 'unform2',
        description: 'Form in React',
        link: 'http://github.com/unform/unform'
    }
    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
               
                <RepositoryItem enviandoDados={repository}/>
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    )
}