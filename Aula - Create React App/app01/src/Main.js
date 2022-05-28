import React, { Component } from 'react'
import Chamada from './sections/Chamada'
import Depoimentos from './sections/Depoimentos'

export default class Main extends Component {
  render() {
    return (
        <main>
          <Chamada />  
          <Depoimentos/>
        </main>
    )
  }
}
