import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import RowList from "../RowList";

export default class Languages extends Component {
  state = {
    languageName: "",
    languageLevel: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleAdd = () => {
    const add = this.props.handlerAddRow(this.state, "languages")
    if(add){
      this.setState({
        languageName: "",
        languageLevel: ""
      })
    }
  }

  render() {
    const list = this.props.userForm.languages;
    const {
          handlerDeleteRow,
          handleEditChange,
          validateForm,
          editIdx,
          startEditing,
          stopEditing,
          editedSection} = this.props
    return (
      <>
        <RowList 
          list={list} 
          editIdx={editIdx} 
          editedSection={editedSection}
          section="languages" 
          rowName="certificateName"
          rowsList={[
            {
              name: "languageName",
              label: "Język"
            },
            {
              name: "languageLevel",
              label: "Poziom"
            }
          ]}
          handlerDeleteRow={handlerDeleteRow} 
          handleEditChange={handleEditChange}
          startEditing={startEditing} 
          stopEditing={stopEditing}
          handleChange={this.handleChange}
        />
        <Form.Row>
          <Form.Group as={Col} controlId="languageName">
            <Form.Label>Nazwa</Form.Label>
            <Form.Control
              value={this.state.languageName}
              onChange={this.handleChange}
              name="languageName"
              placeholder="wypełnij pole"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="languageLevel">
            <Form.Label>Poziom</Form.Label>
            <Form.Control
              value={this.state.languageLevel}
              onChange={this.handleChange}
              name="languageLevel"
              placeholder="wypełnij pole"
            />
          </Form.Group>
          <Form.Group as={Col} className="center">
              <Button onClick={() => this.handleAdd()} disabled={!validateForm(this.state.languageName,this.state.languageLevel,false)} >
                  Dodaj
              </Button>
          </Form.Group>
        </Form.Row>
      </>
    );
  }
}
