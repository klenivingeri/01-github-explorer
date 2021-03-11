export function RepositoryItem(props){
    return(
        <li>
        <strong>{props.enviandoDados?.name ?? 'Unform' }</strong>
        <p>{props.enviandoDados?.description ?? 'Unform' }</p>
        <a href={props.enviandoDados?.link ?? 'Unform' }>
            Acessar repositório
        </a>
    </li>
    );
}