import React, { Component } from 'react';
import '../css/ourstrap.css'
import '../css/style.css'
import depoimentos from './depoimentos.json'
import Depoimento from './depoimentos/Depoimento'

class Depoimentos extends Component {
    constructor(props) {
        super();
        this.state =
            depoimentos;
    }
    render() {
        return (
            <section>
                <div class="linha container">
                    <div class="col-dm-3 depoimentos"><Depoimento
                        foto={this.state.depoimentos[0].foto} 
                        nome={this.state.depoimentos[0].nome} 
                        depoimento={this.state.depoimentos[0].depoimento}/>
                    </div>
                    <div class="col-dm-3 depoimentos"><Depoimento
                        foto={this.state.depoimentos[1].foto} 
                        nome={this.state.depoimentos[1].nome} 
                        depoimento={this.state.depoimentos[1].depoimento} />
                    </div>
                    <div class="col-dm-3 depoimentos"><Depoimento
                        foto={this.state.depoimentos[2].foto} 
                        nome={this.state.depoimentos[2].nome} 
                        depoimento={this.state.depoimentos[2].depoimento} />
                    </div>
                    <div class="col-dm-3 depoimentos"><Depoimento
                        foto={this.state.depoimentos[3].foto} 
                        nome={this.state.depoimentos[3].nome} 
                        depoimento={this.state.depoimentos[3].depoimento} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Depoimentos;