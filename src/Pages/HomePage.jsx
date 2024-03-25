import React from "react";
import raminhos from "../assets/images/raminhos.png";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <div className="title-container">
        <img src={raminhos} alt="" style={{ height: "100px" }} />
        Catarina & Alexandre
        <br />
        <div className="data-container">7 de setembro de 2024</div>
      </div>
      <div className="announcement-container">
        <p>
          Temos vindo a escrever uma história linda, que começou quando e onde
          menos esperávamos. Queremos continuar esta jornada e dar o próximo
          passo, para sempre enquanto amigos e namorados. Por isso, após 10 anos
          de namoro e 2 anos de noivado, chegou o momento de ‘dar o nó’!
          Teríamos o maior prazer em celebrar este nosso novo início com cada um
          de vós, família e amigos, que, de perto ou de longe, nos acompanham
          nesta jornada. <span> לחיים!</span>
        </p>
      </div>
      <button className="rsvp-button">Confirmar Presença</button>
      <div className="honeymoon-container">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque ea sit
        expedita tenetur soluta nulla, distinctio, deserunt aut dicta corrupti
        libero nesciunt accusamus enim! Sed reiciendis dolore reprehenderit
        nesciunt minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vitae magni rerum in nesciunt, velit labore! Illum dicta ab quis,
        aliquid temporibus sed consequatur dolor perferendis commodi facere
        delectus velit dignissimos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Similique sapiente assumenda neque nam, in, voluptate
        commodi asperiores libero architecto sequi possimus dicta porro est
        atque quidem eligendi illum? Consequatur, excepturi!
      </div>
    </div>
  );
}
