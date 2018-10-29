

import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


class form extends Component {
    constructor(props) {
        super(props);
        this.state = {Doctorid: '' , Servicesid: '' , Date: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) { 
        let target = event.target
        let value;
        //if i press on 'Doctorid' i put him in the state else i put 'Servicesid' in the state
        switch(target.name){
          case 'Doctorid':
            value =  target.value;
            console.log(value);
            break;
          case 'Servicesid':
            value =  target.value;
            console.log(value);
            break;
          case 'Date':
            value =  target.value;
            console.log(value);
            break;
          default:
            return;
        }
        let name = target.name;
        this.setState({
            [name]: value
        });
    }

    
    
    handleSubmit(event) {
      event.preventDefault();
      if(this.state.Doctorid !== 3 & this.state.Servicesid === 3){
        console.log(`you can't determine because you need to bring Tofes 17`);
        alert('failed');
      }
      else{
        const appointment = this.state;
        let doctorid = this.state.Doctorid;
        let servicesid = this.state.Servicesid;
        let date = this.state.Date;
        axios.post('/meeting' , appointment)
          .then(function(res){
            console.log('Your choice is ' + doctorid + ' ' + servicesid + ' ' + date);
            alert('meeting has been determine seccessfully!')
          })
          .catch(function(err){
            console.log(err);
          });

        
      }
        
      
    }

    render() {
        return (
        <div className="form-group">

          <form onSubmit={this.handleSubmit}>
          <div>
            <span className="pick">Pick your Doctor id:</span>
              <select className="form-control doctors" value={this.state.Doctorid} name="Doctorid" onChange={this.handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <br/>
            <div>
            <span className="pick">Pick your Services id:</span>
              <select className="form-control services" value={this.state.Servicesid} name="Servicesid" onChange={this.handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <br/>
            <div>
              <span className="pick date">select date (date and time): </span>
              <input className="datetime" type="datetime-local" name="Date" onChange={this.handleChange}></input>
            </div>
            <br/>
            <button className="button" type="submit">Submit</button>
          </form>
        </div>
        );
      }
}

export default form;

