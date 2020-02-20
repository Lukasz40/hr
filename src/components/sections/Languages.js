import React, { Component } from "react";
//import { Form, Col, Button } from 'react-bootstrap';
//import RowList from "../RowList";

export default class  Languages extends Component {
    state = {
        school: "",
        years: ""
      };
    
      handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      };
    
      handleAdd = () => {
        const add = this.props.handlerAddRow(this.state, "education")
        console.log(this.state)
        if(add){
          this.setState({
            school: "",
            years: ""
          })
        }
      }
    render(){
        return (
            <>
            </>
        )
    }
}