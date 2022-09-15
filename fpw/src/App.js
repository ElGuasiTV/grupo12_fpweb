
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Conteiner from 'react-bootstrap/Container';
import Pelicula from './Componente/Pelicula';
import peliculas from './json/peliculas.json';

function App() {
  return (
    <Conteiner>
      <Row>
        <Col md={3}>Columna 1 de 3</Col>
        <Col md={3}>Columna 2 de 3</Col>
        <Col md={3}>Columna 3 de 3</Col>
        {peliculas.map(peli=>
          <Pelicula
          img={peli.img}titulo={peli.titulo}synopsis={peli.synopsis}director={peli.director}reparto={peli.reparto}duracion={peli.duracion}></Pelicula>)}


      </Row>
    </Conteiner>


  );
}

export default App;
