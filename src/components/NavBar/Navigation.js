import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class Navigation extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/">Inicio</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/peliculas">Todas las peliculas</Nav.Link>
                        <Nav.Link href="/peliculasNuevas">Las peliculas mas recientes</Nav.Link>
                        <Nav.Link href="/peliculasRecomendadas">Las peliculas mas recomendadas</Nav.Link>
                        <Nav.Link href="/generos">Todos los generos</Nav.Link>
                    </Nav>
                </Navbar>
            </React.Fragment>

        );

    }
}

export default Navigation;