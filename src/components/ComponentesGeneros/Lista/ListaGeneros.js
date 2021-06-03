import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from "axios";
import Navigation from '../../NavBar/Navigation';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class ListaGeneros extends Component {

    _isMounted = false;

    constructor() {
        super();
        this.state = ({
            generos: [],
        });
    }

    componentDidMount() {
        this._isMounted = true;
        this.getGeneros();
    }


    componentWillUnmount() {
        this._isMounted = false;
    }

    getGeneros() {
        axios.get(`http://localhost:3001/genres/`)
            .then(res => {
                console.log(res);
                this.setState({generos: res.data });
            });

    }

    render() {
        const generos = this.state.generos.map((genero, i) => {
            return (
                <React.Fragment>
                    <tr>
                        <td>{genero.id}</td>
                        <td>{genero.name}</td>
                        <td><Button variant="primary" href={`/generos/detalle/${genero.id}`}>Ver Detalle</Button>{' '}
                        </td>
                    </tr>
                </React.Fragment>
            )
        })
        return (
            <React.Fragment>
                <Helmet>
                    <title>Generos</title>
                </Helmet>
                <Navigation></Navigation>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generos}
                    </tbody>
                </Table>

            </React.Fragment>
        );

    }
}

export default ListaGeneros;