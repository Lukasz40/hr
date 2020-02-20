import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import RowList from "../RowList";

export default class Certificates extends Component {
  state = {
    certificateName: "",
    certificateYear: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleAdd = () => {
    const add = this.props.handlerAddRow(this.state, "certificates")
    if(add){
      this.setState({
        certificateName: "",
        certificateYear: ""
      })
    }
  }

  render() {
    const list = this.props.userForm.certificates;
    const {
          handlerDeleteRow,
          handleEditChange,
          validateForm,
          editIdx,
          startEditing,
          stopEditing,
          } = this.props
    return (
      <>
        <RowList 
          list={list} 
          editIdx={editIdx} 
          section="certificates" 
          rowName="certificateName"
          rowsList={[
            {
              name: "certificateName",
              label: "Nazwa"
            },
            {
              name: "certificateYear",
              label: "Rok"
            }
          ]}
          handlerDeleteRow={handlerDeleteRow} 
          handleEditChange={handleEditChange}
          startEditing={startEditing} 
          stopEditing={stopEditing}
          handleChange={this.handleChange}
        />
        <Form.Row>
          <Form.Group as={Col} controlId="certificateName">
            <Form.Label>Nazwa</Form.Label>
            <Form.Control
              value={this.state.certificateName}
              onChange={this.handleChange}
              name="certificateName"
              placeholder="wypełnij pole"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="certificateYear">
            <Form.Label>Rok</Form.Label>
            <Form.Control
              value={this.state.certificateYear}
              onChange={this.handleChange}
              name="certificateYear"
              placeholder="wypełnij pole"
            />
          </Form.Group>
          <Form.Group as={Col} className="center">
              <Button onClick={() => this.handleAdd()} disabled={!validateForm(this.state.certificateName,this.state.certificateYear,false)} >
                  Dodaj
              </Button>
          </Form.Group>
        </Form.Row>
      </>
    );
  }
}
