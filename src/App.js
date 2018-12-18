import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {

    super();

    this.state = {

      pergunta1: {
        btn1: 'btn_default',
        btn2: 'btn_default',
        btn3: 'btn_default',
        btn4: 'btn_default',
        btn5: 'btn_default',
        resposta: null
      },
      pergunta2: {
        btn1: 'btn_default',
        btn2: 'btn_default',
        btn3: 'btn_default',
        btn4: 'btn_default',
        btn5: 'btn_default',
        resposta: null
      },
      pergunta3: {
        btn1: 'btn_default',
        btn2: 'btn_default',
        btn3: 'btn_default',
        btn4: 'btn_default',
        btn5: 'btn_default',
        resposta: null
      },
      pergunta4: {
        btn1: 'btn_default',
        btn2: 'btn_default',
        btn3: 'btn_default',
        btn4: 'btn_default',
        btn5: 'btn_default',
        resposta: null
      },
      pergunta5: {
        btn1: 'btn_default',
        btn2: 'btn_default',
        btn3: 'btn_default',
        btn4: 'btn_default',
        btn5: 'btn_default',
        resposta: null
      }

    }

  }
  mudaCor(event, pergunta, botao) {
    event.preventDefault();
    pergunta.btn1 = 'btn_default';
    pergunta.btn2 = 'btn_default';
    pergunta.btn3 = 'btn_default';
    pergunta.btn4 = 'btn_default';
    pergunta.btn5 = 'btn_default';

    pergunta[botao] = 'btn_verde';

    this.setState(pergunta);

    if (pergunta[botao] == 'btn_verde') {
      [pergunta.resposta] = event.target.value;
      this.setState(pergunta);

    }

  }

  enviar(event) {
    event.preventDefault();
    let respostas = {};
    respostas.ask1 = this.state.pergunta1.resposta;
    respostas.ask2 = this.state.pergunta2.resposta;
    respostas.ask3 = this.state.pergunta3.resposta;
    respostas.ask4 = this.state.pergunta4.resposta;
    respostas.ask5 = this.state.pergunta5.resposta;


    let url = "https://ob359eq9i4.execute-api.sa-east-1.amazonaws.com/tst/";

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(respostas),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      mode:'no-cors'
    }).then(resposta => {
      alert("Obrigado pelo feedback, volte sempre!");
    }).catch(err => {
      console.error(err);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={(event) => this.enviar(event)}>
            <label className="pesquisa">De 1 a 5, avalie a sua satisfação em relação à:</label><br /><br />
            <label className="pergunta">Atendimento:</label><br />

            <button value={"1"} onClick={(event) => this.mudaCor(event, this.state.pergunta1, 'btn1')} className={this.state.pergunta1.btn1}>1</button>
            <button value={"2"} onClick={(event) => this.mudaCor(event, this.state.pergunta1, 'btn2')} className={this.state.pergunta1.btn2}>2</button>
            <button value={"3"} onClick={(event) => this.mudaCor(event, this.state.pergunta1, 'btn3')} className={this.state.pergunta1.btn3}>3</button>
            <button value={"4"} onClick={(event) => this.mudaCor(event, this.state.pergunta1, 'btn4')} className={this.state.pergunta1.btn4}>4</button>
            <button value={"5"} onClick={(event) => this.mudaCor(event, this.state.pergunta1, 'btn5')} className={this.state.pergunta1.btn5}>5</button>
            <br />
            <label className="pergunta">Qualidade dos Alimentos:</label><br />

            <button value={"1"} onClick={(event) => this.mudaCor(event, this.state.pergunta2, 'btn1')} className={this.state.pergunta2.btn1}>1</button>
            <button value={"2"} onClick={(event) => this.mudaCor(event, this.state.pergunta2, 'btn2')} className={this.state.pergunta2.btn2}>2</button>
            <button value={"3"} onClick={(event) => this.mudaCor(event, this.state.pergunta2, 'btn3')} className={this.state.pergunta2.btn3}>3</button>
            <button value={"4"} onClick={(event) => this.mudaCor(event, this.state.pergunta2, 'btn4')} className={this.state.pergunta2.btn4}>4</button>
            <button value={"5"} onClick={(event) => this.mudaCor(event, this.state.pergunta2, 'btn5')} className={this.state.pergunta2.btn5}>5</button>
            <br />
            <label className="pergunta">Ambiente:</label><br />

            <button value={"1"} onClick={(event) => this.mudaCor(event, this.state.pergunta3, 'btn1')} className={this.state.pergunta3.btn1}>1</button>
            <button value={"2"} onClick={(event) => this.mudaCor(event, this.state.pergunta3, 'btn2')} className={this.state.pergunta3.btn2}>2</button>
            <button value={"3"} onClick={(event) => this.mudaCor(event, this.state.pergunta3, 'btn3')} className={this.state.pergunta3.btn3}>3</button>
            <button value={"4"} onClick={(event) => this.mudaCor(event, this.state.pergunta3, 'btn4')} className={this.state.pergunta3.btn4}>4</button>
            <button value={"5"} onClick={(event) => this.mudaCor(event, this.state.pergunta3, 'btn5')} className={this.state.pergunta3.btn5}>5</button>

            <br />
            <label className="pergunta">Preço:</label><br />

            <button value={"1"} onClick={(event) => this.mudaCor(event, this.state.pergunta4, 'btn1')} className={this.state.pergunta4.btn1}>1</button>
            <button value={"2"} onClick={(event) => this.mudaCor(event, this.state.pergunta4, 'btn2')} className={this.state.pergunta4.btn2}>2</button>
            <button value={"3"} onClick={(event) => this.mudaCor(event, this.state.pergunta4, 'btn3')} className={this.state.pergunta4.btn3}>3</button>
            <button value={"4"} onClick={(event) => this.mudaCor(event, this.state.pergunta4, 'btn4')} className={this.state.pergunta4.btn4}>4</button>
            <button value={"5"} onClick={(event) => this.mudaCor(event, this.state.pergunta4, 'btn5')} className={this.state.pergunta4.btn5}>5</button>

            <br />
            <label className="pergunta">Happy Hour:</label><br />

            <button value={"1"} onClick={(event) => this.mudaCor(event, this.state.pergunta5, 'btn1')} className={this.state.pergunta5.btn1}>1</button>
            <button value={"2"} onClick={(event) => this.mudaCor(event, this.state.pergunta5, 'btn2')} className={this.state.pergunta5.btn2}>2</button>
            <button value={"3"} onClick={(event) => this.mudaCor(event, this.state.pergunta5, 'btn3')} className={this.state.pergunta5.btn3}>3</button>
            <button value={"4"} onClick={(event) => this.mudaCor(event, this.state.pergunta5, 'btn4')} className={this.state.pergunta5.btn4}>4</button>
            <button value={"5"} onClick={(event) => this.mudaCor(event, this.state.pergunta5, 'btn5')} className={this.state.pergunta5.btn5}>5</button>
            <br />
            <button className="enviar" type="submit" >Enviar</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
