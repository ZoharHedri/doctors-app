

import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';



function Doctorslist(props) {
    //console.log(props); //good
  return (
    <div className="Doctorslist">
        <span className="doctor-details">
            Title: <span className="details">{props.Title}</span>
        </span>
        <span className="doctor-details">
            Name: <span className="details">{props.Name}</span>
        </span>
        <span className="doctor-details">
            doctor id: <span className="details">{props.Id}</span>
        </span>
      
    </div>
  )
}



class listDoctors extends Component {

    
    render() {
        return (
            <div>
               {this.props.list.map(item => <Doctorslist key={item.id}{...item} />)}  
            </div>
        );
    }
}

export default listDoctors;