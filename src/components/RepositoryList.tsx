import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useState, useEffect } from "react";

//https://api.github.com/orgs/rocketseat/repos

interface Repository{
    full_name: string,
    description: string,
    html_url: string,
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([]);
    useEffect( () => {// chamando API
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[]);

    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
               
              {repositories.map((repository) => {
                  return   <RepositoryItem key={repository.full_name} repository={repository}/>
              })}
 
            </ul>
        </section>
    )
}

/**
 * 
 * 1) forEach não retorna nada, por isso deve se usar o map
 * 
 * 
 * 
 * 2) Warning: Each child in a list should have a unique "key" prop.
 * Quando usar a função map  o react solicita um ID unico para o component
 * 
 * 
 */

