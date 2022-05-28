import React, { Component } from 'react'
import '../css/ourstrap.css'
import '../css/style.css'

export default class Chamada extends Component {
  render() {
    return (
        <section>
            <div class="linha container boxChamada">
              <div class="col-dm-4">
                <img src="../img/photo.jpg" alt=""/>
              </div>
                <div class="col-dm-8">
                    <h2>Título da chamada</h2>
                    <h3>Descrição da chamada</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus libero, quasi, molestiae earum ipsa culpa dicta fugit labore repellendus aliquam omnis quis explicabo tempora blanditiis, autem quas exercitationem laborum similique.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum tempore assumenda minus tempora laboriosam eligendi esse facere. Corrupti nisi nam nesciunt quisquam et culpa odio quam magni, iusto tenetur nihil.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quidem, perspiciatis a, soluta ipsam dolor quisquam quam quo eaque laborum ab aliquid at unde omnis consectetur vitae, labore aliquam. Repudiandae!</p>
                </div>
            </div>
        </section>
    )
  }
}
