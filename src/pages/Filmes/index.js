import { useEffect, useState } from "react";
import { useParams, useNavigate, json } from "react-router-dom";
import './filmes.css'
import {toast} from 'react-toastify'
import api from "../../serviçes/api";


function Filmes() {
    const { id } = useParams();
    const navigate = useNavigate();


    const [filme, setFilme] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "2da8d24e076100c0f370154b57f19da7",
                    language: "pt-br"
                }
            })
                .then((response) => {
                    setFilme(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    navigate('/',{replace: true})
                })

        }
        loadFilme();

        return (
            console.log('componente desmontado')
        )
    }, [id,navigate])

    function salvar(){
        const lista = localStorage.getItem("filmes");

        let filmesSalvos = JSON.parse(lista) || [];

        const hasFilme = filmesSalvos.some((filmSalvo)=>filmesSalvos.id === filme.id)

        if(hasFilme){
            toast.warn("O filme ja esta na lista");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("filmes", JSON.stringify(filmesSalvos) );
        toast.success("Filme Salvo com sucesso");
    }

    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando . . .</h2>
            </div>
        )
    } else {
        return (
            <div className="detalhes">
                <h1 className="titulo">{filme.title}</h1>
                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
                <h3>Sinopse</h3>
                <span>{filme.overview}</span>
                <strong>Avaliação: {filme.vote_average}</strong>

                <div className="botoes">
                    <button onClick={salvar}>Salvar</button>
                    <button>
                        <a target="blank" rel="external" href={`https://superflix.dad/?s=${filme.title}`}>
                            Assistir
                        </a>
                    </button>
                </div>
            </div>
        );
    }
}
export default Filmes;