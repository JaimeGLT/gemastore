import useFetch from '../../hooks/useFetch';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './colecciones.scss'

const Colecciones = () => {

    const { data: marcas, loading: loadingMarcas, error: errorMarcas } = useFetch(
        `/marcas?fields[0]=titulo&fields[1]=descripcion`
      );
      const { data: categorias, loading: loadingCategorias, error: errorCategorias } = useFetch(
        `/categorias?fields[0]=titulo&fields[1]=descripcion`
      );    
      const { data: colecciones, loading: loadingColecciones, error: errorColecciones } = useFetch(
        `/coleccions?fields[0]=titulo&fields[1]=descripcion`
      );

      const navigate = useNavigate();


    return (
        <div className="colecciones">
            <div className="item">
                <h2>Marcas</h2>
                {
                    marcas?.map(item => (
                        <div className="enlaces link" key={item.id} onClick={() => { navigate(`/marca/${item.titulo?.toLowerCase()}/${item.id}`);window.location.reload()}}>
                            <h3>{item.titulo}</h3>
                            <p>{item.descripcion?.substring(0,50)}</p>
                        </div>
                    ))
                }
            </div>
            <div className="item">
                <h2>Categorias</h2>
                {
                    categorias?.map(item => (
                        <div onClick={() => { navigate(`/categoria/${item.titulo?.toLowerCase()}/${item.id}`);window.location.reload()}} className="enlaces link" key={item.id}>
                            <h3>{item.titulo}</h3>
                            <p>{item.descripcion?.substring(0,50)}</p>
                        </div>
                    ))
                }
            </div>
            <div className="item">
                <h2>Colecciones</h2>
                {
                    colecciones?.map(item => (
                        <div onClick={() => { navigate(`/coleccion/${item.titulo?.toLowerCase()}/${item.id}`);window.location.reload()}} className="enlaces link" key={item.id}>
                            <h3>{item.titulo}</h3>
                            <p>{item.descripcion?.substring(0,50)}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Colecciones;