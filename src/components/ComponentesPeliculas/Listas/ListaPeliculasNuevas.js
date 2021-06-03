import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from "axios";
import Navigation from '../../NavBar/Navigation';
import Table from 'react-bootstrap/Table';

class ListaPeliculasNuevas extends Component {

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
        axios.get(`http://localhost:3001/movies/new/`)
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
                    <title>Peliculas Nuevas</title>
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

export default ListaPeliculasNuevas;