import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from "axios";
import Navigation from '../../NavBar/Navigation';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class ListaPeliculas extends Component {

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
        axios.get(`http://localhost:3001/movies/`)
            .then(res => {
                console.log(res);
                this.setState({peliculas: res.data });
            });

    }

    render() {
        const peliculas = this.state.peliculas.map((pelicula, i) => {
            return (
                <React.Fragment>
                    <tr>
                        <td>{pelicula.id}</td>
                        <td>{pelicula.title}</td>
                        <td>{pelicula.rating}</td>
                        <td>{pelicula.awards}</td>
                        <td>{pelicula.release_date}</td>
                        <td>{pelicula.length}</td>
                        <td><Button variant="primary" href={`/peliculas/detalle/${pelicula.id}`}>Ver Detalle</Button>{' '}
                            <Button variant="warning" href={`/editarPelicula/${pelicula.id}`}>Editar</Button>{' '}
                            <Button variant="danger"  href={`/eliminarPelicula/${pelicula.id}`}>Borrar</Button>
                        </td>
                    </tr>
                </React.Fragment>
            )
        })
        return (
            <React.Fragment>
                <Helmet>
                    <title>Peliculas</title>
                </Helmet>
                <Navigation></Navigation>
                <Button variant="success" href={'/agregarPelicula'}>Agregar Pelicula</Button>{' '}
                <Table bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Titulo</th>
                            <th>Valoracion</th>
                            <th>Premios</th>
                            <th>Fecha de Estreno</th>
                            <th>Duracion</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {peliculas}
                    </tbody>
                </Table>

            </React.Fragment>
        );

    }
}

export default ListaPeliculas;