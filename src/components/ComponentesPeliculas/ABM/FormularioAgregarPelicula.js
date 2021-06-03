import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../../NavBar/Navigation';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class FormularioAgregarPelicula extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            generos: [],
        }
    }

    componentDidMount() {
        this._isMounted = true;
        this.getGeneros();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    getGeneros() {
        axios.get(`http://localhost:3001/movies/add`)
            .then(res => {
                console.log(res);
                this.setState({ generos: res.data });
            });
    }


    render() {
        const generos = this.state.generos.map((genero, i) => {
            return (
                <React.Fragment>
                    <option value={genero.id}>{genero.name}</option>
                </React.Fragment>
            )
        })
        return (
            <React.Fragment>
                <Helmet>
                    <title>Agregar Pelicula</title>
                </Helmet>
                <Navigation></Navigation>
                <div className="center">
                    <Form action="http://localhost:3001/movies/create" method="POST">
                        <div class="container">
                            <Form.Label >Titulo</Form.Label>
                            <Form.Control name="title" id="title" type="text" required style={{ width: "25%" }} />
                            <Form.Label >Valoracion</Form.Label>
                            <Form.Control name="rating" id="rating" type="number" required step="any" style={{ width: "25%" }}/>
                            <Form.Label >Premios</Form.Label>
                            <Form.Control name="awards" id="awards" type="number" required style={{ width: "25%" }}/>
                            <Form.Label >Fecha de Estreno</Form.Label>
                            <Form.Control name="release_date" id="release_date" type="date" required style={{ width: "25%" }}/>
                            <Form.Label >Duracion</Form.Label>
                            <Form.Control name="length" id="length" type="number" required style={{ width: "25%" }}/>
                            <Form.Label>Generos</Form.Label>
                            <Form.Control as="select" name="genre_id" id="genre_id" required style={{ width: "25%" }}>
                                <option value="" disabled selected>- select genre - </option>
                                {generos}
                            </Form.Control><br />
                            <Button variant="primary" type="submit">
                                Agregar Pelicula
                            </Button>{' '}
                            <Button variant="secondary" href="/peliculas">Volver</Button>
                        </div>
                    </Form>
                </div>
            </React.Fragment>
        );
    }
}

export default FormularioAgregarPelicula;