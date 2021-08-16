import React, { useState } from 'react'
import PropTypes from 'prop-types';

//En el componente AddCategory recibimos la funcion setCategories del componente GifExpertApp
export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');


    //Para poder cambiar el valor en la ventana del input
    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    // Para poder manejar manejar el agregar el inputValue luego del submit
    const handdleSubmit = (e) =>{
        e.preventDefault();
        setCategories( cats => [ inputValue , ...cats ]);
        setInputValue('');
    }
    return (
        <>
        <form onSubmit={ handdleSubmit }>
            <input type="text" 
            value={ inputValue }
            onChange={ handleInputChange }

          //onChange se encarga de permitir cambiar el valor dentro del input
          //HandleSubmit toma el evento submit y hace el preventDefault();
          //La funcion handdleSubmit toma el inputValue y lo agrega en setCategories
            ></input> 
        
        </form>
        </>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}