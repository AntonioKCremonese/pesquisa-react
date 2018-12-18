import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {

    super();

    this.state = {
      
      pergunta1 : {btn1:'btn_default',
                  btn2:'btn_default',
                  btn3:'btn_default'},

      pergunta2: {btn1:'btn_default',btn2:'btn_default',
      btn3:'btn_default'},
      pergunta3: {btn1:'btn_default',btn2:'btn_default',
      btn3:'btn_default'},
      oi:''
      
    }
    //this.handleChange = this.handleChange.bind(this);
    //this.mudaCor = this.mudaCor.bind(this);
  }

  /*handleChange(event, pergunta) {
    if (pergunta == '1') {
      this.setState({
        pergunta1: event.target.value,

      });
    } else if (pergunta == '2') {
      this.setState({
        pergunta2: event.target.value,

      });
    } else if (pergunta == '3') {
      this.setState({
        pergunta3: event.target.value,

      });
    }

  }*/

  mudaCor(event,pergunta, botao){
    event.preventDefault();
    pergunta.btn1 = 'btn_default';
    pergunta.btn2 = 'btn_default';
    pergunta.btn3 = 'btn_default';
    
    pergunta[botao] = 'btn_verde';


    this.setState(pergunta);
 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <label className="pergunta">Pergunta 1:</label><br/>
            
            <button onClick={(event) => this.mudaCor(event,this.state.pergunta1, 'btn1')} className={this.state.pergunta1.btn1}>1</button>
            <button onClick={(event) => this.mudaCor(event,this.state.pergunta1, 'btn2')} className={this.state.pergunta1.btn2}>2</button>
            <button onClick={(event) => this.mudaCor(event,this.state.pergunta1, 'btn3')} className={this.state.pergunta1.btn3}>3</button>
            <br/>
            <label className="pergunta">Pergunta 2:</label><br/>
            
           <button onClick={(event) => this.mudaCor(event,this.state.pergunta2,'btn1')} className={this.state.pergunta2.btn1}>1</button>
            <button onClick={(event) => this.mudaCor(event,this.state.pergunta2,'btn2')} className={this.state.pergunta2.btn2}>2</button>
            <button onClick={(event) => this.mudaCor(event,this.state.pergunta2,'btn3')} className={this.state.pergunta2.btn3}>3</button>
            <br/>
            <label className="pergunta">Pergunta 3:</label><br/>
            
            <button onClick={(event) => this.mudaCor(event,'pergunta3',1)} className={this.state.pergunta3.btn1}>1</button>
            <button onClick={(event) => this.mudaCor(event,'pergunta3',2)} className={this.state.pergunta3.btn2}>2</button>
            <button onClick={(event) => this.mudaCor(event,'pergunta3',3)} className={this.state.pergunta3.btn3}>3</button> 
          </form>

          
            
            
          
        </header>
      </div>
    );
  }
}

export default App;
