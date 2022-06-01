import React, { Component } from 'react';

class Depoimento extends Component {
    render() {
        return (
            <div>
                <img src={this.props.foto} alt="" />
                <h3>{this.props.nome}</h3>
                <p>{this.props.depoimento}</p>
            </div>
        );
    }
}

export default Depoimento;