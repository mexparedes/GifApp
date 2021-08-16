import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () =>{

    //const categories = ['One Punch' , 'Samurai X' , 'Dragon Ball'];
    //const [ categories, setCategories ] = ['One Punch' , 'Samurai X' , 'Dragon Ball'];
    const [ categories, setCategories ] = useState(['Dragon Ball']);
    //const handleAdd = () => {
        //El estado es  ['One punch','Samurai X'. etc]
        //Para cambiar el estado primero agrego las categorias anteriores y agrego berser al final
        
        //setCategories( [...categories,'Berserk'] );
        
        //Tambien se puede cambiar el estado de la siguiente forma:
        //Se puede agregar una callBack que retorne el arreglo
        //setCategories( cats => [...cats, 'Berserk'] ); 
        //};
        return (
        <>   
        <h2> { 'GifExpertApp3' } </h2>
        <AddCategory setCategories={ setCategories }/>
        <hr/>
        <ol>
            {
                categories.map( category => 
                     <GifGrid 
                     key={ category }
                     category={ category } />
                )  
            }
        </ol>
        </> 
    )};

export default GifExpertApp;