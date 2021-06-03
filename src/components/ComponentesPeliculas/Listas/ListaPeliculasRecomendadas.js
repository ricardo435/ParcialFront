import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from "axios";
import Navigation from '../../NavBar/Navigation';
import Table from 'react-bootstrap/Table';

class ListaPeliculasRecomendadas extends Component {

    _isMounted = false;

    constructor() {
        super();
        this.state = ({
            peliculas: [],
        });
    }

    componentDidMount() {
        this._isMounted = true;
        this.getPeliculas();
    }


    componentWillUnmount() {
        this._isMounted = false;
    }

    getPeliculas() {
        axios.get(`http://localhost:3001/movies/recommended/`)
            .then(res => {
                console.log(res);
                this.setState({ peliculas: res.data });
            });

    }

    render() {
        const peliculasNuevas = this.state.peliculas.map((pelicula, i) => {
            return (
                <React.Fragment>
                    <tr>
                        <td>{pelicula.id}</td>
                        <td>{pelicula.title}</td>
                        <td>{pelicula.rating}</td>
                        <td>{pelicula.awards}</td>
                        <td>{pelicula.release_date}</td>
                        <td>{pelicula.length}</td>
                    </tr>
                </React.Fragment>
            )
        })
        return (
            <React.Fragment>
                <Helmet>
                    <title>Peliculas Recomendadas</title>
                </Helmet>
                <Navigation></Navigation>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Titulo</th>
                            <th>Valoracion</th>
                            <th>Premios</th>
                            <th>Fecha de Estreno</th>
                            <th>Duracion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {peliculasNuevas}
                    </tbody>
                </Table>

            </React.Fragment>
        );

    }
}

export default ListaPeliculasRecomendadas;