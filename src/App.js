import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ListaPeliculas from './components/ComponentesPeliculas/Listas/ListaPeliculas';
import ListaPeliculasNuevas from './components/ComponentesPeliculas/Listas/ListaPeliculasNuevas';
import ListaPeliculasRecomendadas from './components/ComponentesPeliculas/Listas/ListaPeliculasRecomendadas';
import DetallePelicula from './components/ComponentesPeliculas/Detalle/DetallePelicula'
import Home from './components/Home'
import FormularioAgregarPelicula from './components/ComponentesPeliculas/ABM/FormularioAgregarPelicula';
import FormularioEditarPelicula from './components/ComponentesPeliculas/ABM/FormularioEditarPelicula';
import EliminarPelicula from './components/ComponentesPeliculas/ABM/EliminarPelicula';
import ListaGeneros from './components/ComponentesGeneros/Lista/ListaGeneros';
import DetalleGenero from './components/ComponentesGeneros/Detalle/DetalleGenero';

class App extends Component {


  render() {
    return (
      <Switch>
        <Route exact path="/peliculas" component={ListaPeliculas} ></Route>
        <Route exact path="/peliculasNuevas" component={ListaPeliculasNuevas} ></Route>
        <Route exact path="/peliculasRecomendadas" component={ListaPeliculasRecomendadas} ></Route>
        <Route exact path="/peliculas/detalle/:id" component={DetallePelicula}></Route>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/agregarPelicula" component={FormularioAgregarPelicula}></Route>
        <Route exact path="/editarPelicula/:id" component={FormularioEditarPelicula}></Route>
        <Route exact path="/eliminarPelicula/:id" component={EliminarPelicula}></Route>
        <Route exact path="/generos" component={ListaGeneros}></Route>
        <Route exact path="/generos/detalle/:id" component={DetalleGenero}></Route>
      </Switch>
    )
  }
}

export default App;

