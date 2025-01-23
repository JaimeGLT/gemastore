import React from 'react'
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './filter.scss'

const Filter = ({ selectedSubCats, valorRange, sort }) => {

    const { id, cat } = useParams();

    let url;

    if (cat === 'categoria') {
        url = `/products?populate[img][fields][0]=url&populate[img2][fields][1]=url&fields[2]=esNuevo&fields[3]=titulo&fields[4]=precio&filters[categorias][$eq]=${id}${selectedSubCats?.map(item =>`&filters[sub_categorias][id][$eq]=${item}`).join('&')}&[filters][precio][$lte]=${valorRange}&sort[0]=precio:${sort}`;
    } else if (cat === 'marca') {
        url = `/products?populate[img][fields][0]=url&populate[img2][fields][1]=url&fields[2]=esNuevo&fields[3]=titulo&fields[4]=precio&filters[marcas][$eq]=${id}${selectedSubCats?.map(item =>`&filters[sub_categorias][id][$eq]=${item}`).join('&')}&[filters][precio][$lte]=${valorRange}&sort[0]=precio:${sort}`;
    } else if (cat === 'coleccion') {
        url = `/products?populate[img][fields][0]=url&populate[img2][fields][1]=url&fields[2]=esNuevo&fields[3]=titulo&fields[4]=precio&filters[coleccions][$eq]=${id}${selectedSubCats?.map(item =>`&filters[sub_categorias][id][$eq]=${item}`).join('&')}&[filters][precio][$lte]=${valorRange}&sort[0]=precio:${sort}`;
    };

    const { data, loading, error } = useFetch(url);

  return (
    <div className='filter'>
        {
            loading ? 'Loading...' : data?.map(item => (
                <Card item={item} key={item.id}/>
            ))
        }
    </div>
  )
}

export default Filter