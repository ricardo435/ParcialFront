import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../../NavBar/Navigation';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import moment from 'moment'

class FormularioAgregarPelicula extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            generos: [],
            actores: [],
            pelicula: {},
            fecha: "",
        }
    }

    componentDidMount() {
        this._isMounted = true;
        this.getPeliculaXIDActoresYGeneros();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    getPeliculaXIDActoresYGeneros() {
        const parametroId = this.props.match.params.id;
        axios.get(`http://localhost:3001/movies/edit/` + parametroId)
            .then(res => {
                console.log(res);
                this.setState({ generos: res.data.allGenres });
                this.setState({ actores: res.data.allActors });
                this.setState({ pelicula: res.data.Movie });
                this.setState({ fecha: moment(this.state.pelicula.release_date).format('YYYY-MM-DD') })
            });
    }


    render() {
        console.log(this.state.pelicula.genre_id);
        const generos = this.state.generos.map((genero, i) => {
            if (this.state.pelicula.genre_id === genero.id) {
                return (
                    <React.Fragment>
                        <option selected value={genero.id}>{genero.name}</option>
                    </React.Fragment>
                )

            } else {
                return (
                    <React.Fragment>
                        <option value={genero.id}>{genero.name}</option>
                    </React.Fragment>
                )
            }
        })
        return (
            <React.Fragment>
                <Helmet>
                    <title>Editar Pelicula</title>
                </Helmet>
                <Navigation></Navigation>
                <div className="center">

                    <Form action={"http://localhost:3001/movies/update/" + this.props.match.params.id} method="POST">
                        <div class="container">
                            <h1>Pelicula Editada: {this.state.pelicula.title}</h1>
                            <Form.Label >Titulo</Form.Label>
                            <Form.Control name="title" id="title" defaultValue={this.state.pelicula.title} type="text" required style={{ width: "25%" }} />
                            <Form.Label >Valoracion</Form.Label>
                            <Form.Control name="rating" id="rating" defaultValue={this.state.pelicula.rating} type="number" step="any" required style={{ width: "25%" }} />
                            <Form.Label >Premios</Form.Label>
                            <Form.Control name="awards" id="awards" defaultValue={this.state.pelicula.awards} type="number" required style={{ width: "25%" }} />
                            <Form.Label >Fecha de Estreno</Form.Label>
                            <Form.Control name="release_date" id="release_date" defaultValue={this.state.fecha} type="date" required style={{ width: "25%" }} />
                            <Form.Label >Duracion</Form.Label>
                            <Form.Control name="length" id="length" defaultValue={this.state.pelicula.length} type="number" required style={{ width: "25%" }} />
                            <Form.Label>Generos</Form.Label>
                            <Form.Control as="select" name="genre_id" id="genre_id" required style={{ width: "25%" }}>
                                <option value="" disabled selected>- select genre - </option>
                                {generos}
                            </Form.Control><br />
                            <Button variant="primary" type="submit">
                                Actualizar Pelicula
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