import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from "axios";
import Navigation from '../../NavBar/Navigation';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class ListaPeliculas extends Component {

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
        axios.get(`http://localhost:3001/movies/delete/` + parametroId)
            .then(res => {
                console.log(res.data);
                this.setState({ pelicula: res.data });
            });

    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Eliminar Pelicula</title>
                </Helmet>
                <Navigation></Navigation>
                <div class="container">
                    <h1>Estas seguro de querer borrar esta pelicula: {this.state.pelicula.title}???</h1>
                    <Form action={"http://localhost:3001/movies/delete/" + this.props.match.params.id} method="POST">
                        <br />
                        <p><Button variant="danger" type="submit">Borrar la Pelicula</Button>
                            {' '}
                            <Button variant="secondary" href="/peliculas">Volver</Button>
                        </p>
                    </Form>
                </div>

            </React.Fragment>
        );

    }
}

export default ListaPeliculas;