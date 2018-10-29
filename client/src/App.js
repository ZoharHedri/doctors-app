import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form';
import ListDoctors from './docList';
import axios from 'axios';


class App extends Component {
  
  state = {list : [] };
    componentDidMount(){
        axios.get('/listDoctors')
            .then( res => {
                console.log(res.data); //.listDoctors
                this.setState({list: res.data});//.listDoctors
            })
            .catch(err => console.log(err));
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <Form/>
        <hr/>
        <ListDoctors list={this.state.list}/>

      </div>
    );
  }
}

export default App;
