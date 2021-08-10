import React from 'react';
import styled from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({setCategoria}) => {

    const OPCIONES = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnología' },
        { value: 'science', label: 'Ciencia' }
    ]

    //cutom hook
    const [ categoria, NoticiasSelect ] = useSelect('general', OPCIONES);

    //Submit al form pasar la categoria a App.js
    const buscarNoticias = e => {
        e.preventDefault();

        setCategoria(categoria)

    }


    return ( 
        <div className={`${styled.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styled.heading}>Encuentra Noticias por Categoría</h2>

                    <NoticiasSelect />

                    <div className="input-field col s12">
                        <input 
                            type="submit" 
                            className={`${styled['btn-block']} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>

                </form>
            </div>
        </div>
    );
}

Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired
}
 
export default Formulario;
