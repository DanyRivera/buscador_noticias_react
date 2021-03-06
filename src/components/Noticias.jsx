import React from 'react'
import Noticia from './Noticia';
import PropTypes from 'prop-types';

const Noticias = ({noticias}) => {
    
    return ( 
        <div className="contenedor-noticias">
            {noticias.map( noticia => (
                <Noticia 
                    key={noticia.url}
                    noticia={noticia}
                />
            ) )}
        </div>
     );
}

Noticias.propType = {
    noticias: PropTypes.array.isRequired
}
 
export default Noticias;

