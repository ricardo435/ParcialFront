import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from "axios";
import Navigation from '../../NavBar/Navigation';
import Button from 'react-bootstrap/Button';

class DetallePelicula extends Component {

    _isMounted = false;

    constructor() {
        super();
        this.state = ({
            pelicula: {},
        });
    }

    componentDidMount() {
        this._isMounted = true;
        this.getPeliculaXId();
    }


    componentWillUnmount() {
        this._isMounted = false;
    }

    getPeliculaXId() {
        const parametroId = this.props.match.params.id;
        axios.get(`http://localhost:3001/movies/detail/` + parametroId)
            .then(res => {
                console.log(res.data);
                this.setState({ pelicula: res.data });
            });

    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{this.state.pelicula.title}</title>
                </Helmet>
                <Navigation></Navigation>
                <div class="container">
                    <h1>{this.state.pelicula.title}</h1>
                    <p>VALORACION: {this.state.pelicula.rating}</p>
                    <p>PREMIOS: {this.state.pelicula.awards}</p>
                    <p>DURACION: {this.state.pelicula.length + ' min'}</p>
                    <p>FECHA DE ESTRENO: {this.state.pelicula.release_date}</p>
                    <Button variant="secondary" href={`/peliculas`}>Volver</Button>
                </div>

            </React.Fragment>
        );

    }
}

export default DetallePelicula;