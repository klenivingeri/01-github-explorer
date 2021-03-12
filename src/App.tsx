
import { RepositoryList } from './components/RepositoryList';

import './styles/global.scss';


export function App() {
   
    return (

            <RepositoryList />


    )
}


/**
 *  Component ******************
 *  import 
 * 
 * 
 * 
 * 
 * 
 * Propriedade *****************
 *  null coalescing operator
 * 
 * 
 * 
 * 
 * 
 * Estado **********************
 * Fragment <> </>
 * toda vez que usar uma função do React que tem o inicio como "use",
 * é um hook ou gancho
 * 
 * 
 * 
 * Imutabilidade ***************
 * 
 *  usuario  = ['Erick', Paul, Andrade ]
 * 
 *  novoUsurario = [...usuario, Kleniving]
 * 
 *  sempre criar um novo espaço na memoria, programação funcional
 * 
 */