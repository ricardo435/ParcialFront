import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './NavBar/Navigation';

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Inicio</title>
                </Helmet>
                <Navigation></Navigation>
                <figure>
                    <img src="https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1517845732/1517845731.jpg" alt="Logo " />
                </figure>
                <div class="container">
                    <h1>Digital Movies</h1>
                    <p>Bienvenidos a Digital Movies</p>
                    <li>
                        <a href="/peliculas">Listado de todas las peliculas</a>
                    </li>
                    <li>
                        <a href="/peliculasNuevas">Listado de las mas recientes</a>
                    </li>
                    <li>
                        <a href="/peliculasRecomendadas">Listado de las mas recomendadas</a>
                    </li>
                </div>


            </React.Fragment>

        );

    }
}

export default Home;