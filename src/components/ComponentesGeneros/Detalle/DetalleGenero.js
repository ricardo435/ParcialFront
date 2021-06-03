import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from "axios";
import Navigation from '../../NavBar/Navigation';
import Button from 'react-bootstrap/Button';

class DetalleGenero extends Component {

    _isMounted = false;

    constructor() {
        super();
        this.state = ({
            genero: {},
        });
    }

    componentDidMount() {
        this._isMounted = true;
        this.getGeneroXId();
    }


    componentWillUnmount() {
        this._isMounted = false;
    }

    getGeneroXId() {
        const parametroId = this.props.match.params.id;
        axios.get(`http://localhost:3001/genres/detail/` + parametroId)
            .then(res => {
                console.log(res.data);
                this.setState({ genero: res.data });
            });

    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{this.state.genero.name}</title>
                </Helmet>
                <Navigation></Navigation>
                <div class="container">
                    <h1>{this.state.genero.name}</h1>
                    <p>RANKING: {this.state.genero.ranking}</p>
                    <Button variant="secondary" href={`/generos`}>Volver</Button>
                </div>

            </React.Fragment>
        );

    }
}

export default DetalleGenero;