import React, { Component } from "react";
import { Form, Col, Button } from 'react-bootstrap';
//import RowList from "../RowList";

export default class  Certificates extends Component {
  state = {
    certificate_year: "",
    certificate_name: "",
    certificate_domain: "",
    certificate_rganized: "",
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAdd = () => {
    const add = this.props.handlerAddRow(this.state, "certificates")
    if(add){
      this.setState({
        certificate_year: "",
        certificate_name: "",
        certificate_domain: "",
        certificate_rganized: "",
      })
    }
  }

  render() {
    //const list = this.props.userForm.certificates;
    return (
      <>
        {/* <RowList list={list} section="certificates" /> */}
        <Form.Row>
            <Form.Group as={Col} controlId="formGridYear">
                <Form.Label>Rok ukończenia</Form.Label>
                <Form.Control name="certificate_year" placeholder="wypełnij pole" value={this.state.certificate_year} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridNazwa">
                <Form.Label>Nazwa</Form.Label>
                <Form.Control name="certificate_name" placeholder="wypełnij pole" value={this.state.certificate_name} onChange={this.handleChange} />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridDomena">
                <Form.Label>Domena / Dziedzina</Form.Label>
                <Form.Control name="certificate_domain" placeholder="wypełnij pole" value={this.state.certificate_domain} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZorganizowany">
                <Form.Label>Zorganizowany przez</Form.Label>
                <Form.Control name="certificate_rganized" placeholder="wypełnij pole" value={this.state.certificate_rganized} onChange={this.handleChange} />
            </Form.Group>
        </Form.Row>
        <Form.Row>
          <Button
            className="right"
            onClick={() => this.handleAdd()}
          >
            Dodaj
          </Button>
        </Form.Row>
      </>
    );
  }
}
