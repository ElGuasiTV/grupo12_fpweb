import React from "react"
class Pelicula extends React.Component {
    render() {
        return (
            <div >
                
                        <h1>{this.props.titulo}</h1>
                        <a href="#">
                            <  img class="Peli" src={this.props.img} alt="Vista Previa"/></a>
                        <h3>Sypnosis</h3>
                        <p> {this.props.synopsis}
                        </p>
                        <em class="azul"> Dirigida Por: </em> <p class="final">{this.props.director}</p> <br/>
                            <em class="azul"> Reparto:</em> <p class="final"> {this.props.reparto} </p> <br/>
                                <em class="azul">Duracion:</em> <p class="final"></p> {this.props.duracion}<br></br> 
</div>
                                )
    }
}


                                export default Pelicula;