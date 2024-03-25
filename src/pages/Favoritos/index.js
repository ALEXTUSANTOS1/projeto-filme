import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';
import { toast } from 'react-toastify';


function Favoritos(){

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        const minhaLista = localStorage.getItem("filmes");
        setFilmes(JSON.parse(minhaLista) || []);
    })

    function exlcluirFilme(id){
        const filtraFilmes = filmes.filter((item)=>{
            return(item.id !== id)
        })

        setFilmes(filtraFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtraFilmes))
        toast.success("Filme excludo com sucesso");
    }

    return(
        <div className='lista'>
            <h1>Meus Filmes</h1>

            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={()=>exlcluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
export default Favoritos;