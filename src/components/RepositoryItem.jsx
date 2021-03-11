export function RepositoryItem(props){
    return(
        <li>
        <strong>{props.enviandoDados?.full_name ?? 'Unform' }</strong>
        <p>{props.enviandoDados?.description ?? 'Unform' }</p>
        <a href={props.enviandoDados?.html_url ?? 'Unform' }>
            Acessar repositório
        </a>
        
    </li>
    );
}


