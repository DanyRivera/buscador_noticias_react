import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Noticias from './components/Noticias';

function App() {

  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect( () => {

    const consultaApi = async () => {

      try {

        const key = 'c768d8515dd449729db97066e4fd9019';
        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${key}`;

        const respuesta = await fetch(url);
        const noticias = await respuesta.json();

        setNoticias(noticias.articles);
        
      } catch (error) {
        console.log(error)
      }

    }

    consultaApi();

  }, [categoria] )

  return (
    <Fragment>

      <Header 
        titulo='Buscador de Noticias'
      />

      <div className="container white">
        <Formulario
          setCategoria={setCategoria}
        />

        <Noticias 
          noticias={noticias}
        />

      </div>

    </Fragment>
  );
}

export default App;
