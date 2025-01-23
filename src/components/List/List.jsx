import React from 'react'
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import './list.scss'

const List = ({ selectedCategories, selectedSubCats, valorRange, sort }) => {

    const { pathname } = useLocation();

    let url;

    if (pathname === '/productos') {
        url = `/products?populate[img][fields][0]=url&populate[img2][fields][1]=url&fields[2]=esNuevo&fields[3]=titulo&fields[4]=precio${selectedCategories?.map(item =>`&filters[categorias][id][$eq]=${item}`).join('&')}&[filters][precio][$lte]=${valorRange}&sort[0]=precio:${sort}`
    } else if(pathname === '/ofertas-especiales'){
        url = `/products?populate[img][fields][0]=url&populate[img2][fields][1]=url&fields[2]=esNuevo&fields[3]=titulo&fields[4]=precio&filters[precio_con_descuento][$gt]=0${selectedCategories?.map(item =>`&filters[categorias][id][$eq]=${item}`).join('&')}&[filters][precio][$lte]=${valorRange}&sort[0]=precio:${sort}`;
    } else  if(pathname === '/articulos-nuevos'){
        url = `/products?populate[img][fields][0]=url&populate[img2][fields][1]=url&fields[2]=esNuevo&fields[3]=titulo&fields[4]=precio&filters[esNuevo][$eq]=true${selectedCategories?.map(item =>`&filters[categorias][id][$eq]=${item}`).join('&')}&[filters][precio][$lte]=${valorRange}&sort[0]=precio:${sort}`;
    }
    
    const { data, loading, error } = useFetch(url);

  return (
    <div className='list'>
        {
            loading ? 'Loading...' : data?.map(item => (
                <Card item={item} key={item.id}/>
            ))
        }
    </div>
  )
}

export default List