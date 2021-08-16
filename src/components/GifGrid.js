import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );
   //data: images es para renombrar en la desestructuracion
    // console.log(data);
    // const [images, setImages] = useState([]); 

    // //Cuando se coloca un [] en dependencias, el use Effect se va a ejecutar una sola vez, cuando es renderizado por primera vez


    //getGifs();

    return (
        <>
        <h3 className= "animate__animated animate__fadeIn"> { category }</h3>

        { loading && <p className="animate__animated animate__flash">Loading</p> }  
        {/* Si loading es true hace Loading, sino no hace nada */}


        <div className="card-grid">
                {
                    images.map( img => (
                    <GifGridItem 
                    key={ img.id }
                    { ...img }  //El { ...img } hace que se envien las propiedades del img
                                //lo cual hace que sea mas facil trabajar con el
                    />
                ))
                }
        
        </div>
        </>
    )
}
